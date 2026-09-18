export default function Idx({ n, label }: { n: string; label: string }) {
  return (
    <div className="idx">
      <span className="bar" />
      <b>{n}</b>&nbsp;— {label}
    </div>
  );
}
