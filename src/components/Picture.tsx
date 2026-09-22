import Image from "next/image";

/** Transparent artwork from public/images, rendered at its natural aspect ratio with no box around it. */
const art = {
  "riders-front": { w: 1500, h: 908 },
  "riders-back": { w: 1522, h: 896 },
  "fleet-bikes": { w: 1600, h: 752 },
} as const;

export default function Picture({
  name,
  alt,
  priority = false,
  className = "",
  sizes = "(max-width: 900px) 100vw, 50vw",
}: {
  name: keyof typeof art;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
}) {
  const { w, h } = art[name];
  return (
    <Image
      src={`/images/${name}.webp`}
      alt={alt}
      width={w}
      height={h}
      sizes={sizes}
      priority={priority}
      className={`art ${className}`}
    />
  );
}
