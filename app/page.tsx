'use client';

import {
  Navbar,
  Hero,
  LogoBar,
  ProblemSection,
  ComparisonSection,
  PricingDetails,
  BenefitsSection,
  HowItWorks,
  UseCases,
  Testimonials,
  FAQ,
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
      <PricingDetails />
      <BenefitsSection />
      <HowItWorks />
      <UseCases />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
