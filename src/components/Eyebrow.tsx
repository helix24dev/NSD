export default function Eyebrow({ children, ...rest }: { children: string; "data-tone"?: string }) {
  return (
    <div className="eyebrow" {...rest}>
      {children}
    </div>
  );
}
