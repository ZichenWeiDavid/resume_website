import { useEffect, useState } from "react";

const FLOATERS = ["⚡", "🛡️", "📊", "🏆", "🤖", "☁️", "🗜️", "🎓", "💻", "🚀"];

export default function Background() {
  // Mouse-parallax for the aurora blobs — subtle, disabled for reduced motion.
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setOffset({ x, y });
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div className="bg-fx" aria-hidden="true">
      <div className="bg-grid" />
      <div
        className="blob blob-1"
        style={{ transform: `translate3d(${offset.x * 24}px, ${offset.y * 24}px, 0)` }}
      />
      <div
        className="blob blob-2"
        style={{ transform: `translate3d(${offset.x * -32}px, ${offset.y * -18}px, 0)` }}
      />
      <div
        className="blob blob-3"
        style={{ transform: `translate3d(${offset.x * 16}px, ${offset.y * -28}px, 0)` }}
      />
      <div className="floaters">
        {FLOATERS.map((emoji, i) => (
          <span
            key={i}
            className="floater"
            style={{
              left: `${(i * 9.7 + 4) % 96}%`,
              animationDelay: `${i * -2.3}s`,
              animationDuration: `${16 + (i % 5) * 4}s`,
              fontSize: `${1 + (i % 3) * 0.4}rem`,
            }}
          >
            {emoji}
          </span>
        ))}
      </div>
    </div>
  );
}
