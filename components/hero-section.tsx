import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-purple-50 py-20">
      <div className="container relative z-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-purple-900">
              Empowering Young Voices Globally
            </h1>
            <p className="text-lg text-gray-600 md:text-xl">
              Join TYPNI and be part of a vibrant community of young leaders shaping the future through innovation, collaboration, and positive change.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-purple-800 hover:bg-purple-900">
                Get Started
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[600px]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2009.48.32_80aa4d9c.jpg-kfj0HiAmGYB9XpeDVr2uB7BJB2VSdl.jpeg"
              alt="Young people collaborating"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

