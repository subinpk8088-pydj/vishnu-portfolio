import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot  = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    const move = (e) => {
      const { clientX: x, clientY: y } = e;
      if (dot.current)  { dot.current.style.left  = x + "px"; dot.current.style.top  = y + "px"; }
      if (ring.current) { ring.current.style.left = x + "px"; ring.current.style.top = y + "px"; }
    };

    const grow = () => {
      if (ring.current) { ring.current.style.width = "56px"; ring.current.style.height = "56px"; ring.current.style.borderColor = "rgba(163,198,139,0.8)"; }
    };
    const shrink = () => {
      if (ring.current) { ring.current.style.width = "32px"; ring.current.style.height = "32px"; ring.current.style.borderColor = "rgba(163,198,139,0.5)"; }
    };

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button").forEach(el => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div ref={dot}  className="cursor-dot" />
      <div ref={ring} className="cursor-ring" />
    </>
  );
}