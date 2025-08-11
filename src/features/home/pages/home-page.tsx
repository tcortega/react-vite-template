import {
  AnimatedBackground,
  CTASection,
  FeaturesSection,
  Footer,
  HeroSection,
} from "../components";

export function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="relative overflow-hidden">
        <HeroSection />
        <AnimatedBackground />
      </div>
      <FeaturesSection />
      <CTASection />
      <Footer />
    </div>
  );
}
