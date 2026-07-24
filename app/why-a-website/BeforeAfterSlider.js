"use client";

import { useRef, useState, useCallback } from "react";

export default function BeforeAfterSlider({ before, after, beforeLabel = "Facebook Only", afterLabel = "Real Website" }) {
  const containerRef = useRef(null);
  const [pos, setPos] = useState(50);

  const updatePos = useCallback((clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    let pct = ((clientX - rect.left) / rect.width) * 100;
    pct = Math.min(100, Math.max(0, pct));
    setPos(pct);
  }, []);

  const onPointerDown = (e) => {
    e.preventDefault();
    const move = (ev) => updatePos(ev.clientX);
    const up = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    updatePos(e.clientX);
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
  };

  return (
    <div className="baf-wrap" ref={containerRef}>
      <div className="baf-pane baf-before">{before}</div>
      <div
        className="baf-pane baf-after"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        {after}
      </div>
      <div className="baf-divider" style={{ left: `${pos}%` }}>
        <button
          className="baf-handle"
          onPointerDown={onPointerDown}
          onKeyDown={onKeyDown}
          role="slider"
          aria-label="Drag to compare Facebook page and real website"
          aria-valuenow={Math.round(pos)}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <span>⟷</span>
        </button>
      </div>
      <div className="baf-tag baf-tag-before">{beforeLabel}</div>
      <div className="baf-tag baf-tag-after" style={{ opacity: pos > 14 ? 1 : 0 }}>
        {afterLabel}
      </div>
    </div>
  );
}