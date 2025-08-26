import { Navbar } from "./components/navbar"
import { HeroSection } from "./components/hero-section"
import { BenefitsSection } from "./components/benefits-section"
import { HowItWorksSection } from "./components/how-it-works-section"
import { PricingSection } from "./components/pricing-section"
import { FAQSection } from "./components/faq-section"
import { ContactSection } from "./components/contact-section"
import { Footer } from "./components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex justify-center">
        <div className="w-full max-w-5xl">
          <HeroSection />
          <BenefitsSection />
          <HowItWorksSection />
          <PricingSection />
          <FAQSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}
