import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProgramsPage() {
  const programs = [
    {
      title: "Leadership Academy",
      description: "Develop essential leadership skills through interactive workshops, mentoring, and real-world projects.",
      image: "/placeholder.svg?height=400&width=600",
      details: [
        "12-week intensive program",
        "Expert-led workshops",
        "One-on-one mentoring",
        "Capstone project",
      ],
    },
    {
      title: "Global Innovation Challenge",
      description: "Collaborate with peers worldwide to create innovative solutions for pressing global issues.",
      image: "/placeholder.svg?height=400&width=600",
      details: [
        "Annual competition",
        "Cross-cultural teams",
        "Expert guidance",
        "Funding for winning projects",
      ],
    },
    {
      title: "Community Impact Initiatives",
      description: "Lead local projects that address community needs and create positive change from the ground up.",
      image: "/placeholder.svg?height=400&width=600",
      details: [
        "Local and global projects",
        "Resource support",
        "Skill-building workshops",
        "Networking opportunities",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-purple-50">
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-purple-900">
              Our Programs
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Discover opportunities to grow, lead, and make a difference through our diverse range of programs.
            </p>
          </div>
          <Tabs defaultValue="leadership-academy" className="space-y-8">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
              {programs.map((program, index) => (
                <TabsTrigger key={index} value={program.title.toLowerCase().replace(/\s+/g, '-')}>
                  {program.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {programs.map((program, index) => (
              <TabsContent key={index} value={program.title.toLowerCase().replace(/\s+/g, '-')}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-purple-800">{program.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                      <div className="space-y-4">
                        <p className="text-gray-600">{program.description}</p>
                        <ul className="space-y-2">
                          {program.details.map((detail, i) => (
                            <li key={i} className="flex items-center space-x-2">
                              <div className="h-2 w-2 rounded-full bg-purple-800" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                        <Button className="bg-purple-800 hover:bg-purple-900">Apply Now</Button>
                      </div>
                      <div className="relative h-[300px]">
                        <Image
                          src={program.image}
                          alt={program.title}
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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-800">Program Impact</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Our programs have empowered thousands of young leaders worldwide. Here's what we've achieved together:
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { stat: "10,000+", label: "Program Participants" },
              { stat: "150+", label: "Countries Represented" },
              { stat: "500+", label: "Community Projects" },
              { stat: "$2M+", label: "in Project Funding" },
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
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-purple-800 mb-6">Ready to Make an Impact?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join one of our programs and start your journey towards becoming a global changemaker.
          </p>
          <Button size="lg" className="bg-purple-800 hover:bg-purple-900">
            Explore Programs
          </Button>
        </div>
      </section>
    </div>
  )
}

