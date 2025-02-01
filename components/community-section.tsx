import Image from "next/image"
import { Button } from "@/components/ui/button"

export function CommunitySection() {
  return (
    <section className="py-20 bg-purple-50">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-[200px]">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Community member 1"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative h-[200px] mt-8">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Community member 2"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative h-[200px] mt-[-2rem]">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Community member 3"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative h-[200px] mt-6">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Community member 4"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-purple-800">
              Join Our Thriving Community
            </h2>
            <p className="text-lg text-gray-600">
              Connect with like-minded individuals, share your experiences, and grow together. Our community is built on collaboration, support, and shared success.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-purple-800" />
                <p>5,000+ Active Members</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-purple-800" />
                <p>100+ Countries Represented</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-purple-800" />
                <p>500+ Projects Completed</p>
              </div>
            </div>
            <Button size="lg" className="bg-purple-800 hover:bg-purple-900">
              Join the Community
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

