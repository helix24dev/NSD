import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";

export default function NotFound() {
  return (
    <section className="section d-pattern" style={{ minHeight: "60vh" }}>
      <div className="wrap">
        <Eyebrow>Page not found</Eyebrow>
        <h1 className="h-xl">
          This page has <em>moved on.</em>
        </h1>
        <p className="lede" style={{ marginTop: 18 }}>
          The link may be old or mistyped. Head back to the home page.
        </p>
        <div className="btn-row">
          <Link href="/" className="btn btn-primary">
            Back to home
          </Link>
          <Link href="/contact" className="btn btn-secondary">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
