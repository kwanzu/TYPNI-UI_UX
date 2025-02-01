import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from 'lucide-react'

export function EventsSection() {
  const events = [
    {
      title: "Global Youth Summit 2025",
      date: "March 15-17, 2025",
      location: "Virtual Event",
      description: "Join young leaders worldwide for three days of inspiration, learning, and networking.",
    },
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
  ]

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-purple-800">
            Upcoming Events
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Participate in our events and expand your network
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
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
  )
}

