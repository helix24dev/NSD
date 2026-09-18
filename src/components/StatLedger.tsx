import CountUp from "./CountUp";

const stats = [
  { n: 10, suffix: "+", label: "Years operating in the UAE" },
  { n: 5, suffix: "+", label: "Years of dedicated 3PL expertise" },
  { n: 4, suffix: "", label: "Major platform partnerships" },
  { n: 100, suffix: "%", label: "Fleet & workforce supply model" },
];

export default function StatLedger() {
  return (
    <div className="stat-ledger">
      {stats.map((s, i) => (
        <div className="stat-cell reveal" data-delay={i * 90} key={s.label}>
          <div className="v tnum">
            <CountUp to={s.n} />
            <span>{s.suffix}</span>
          </div>
          <div className="l">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
