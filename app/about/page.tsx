import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-purple-50">
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-purple-900">
              About TYPNI
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              The Young People's Network International (TYPNI) is a global platform empowering youth to create positive change through connection, innovation, and action.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-purple-800">Our Mission</h2>
              <p className="text-lg text-gray-600">
                TYPNI aims to cultivate a global community of young leaders equipped with the skills, resources, and network to address pressing global challenges and shape a better future for all.
              </p>
              <h2 className="text-3xl font-bold text-purple-800">Our Vision</h2>
              <p className="text-lg text-gray-600">
                We envision a world where young people from all backgrounds are empowered to lead, innovate, and collaborate across borders to create sustainable solutions for a more equitable and prosperous global society.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="TYPNI team members"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">Our Core Values</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Innovation", description: "Fostering creative solutions to global challenges" },
              { title: "Collaboration", description: "Building bridges across cultures and disciplines" },
              { title: "Inclusivity", description: "Embracing diversity and ensuring equal opportunities" },
              { title: "Empowerment", description: "Equipping youth with tools and confidence to lead" },
              { title: "Sustainability", description: "Promoting long-term impact and responsible action" },
              { title: "Integrity", description: "Upholding ethical standards in all our endeavors" },
            ].map((value, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-purple-800">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-800">Join Our Global Movement</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Be part of a network that's shaping the future. Together, we can make a lasting impact on the world.
            </p>
          </div>
          <div className="flex justify-center">
            <Button size="lg" className="bg-purple-800 hover:bg-purple-900">
              Become a Member
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

