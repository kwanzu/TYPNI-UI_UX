import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { CommunitySection } from "@/components/community-section"
import { EventsSection } from "@/components/events-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <CommunitySection />
      <EventsSection />
    </div>
  )
}

