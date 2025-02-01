import { Globe2, Users, Lightbulb, Trophy } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function FeaturesSection() {
  const features = [
    {
      icon: Globe2,
      title: "Global Network",
      description: "Connect with young leaders from around the world and expand your horizons.",
    },
    {
      icon: Users,
      title: "Community Projects",
      description: "Collaborate on meaningful projects that make a real difference in communities.",
    },
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description: "Access resources and mentorship to bring your innovative ideas to life.",
    },
    {
      icon: Trophy,
      title: "Recognition",
      description: "Get recognized for your achievements and contributions to the community.",
    },
  ]

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-purple-800">
            Why Join TYPNI?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover the benefits of being part of our global youth network
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <feature.icon className="h-10 w-10 text-purple-800" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

