import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactContent from "@/components/contact-content"
import PromoBanner from "@/components/promo-banner"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <PromoBanner />
      <Header />
      <div className="pt-24 pb-16">
        <ContactContent />
      </div>
      <Footer />
    </main>
  )
}

