import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Hero } from "@/components/home/hero"
import { ExamGrid } from "@/components/home/exam-grid"
import { OverhaulSection } from "@/components/home/overhaul-section"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <ExamGrid />
        <OverhaulSection />
      </main>
      <SiteFooter />
    </div>
  )
}
