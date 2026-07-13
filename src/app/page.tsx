import Capabilities from "./components/capabilities/Capabilities";
import CTA from "./components/cta/CTA";
import DashboardPreview from "./components/dashboard/DashboardPreview";
import Documentation from "./components/documentation/Documentation";
import Hero from "./components/hero/Hero";
import InsightFlow from "./components/insight-flow/InsightFlow";
import Insights from "./components/insights/Insights";
import { Navbar } from "./components/layout";
import Footer from "./components/layout/Footer";
import SignatureSection from "./components/signature/SignatureSection";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden">
        <Hero />

        <InsightFlow />

        <DashboardPreview />

        <Capabilities />

        <SignatureSection />

        <Insights />

        <Documentation />

        <CTA />
      </main>

      <Footer />
    </>
  );
}