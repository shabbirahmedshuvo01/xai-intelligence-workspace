import HeroBackground from "./HeroBackground";
import HeroCanvas from "./HeroCanvas";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen pt-32">
      <HeroBackground />
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <HeroContent />

        <HeroCanvas />
      </div>
    </section>
  );
}