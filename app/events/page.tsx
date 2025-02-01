import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Users } from 'lucide-react'

export default function EventsPage() {
  const featuredEvent = {
    title: "Global Youth Summit 2025",
    date: "March 15-17, 2025",
    location: "Virtual Event",
    description: "Join young leaders worldwide for three days of inspiration, learning, and networking. Featuring keynote speakers, workshops, and collaborative sessions on pressing global issues.",
    image: "/placeholder.svg?height=600&width=800",
  }

  const upcomingEvents = [
    {
      title: "Innovation Challenge",
      date: "April 5, 2025",
      location: "Multiple Locations",
      description: "Showcase your innovative solutions to global challenges and win exciting prizes.",
    },
    {
      title: "Leadership Workshop Series",
      date: "Monthly",
      location: "Online",
      description: "Develop essential leadership skills through interactive workshops led by experts.",
    },
    {
      title: "Regional Meetups",
      date: "Quarterly",
      location: "Various Cities",
      description: "Connect with TYPNI members in your area for networking and local impact projects.",
    },
  ]

  return (
    <div className="min-h-screen bg-purple-50">
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-purple-900">
              TYPNI Events
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Participate in our global events to learn, connect, and make a difference.
            </p>
          </div>

          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-3xl text-purple-800">Featured Event</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">{featuredEvent.title}</h3>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="h-5 w-5" />
                    <span>{featuredEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="h-5 w-5" />
                    <span>{featuredEvent.location}</span>
                  </div>
                  <p className="text-gray-600">{featuredEvent.description}</p>
                  <Button className="bg-purple-800 hover:bg-purple-900">Register Now</Button>
                </div>
                <div className="relative h-[300px]">
                  <Image
                    src={featuredEvent.image}
                    alt={featuredEvent.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-bold text-purple-800 mb-6">Upcoming Events</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-gray-600">{event.description}</p>
                  <Button className="w-full bg-purple-800 hover:bg-purple-900">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-800">Why Attend TYPNI Events?</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Our events offer unique opportunities for growth, networking, and making a global impact.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Users,
                title: "Network Globally",
                description: "Connect with like-minded individuals from diverse backgrounds and cultures.",
              },
              {
                icon: Calendar,
                title: "Learn from Experts",
                description: "Gain insights from world-renowned speakers and industry leaders.",
              },
              {
                icon: MapPin,
                title: "Create Impact",
                description: "Collaborate on projects that address real-world challenges.",
              },
            ].map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <item.icon className="h-10 w-10 text-purple-800" />
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-purple-800 mb-6">Stay Updated</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Don't miss out on our upcoming events. Subscribe to our newsletter for the latest updates.
          </p>
          <Button size="lg" className="bg-purple-800 hover:bg-purple-900">
            Subscribe to Newsletter
          </Button>
        </div>
      </section>
    </div>
  )
}

