const stars = [
  { top: "17%", left: "84%", color: "#D99BFF" },
  { top: "31%", left: "30%", color: "#C9D9FF" },
  { top: "44%", left: "66%", color: "#C9D9FF" },
  { top: "62%", left: "56%", color: "#C9D9FF" },
  { top: "76%", left: "11%", color: "#C9D9FF" },
  { top: "74%", left: "32%", color: "#C9D9FF" },
  { top: "74%", left: "70%", color: "#C9D9FF" },
  { top: "82%", left: "86%", color: "#C9D9FF" },
];

export function FloatingStars() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {stars.map((star, index) => (
        <span
          key={index}
          className="absolute select-none text-2xl font-bold leading-none"
          style={{
            top: star.top,
            left: star.left,
            color: star.color,
          }}
        >
          ✦
        </span>
      ))}
    </div>
  );
}