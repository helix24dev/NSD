import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import type { ReactNode } from "react";

/**
 * A slot for a generated photo. Put the file at public/images/<name>.(webp|jpg|jpeg|png)
 * and it is picked up at build time; until then the fallback (usually the fleet illustration) shows.
 * IMAGES.md lists every slot with a generation prompt.
 */
export default function Picture({
  name,
  alt,
  ratio = "16x10",
  fallback,
  priority = false,
  className = "",
}: {
  name: string;
  alt: string;
  ratio?: "16x10" | "4x3" | "1x1";
  fallback?: ReactNode;
  priority?: boolean;
  className?: string;
}) {
  let src: string | null = null;
  for (const ext of ["webp", "jpg", "jpeg", "png"]) {
    if (fs.existsSync(path.join(process.cwd(), "public", "images", `${name}.${ext}`))) {
      src = `/images/${name}.${ext}`;
      break;
    }
  }
  return (
    <div className={`pic pic--${ratio} ${className}`}>
      {src ? (
        <Image src={src} alt={alt} fill sizes="(max-width: 900px) 100vw, 50vw" priority={priority} />
      ) : (
        <div className="pic-fallback" data-slot={name}>
          {fallback}
        </div>
      )}
    </div>
  );
}
