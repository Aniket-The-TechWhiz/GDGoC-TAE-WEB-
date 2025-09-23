import { FixedNavigation } from "./components/fixed-navigation"
import { HeroSection } from "./components/hero-section"
import { AboutSection } from "./components/about-section"
import { EventsSection } from "./components/events-section"
import { TeamSection } from "./components/team-section"
import { GallerySection } from "./components/gallery-section"
import { ContactSection } from "./components/contact-section"
import { FAQSection } from "./components/faq-section"
import { FooterSection } from "./components/footer-section"
import { ThemeProvider } from "./components/theme-provider"

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="gdgoc-theme">
      <div className="min-h-screen bg-background text-foreground grid-pattern">
        {/* Navigation */}
        <FixedNavigation />
        
        {/* Main Content */}
        <main>
          <HeroSection />
          <AboutSection />
          <GallerySection />
          <EventsSection />
          <TeamSection />
          <ContactSection />
          <FAQSection />
        </main>
        
        {/* Footer */}
        <FooterSection />
      </div>
    </ThemeProvider>
  )
}