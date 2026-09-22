"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./Calculator.module.css";

const fmtAED = (n: number) => "AED " + Math.round(n).toLocaleString("en-US");

type Field = {
  id: "fleet" | "cost" | "rev" | "term";
  label: string;
  min: number;
  max: number;
  step: number;
  note: string;
  format: (v: number) => string;
};

const fields: Field[] = [
  {
    id: "fleet",
    label: "Number of bikes funded",
    min: 10,
    max: 300,
    step: 5,
    note: "One trained rider and one maintained bike per unit.",
    format: (v) => String(v),
  },
  {
    id: "cost",
    label: "Investment per bike",
    min: 5000,
    max: 15000,
    step: 250,
    note: "Example figure: bike, gear, onboarding and training.",
    format: fmtAED,
  },
  {
    id: "rev",
    label: "Net monthly return per bike",
    min: 400,
    max: 2200,
    step: 50,
    note: "Example figure: what you receive per bike each month, after operating costs.",
    format: fmtAED,
  },
  {
    id: "term",
    label: "Investment term",
    min: 12,
    max: 60,
    step: 6,
    note: "How long the investment runs.",
    format: (v) => `${v} mo`,
  },
];

export default function Calculator() {
  const [v, setV] = useState({ fleet: 60, cost: 9500, rev: 1100, term: 36 });
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const out = useMemo(() => {
    const investment = v.fleet * v.cost;
    const monthly = v.fleet * v.rev;
    const totalReturn = monthly * v.term;
    const profit = totalReturn - investment;
    const roi = investment > 0 ? (profit / investment) * 100 : 0;
    const payback = monthly > 0 ? investment / monthly : Infinity;
    return { investment, monthly, profit, roi, payback };
  }, [v]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const draw = () => {
      const ratio = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = 160;
      canvas.width = w * ratio;
      canvas.height = h * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      ctx.clearRect(0, 0, w, h);

      const { investment, monthly } = out;
      const term = v.term;
      const points: number[] = [];
      for (let m = 0; m <= term; m++) points.push(-investment + monthly * m);
      const minV = Math.min(0, ...points);
      const maxV = Math.max(0, ...points);
      const pad = { l: 6, r: 6, t: 12, b: 22 };
      const plotW = w - pad.l - pad.r;
      const plotH = h - pad.t - pad.b;
      const xFor = (m: number) => pad.l + (m / term) * plotW;
      const yFor = (val: number) => pad.t + (1 - (val - minV) / (maxV - minV || 1)) * plotH;
      const zeroY = yFor(0);

      ctx.setLineDash([3, 4]);
      ctx.strokeStyle = "rgba(12,29,54,.25)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(pad.l, zeroY);
      ctx.lineTo(w - pad.r, zeroY);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.beginPath();
      ctx.moveTo(xFor(0), yFor(points[0]));
      points.forEach((val, m) => ctx.lineTo(xFor(m), yFor(val)));
      ctx.lineTo(xFor(term), zeroY);
      ctx.lineTo(xFor(0), zeroY);
      ctx.closePath();
      const grad = ctx.createLinearGradient(0, pad.t, 0, h - pad.b);
      grad.addColorStop(0, "rgba(242,102,34,.30)");
      grad.addColorStop(1, "rgba(242,102,34,.02)");
      ctx.fillStyle = grad;
      ctx.fill();

      ctx.beginPath();
      points.forEach((val, m) => (m === 0 ? ctx.moveTo(xFor(m), yFor(val)) : ctx.lineTo(xFor(m), yFor(val))));
      ctx.strokeStyle = "#f26622";
      ctx.lineWidth = 2;
      ctx.lineJoin = "round";
      ctx.stroke();

      const paybackMonths = monthly > 0 ? investment / monthly : term;
      if (paybackMonths <= term) {
        ctx.beginPath();
        ctx.arc(xFor(paybackMonths), zeroY, 4, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = "#f26622";
        ctx.stroke();
      }
      ctx.fillStyle = "#f26622";
      ctx.beginPath();
      ctx.arc(xFor(term), yFor(points[term]), 3.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.font = "600 11px Poppins, sans-serif";
      ctx.fillStyle = "rgba(12,29,54,.5)";
      ctx.textAlign = "left";
      ctx.fillText("M0", pad.l, h - 6);
      ctx.textAlign = "right";
      ctx.fillText("M" + term, w - pad.r, h - 6);
    };

    draw();
    window.addEventListener("resize", draw);
    return () => window.removeEventListener("resize", draw);
  }, [out, v.term]);

  return (
    <div className={styles.ticket}>
      <div className={styles.grid}>
        <div className={styles.inputs}>
          <div className={styles.title}>Your inputs</div>
          {fields.map((f) => (
            <div className={styles.field} key={f.id}>
              <div className={styles.fieldTop}>
                <label htmlFor={`calc-${f.id}`}>{f.label}</label>
                <span className={`${styles.val} tnum`}>{f.format(v[f.id])}</span>
              </div>
              <input
                id={`calc-${f.id}`}
                type="range"
                min={f.min}
                max={f.max}
                step={f.step}
                value={v[f.id]}
                onChange={(e) => setV((s) => ({ ...s, [f.id]: Number(e.target.value) }))}
                style={{ ["--p" as string]: `${((v[f.id] - f.min) / (f.max - f.min)) * 100}%` }}
              />
              <div className={styles.fieldNote}>{f.note}</div>
            </div>
          ))}
        </div>

        <div className={styles.outputs}>
          <div className={styles.title}>Estimated outcome</div>
          <div className={styles.outGrid}>
            <Out label="Total investment" value={fmtAED(out.investment)} />
            <Out label="Monthly return" value={fmtAED(out.monthly)} accent />
            <Out
              label="Money back in"
              value={(isFinite(out.payback) ? out.payback.toFixed(1) : "—") + " mo"}
              sub={`of a ${v.term}-month term`}
            />
            <Out
              label="Profit at the end of the term"
              value={fmtAED(out.profit)}
              sub={`≈ ${out.roi.toFixed(0)}% total ROI`}
              accent
            />
          </div>
          <div className={styles.chartWrap}>
            <canvas ref={canvasRef} className={styles.chart} />
            <div className={styles.legend}>
              <span>
                <i style={{ background: "#f26622" }} />
                Cumulative return
              </span>
              <span>
                <i style={{ background: "rgba(12,29,54,.3)" }} />
                Break-even
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Out({ label, value, sub, accent }: { label: string; value: string; sub?: string; accent?: boolean }) {
  return (
    <div className={styles.outCell}>
      <div className={styles.lab}>{label}</div>
      <div className={`${styles.v} ${accent ? styles.accent : ""} tnum`}>{value}</div>
      {sub && <div className={styles.sub}>{sub}</div>}
    </div>
  );
}
