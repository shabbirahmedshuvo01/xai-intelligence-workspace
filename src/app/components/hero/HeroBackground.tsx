export default function HeroBackground() {
  return (
    <>
      {/* Top Glow */}
      <div className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px]" />

      {/* Left Glow */}
      <div className="absolute left-0 top-40 h-87.5 w-87.5 rounded-full bg-cyan-500/10 blur-[120px]" />

      {/* Right Glow */}
      <div className="absolute right-0 top-60 h-87.5 w-87.5 rounded-full bg-fuchsia-500/10 blur-[140px]" />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
    </>
  );
}