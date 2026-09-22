import CountUp from "./CountUp";

const stats = [
  { n: 10, suffix: "+", label: "Years operating in the UAE" },
  { n: 5, suffix: "+", label: "Years running delivery fleets" },
  { n: 4, suffix: "", label: "Leading delivery apps we ride for" },
  { n: 100, suffix: "%", label: "Rider plus bike, supplied together" },
];

export default function Stats() {
  return (
    <div className="stats">
      {stats.map((s, i) => (
        <div className="stat reveal" data-delay={i * 80} key={s.label}>
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
