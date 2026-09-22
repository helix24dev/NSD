import { fleetColors } from "@/lib/site";
import styles from "./Fleet.module.css";

/**
 * A flat-style fleet of delivery riders. Each rider's jacket and box take one colour
 * from the fleet palette; bikes, helmets and trousers stay neutral. No branding.
 */
function Rider({ color, x, y, scale = 1, delay = 0 }: { color: string; x: number; y: number; scale?: number; delay?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`} style={{ color }}>
      {/* CSS transform on this inner group would otherwise override the SVG transform attribute above. */}
      <g className={styles.rider} style={{ animationDelay: `${delay}s` }}>
      {/* motion lines */}
      <g stroke="#cfd4dc" strokeWidth="4" strokeLinecap="round" opacity=".8">
        <line x1="-34" y1="74" x2="-8" y2="74" />
        <line x1="-26" y1="92" x2="-6" y2="92" />
      </g>
      {/* rear wheel */}
      <circle cx="42" cy="118" r="24" fill="#0c1d36" />
      <circle cx="42" cy="118" r="10" fill="#fff" />
      <circle cx="42" cy="118" r="4" fill="#0c1d36" />
      {/* front wheel */}
      <circle cx="176" cy="118" r="24" fill="#0c1d36" />
      <circle cx="176" cy="118" r="10" fill="#fff" />
      <circle cx="176" cy="118" r="4" fill="#0c1d36" />
      {/* scooter body */}
      <path d="M52 100 h84 a10 10 0 0 0 9 -6 l14 -36 a8 8 0 0 1 8 -5 h6" fill="none" stroke="#0c1d36" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="66" y="104" width="64" height="10" rx="5" fill="#0c1d36" />
      <rect x="40" y="70" width="54" height="16" rx="8" fill="#0c1d36" />
      <path d="M150 62 l-8 40" stroke="#4a5568" strokeWidth="8" strokeLinecap="round" />
      <path d="M156 50 h22" stroke="#0c1d36" strokeWidth="7" strokeLinecap="round" />
      <path d="M140 60 q22 -6 30 2 l-10 36 q-10 2 -22 -4 z" fill="#4a5568" />
      {/* delivery box */}
      <rect x="0" y="34" width="46" height="40" rx="8" fill="currentColor" />
      <rect x="0" y="48" width="46" height="8" fill="rgba(255,255,255,.35)" />
      <rect x="16" y="26" width="14" height="10" rx="3" fill="#0c1d36" />
      {/* rider */}
      <path d="M96 84 l10 22" stroke="#0c1d36" strokeWidth="10" strokeLinecap="round" />
      <path d="M106 106 h14" stroke="#0c1d36" strokeWidth="10" strokeLinecap="round" />
      <rect x="76" y="40" width="34" height="46" rx="14" fill="currentColor" />
      <path d="M104 56 l46 -6" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
      <circle cx="150" cy="50" r="6" fill="#0c1d36" />
      <circle cx="94" cy="26" r="16" fill="#0c1d36" />
      <path d="M100 22 a16 16 0 0 1 10 10 l-12 2 z" fill="rgba(255,255,255,.55)" />
      </g>
    </g>
  );
}

export default function Fleet({ compact = false }: { compact?: boolean }) {
  const riders = compact
    ? [
        { x: 40, y: 40, s: 1, d: 0 },
        { x: 320, y: 40, s: 1, d: 0.4 },
        { x: 600, y: 40, s: 1, d: 0.8 },
      ]
    : [
        { x: 520, y: 0, s: 0.72, d: 0.6 },
        { x: 300, y: 60, s: 0.86, d: 0.3 },
        { x: 40, y: 130, s: 1, d: 0 },
        { x: 420, y: 210, s: 0.95, d: 0.9 },
        { x: 720, y: 190, s: 0.8, d: 1.2 },
      ];
  const vb = compact ? "0 0 860 200" : "0 0 940 400";
  return (
    <svg viewBox={vb} className={styles.svg} role="img" aria-label="A fleet of delivery riders in different colours">
      {!compact && <ellipse cx="470" cy="392" rx="440" ry="10" fill="#eef0f4" />}
      {riders.map((r, i) => (
        <Rider key={i} color={fleetColors[i % fleetColors.length]} x={r.x} y={r.y} scale={r.s} delay={r.d} />
      ))}
    </svg>
  );
}
