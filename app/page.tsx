import Script from "next/script"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Hero } from "@/components/home/hero"
import { ExamGrid } from "@/components/home/exam-grid"
import { OverhaulSection } from "@/components/home/overhaul-section"
import { organizationSchema } from "@/lib/seo"

export const metadata = {
  title: "Clearsit — UK university admissions test guidance",
  description:
    "Find the right UK university admissions test and prepare with practice, guides, and up-to-date exam advice.",
}

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Script id="organization-schema" type="application/ld+json">
          {JSON.stringify(organizationSchema())}
        </Script>
        <Hero />
        <ExamGrid />
        <OverhaulSection />
      </main>
      <SiteFooter />
    </div>
  )
}
