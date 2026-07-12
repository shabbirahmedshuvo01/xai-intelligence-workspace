import Hero from "./components/hero/Hero";
import { Navbar } from "./components/layout";


export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
      </main>
    </>
  );
}