import styles from "./RouteDiagram.module.css";

const stops = [
  { x: 40, y: 120, label: "NSD DEPOT", strong: true, anchor: "start" },
  { x: 340, y: 50, label: "RIDER + BIKE", strong: false, anchor: "start" },
  { x: 660, y: 130, label: "PLATFORM APP", strong: false, anchor: "middle" },
  { x: 960, y: 55, label: "CUSTOMER DOOR", strong: true, anchor: "end" },
] as const;

export default function RouteDiagram() {
  return (
    <svg
      className={styles.svg}
      viewBox="0 0 1000 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Route diagram: NSD depot to rider and bike, to platform app, to customer door"
    >
      <path className={styles.path} d="M40,120 L340,50 L660,130 L960,55" stroke="#f26622" strokeWidth="2" />
      {stops.map((s, i) => (
        <g key={s.label}>
          <line x1={s.x} y1={s.y} x2={s.x} y2="160" stroke="#f8f7f9" strokeOpacity=".22" />
          <circle
            className={styles.dot}
            style={{ animationDelay: `${0.3 + i * 0.4}s` }}
            cx={s.x}
            cy={s.y}
            r={i === stops.length - 1 ? 6.5 : 5}
            fill={i === stops.length - 1 ? "#f26622" : "#f8f7f9"}
          />
          <text
            className={`${styles.lbl} ${s.strong ? styles.strong : ""}`}
            x={s.x}
            y="178"
            textAnchor={s.anchor}
          >
            {s.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
