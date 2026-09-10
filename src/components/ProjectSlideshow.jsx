import React, { useState, useEffect, useRef } from "react";
import { ImageOff } from "lucide-react";

/**
 * ProjectSlideshow — auto-sliding image carousel scoped per-card with touch swipe support.
 */
export default function ProjectSlideshow({
  images = [],
  alt = "Screenshot proyek",
  fit = "cover",
  interval = 3500,
}) {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [brokenMap, setBrokenMap] = useState({});
  const trackRef = useRef(null);
  const timerRef = useRef(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const total = images.length;

  // Auto-advance
  useEffect(() => {
    if (total < 2 || hovered) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, interval);
    return () => clearInterval(timerRef.current);
  }, [total, hovered, interval]);

  // Keyboard arrow navigation when card is hovered
  useEffect(() => {
    if (!hovered) return;
    const handler = (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setIndex((i) => (i === 0 ? total - 1 : i - 1));
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        setIndex((i) => (i + 1) % total);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [hovered, total]);

  // Touch swipe support for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 40; // minimum swipe distance

    if (diff > threshold) {
      // Swipe left -> Next
      setIndex((i) => (i + 1) % total);
    } else if (diff < -threshold) {
      // Swipe right -> Prev
      setIndex((i) => (i === 0 ? total - 1 : i - 1));
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const markBroken = (i) =>
    setBrokenMap((m) => ({ ...m, [i]: true }));

  if (total === 0) {
    return (
      <div
        style={{
          width: "100%", height: "100%",
          display: "flex", alignItems: "center", justifyContent: "center",
          background: "var(--bg-soft)", color: "var(--text-faint)",
          fontSize: 12, fontFamily: "var(--font-mono)",
        }}
      >
        <ImageOff size={28} />
      </div>
    );
  }

  const single = total === 1;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        position: "relative", width: "100%", height: "100%",
        overflow: "hidden", borderRadius: 0,
        touchAction: "pan-y",
      }}
    >
      {/* Slide track */}
      <div
        ref={trackRef}
        style={{
          display: "flex",
          height: "100%",
          width: `${total * 100}%`,
          transform: `translateX(-${(index * 100) / total}%)`,
          transition: "transform 0.85s cubic-bezier(0.22, 1, 0.36, 1)",
          willChange: "transform",
        }}
      >
        {images.map((src, i) => (
          <div
            key={`${src}-${i}`}
            style={{
              width: `${100 / total}%`,
              height: "100%",
              flexShrink: 0,
              background: "var(--bg-card-subtle)",
            }}
          >
            {!brokenMap[i] ? (
              <img
                src={src}
                alt={`${alt} (${i + 1})`}
                loading="lazy"
                onError={() => markBroken(i)}
                style={{
                  width: "100%", height: "100%",
                  objectFit: fit, display: "block",
                  background: "var(--bg-card-subtle)",
                }}
              />
            ) : (
              <div style={{
                width: "100%", height: "100%",
                display: "flex", alignItems: "center", justifyContent: "center",
                background: "var(--bg-soft)", color: "var(--text-faint)",
                flexDirection: "column", gap: 6,
              }}>
                <ImageOff size={32} color="var(--terracotta)" />
                <span style={{ fontSize: 11, fontFamily: "var(--font-mono)" }}>
                  Screenshot tidak tersedia
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Slide indicator dots (only if more than one image) */}
      {!single && (
        <div style={{
          position: "absolute", bottom: 10, left: "50%",
          transform: "translateX(-50%)",
          display: "flex", gap: 6, padding: "4px 8px",
          background: "rgba(10, 15, 29, 0.55)", backdropFilter: "blur(6px)",
          borderRadius: 999, zIndex: 4,
        }}>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setIndex(i);
              }}
              aria-label={`Slide ${i + 1}`}
              style={{
                width: i === index ? 20 : 6,
                height: 6, borderRadius: 999, border: "none",
                background: i === index ? "#FFFFFF" : "rgba(255,255,255,0.55)",
                cursor: "pointer", transition: "all 0.3s ease",
                padding: 0,
              }}
            />
          ))}
        </div>
      )}

      {/* Slide counter (top-right corner compact) */}
      {!single && (
        <div style={{
          position: "absolute", top: 10, right: 10, zIndex: 4,
          background: "rgba(10, 15, 29, 0.6)", backdropFilter: "blur(4px)",
          color: "#FFFFFF", padding: "3px 8px", borderRadius: 6,
          fontSize: 10.5, fontFamily: "var(--font-mono)", fontWeight: 600,
        }}>
          {index + 1} / {total}
        </div>
      )}

      {/* Subtle hover hint */}
      {!single && (
        <div className="slideshow-hint" style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          boxShadow: "inset 0 0 0 2px rgba(196, 106, 74, 0)",
          transition: "box-shadow 0.3s ease",
        }} />
      )}
    </div>
  );
}
