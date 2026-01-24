import {
  Navbar,
  Hero,
  LogoBar,
  ProblemSection,
  ComparisonSection,
  BenefitsSection,
  HowItWorks,
  UseCases,
  Testimonials,
  FinalCTA,
  Footer,
  WhatsAppButton,
} from '@/components';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <LogoBar />
      <ProblemSection />
      <ComparisonSection />
      <BenefitsSection />
      <HowItWorks />
      <UseCases />
      <Testimonials />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
