import DashboardPreview from "./components/dashboard/DashboardPreview";
import Hero from "./components/hero/Hero";
import InsightFlow from "./components/insight-flow/InsightFlow";
import { Navbar } from "./components/layout";
import SignatureSection from "./components/signature/SignatureSection";


export default function
  HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <InsightFlow />
        <DashboardPreview />
        <SignatureSection />
      </main>
    </>
  );
}