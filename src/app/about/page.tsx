import Header from "@/components/header"
import Footer from "@/components/footer"
import AboutContent from "@/components/about-content"
import PromoBanner from "@/components/promo-banner"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <PromoBanner />
      <Header />
      <div className="pt-24 pb-16">
        <AboutContent />
      </div>
      <Footer />
    </main>
  )
}

