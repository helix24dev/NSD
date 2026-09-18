"use client";

import { useEffect, useState } from "react";

export default function DubaiClock() {
  const [time, setTime] = useState("—");
  useEffect(() => {
    const tick = () => {
      try {
        setTime(
          new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Dubai" }),
        );
      } catch {
        setTime("—");
      }
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="mono" style={{ fontSize: 11.5, letterSpacing: ".02em" }}>
      DXB · {time}
    </div>
  );
}
