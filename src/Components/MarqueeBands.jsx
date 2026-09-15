import React from "react";

const words = ["DESIGN", "MOTION", "DEVELOPMENT", "WEBFLOW", "GRAPHIC"];
const repeated = [...words, ...words, ...words];

function Row({ duration, reverse }) {
  const items = repeated.map((w, i) => (
    <span key={i} style={{ padding: "0 24px", fontWeight: 700, fontSize: 28, color: "#fff", whiteSpace: "nowrap" }}>
      {w} <span style={{ color: "#ffffffaa", fontSize: 20 }}>✳</span>
    </span>
  ));
  return (
    <div style={{
      display: "flex", alignItems: "center",
      animation: `marquee ${duration}s linear infinite ${reverse ? "reverse" : "normal"}`,
    }}>
      {items}{items}
    </div>
  );
}

export default function MarqueeBands() {
  return (
    <div style={{ position: "relative", width: "100%", height: 220, overflow: "hidden", background: "#0b0b1a" }}>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>

      <div style={{ position: "absolute", top: 20, left: "-10%", width: "120%", height: 90, display: "flex", alignItems: "center", overflow: "hidden", background: "#8750F7", transform: "rotate(-5deg)", zIndex: 2 }}>
        <Row duration={25} />
      </div>

      <div style={{ position: "absolute", top: 110, left: "-10%", width: "120%", height: 90, display: "flex", alignItems: "center", overflow: "hidden", background: "#2a1a4d", transform: "rotate(-5deg)", zIndex: 1 }}>
        <Row duration={30} reverse />
      </div>
    </div>
  );
}