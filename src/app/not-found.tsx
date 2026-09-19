import Link from "next/link";
import Idx from "@/components/Idx";

export default function NotFound() {
  return (
    <section className="section section--navy section--grain section--grid" style={{ minHeight: "70vh" }}>
      <div className="wrap">
        <Idx label="404 · Off route" />
        <h1 className="h-xl">
          This page isn&rsquo;t on <em>the route.</em>
        </h1>
        <p className="lede" style={{ marginTop: 20 }}>
          The address may have changed. Head back to the depot.
        </p>
        <div className="btn-row">
          <Link href="/" className="btn btn-solid">
            Back to home →
          </Link>
          <Link href="/contact" className="btn btn-line">
            Contact NSD
          </Link>
        </div>
      </div>
    </section>
  );
}
