import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CommunityPage() {
  const communityHighlights = [
    {
      name: "Global Connections",
      description: "Connect with peers from over 150 countries, fostering cross-cultural understanding and collaboration.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Knowledge Sharing",
      description: "Access a wealth of resources, webinars, and workshops to enhance your skills and knowledge.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Project Collaboration",
      description: "Join or initiate projects that address local and global challenges, making a real-world impact.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const testimonials = [
    {
      quote: "TYPNI has opened doors I never knew existed. The connections I've made and the projects I've been part of have shaped my career and worldview.",
      author: "Sarah L., United States",
    },
    {
      quote: "Being part of this community has given me the confidence to lead change in my local community. The support from fellow members is incredible.",
      author: "Ahmed K., Egypt",
    },
    {
      quote: "The diversity of perspectives in TYPNI is its greatest strength. I've learned so much from collaborating with peers from different cultures.",
      author: "Mei C., China",
    },
  ]

  return (
    <div className="min-h-screen bg-purple-50">
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-purple-900">
              Our Community
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Join a global network of young leaders passionate about creating positive change.
            </p>
          </div>

          <Tabs defaultValue="global-connections" className="space-y-8">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
              {communityHighlights.map((highlight, index) => (
                <TabsTrigger key={index} value={highlight.name.toLowerCase().replace(/\s+/g, '-')}>
                  {highlight.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {communityHighlights.map((highlight, index) => (
              <TabsContent key={index} value={highlight.name.toLowerCase().replace(/\s+/g, '-')}>
                <Card>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-purple-800">{highlight.name}</h3>
                        <p className="text-gray-600">{highlight.description}</p>
                        <Button className="bg-purple-800 hover:bg-purple-900">Learn More</Button>
                      </div>
                      <div className="relative h-[300px]">
                        <Image
                          src={highlight.image}
                          alt={highlight.name}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">Community Impact</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { stat: "50,000+", label: "Active Members" },
              { stat: "1,000+", label: "Ongoing Projects" },
              { stat: "200+", label: "Partner Organizations" },
              { stat: "5M+", label: "Lives Impacted" },
            ].map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-purple-800">{item.stat}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">Voices from Our Community</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6 space-y-4">
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                  <p className="text-right font-semibold">- {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-purple-900 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Global Community</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Be part of a network that's shaping the future. Connect, collaborate, and create impact with young leaders from around the world.
          </p>
          <Button size="lg" variant="outline" className="bg-white text-purple-900 hover:bg-purple-100">
            Become a Member
          </Button>
        </div>
      </section>
    </div>
  )
}

