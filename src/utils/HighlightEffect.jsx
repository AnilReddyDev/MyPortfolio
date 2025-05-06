import { useState, useEffect } from "react";

const HighlightEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div
        className="pointer-events-none fixed top-0 left-0  w-96 h-96 z-20 rounded-full bg-blue-400/[0.25] opacity-40  blur-3xl transform -translate-x-1/2 -translate-y-1/2"
        style={{ top: `${position.y}px`, left: `${position.x}px` }}
      ></div>
    </div>
  );
};

export default HighlightEffect;
