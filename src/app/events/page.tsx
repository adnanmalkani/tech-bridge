import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import BackToHome from "@/components/BackToHome";
import Image from "next/image";

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Digital Marketing Masterclass 2024",
      date: "March 15, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Tech Bridge Main Campus, Karachi",
      type: "Workshop",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop&crop=center",
      description:
        "Learn advanced digital marketing strategies from industry experts. Topics include SEO, SEM, social media marketing, and analytics.",
      speaker: "Ahmed Hassan - Digital Marketing Director at TechCorp",
      price: "Free",
      seats: "50 seats available",
      featured: true,
    },
    {
      id: 2,
      title: "Web Development Bootcamp Preview",
      date: "March 22, 2024",
      time: "10:00 AM - 12:00 PM",
      location: "Online Event",
      type: "Seminar",
      image:
        "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=400&h=250&fit=crop&crop=center",
      description:
        "Get a sneak peek into our comprehensive web development bootcamp. Learn about modern frameworks and career opportunities.",
      speaker: "Sara Ahmad - Senior Full-Stack Developer",
      price: "Free",
      seats: "100 seats available",
      featured: false,
    },
    {
      id: 3,
      title: "Graphics Design Portfolio Review",
      date: "March 28, 2024",
      time: "3:00 PM - 6:00 PM",
      location: "Tech Bridge Design Lab, Karachi",
      type: "Workshop",
      image:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=250&fit=crop&crop=center",
      description:
        "Bring your portfolio for expert review and feedback. Learn how to create compelling design portfolios that get you hired.",
      speaker: "Fatima Khan - Creative Director at Design Studio",
      price: "PKR 500",
      seats: "25 seats available",
      featured: false,
    },
    {
      id: 4,
      title: "Career Fair 2024 - Tech Jobs",
      date: "April 5, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "Expo Center, Karachi",
      type: "Career Fair",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=250&fit=crop&crop=center",
      description:
        "Meet with top tech companies and explore career opportunities. Open to all Tech Bridge students and graduates.",
      speaker: "Multiple Industry Representatives",
      price: "Free for Tech Bridge Students",
      seats: "500+ opportunities",
      featured: true,
    },
  ];

  const pastEvents = [
    {
      id: 5,
      title: "E-Commerce Success Summit 2023",
      date: "December 10, 2023",
      attendees: "200+",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=300&h=200&fit=crop&crop=center",
      highlights: [
        "15 Industry Speakers",
        "Live Product Launches",
        "Networking Sessions",
      ],
    },
    {
      id: 6,
      title: "Mobile App Development Conference",
      date: "November 18, 2023",
      attendees: "150+",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=300&h=200&fit=crop&crop=center",
      highlights: [
        "React Native Workshop",
        "Flutter Masterclass",
        "App Store Optimization",
      ],
    },
    {
      id: 7,
      title: "Data Analytics Workshop Series",
      date: "October 25, 2023",
      attendees: "100+",
      image:
        "https://images.unsplash.com/photo-1551818255-e6e10975cd17?w=300&h=200&fit=crop&crop=center",
      highlights: [
        "Python for Data Science",
        "Tableau Visualization",
        "Real-world Projects",
      ],
    },
  ];

  const eventTypes = [
    {
      type: "Workshops",
      icon: "🛠️",
      description: "Hands-on learning sessions with industry experts",
      count: "12+ per month",
    },
    {
      type: "Seminars",
      icon: "🎓",
      description: "Educational talks on latest industry trends",
      count: "8+ per month",
    },
    {
      type: "Career Fairs",
      icon: "💼",
      description: "Connect with potential employers and explore opportunities",
      count: "4+ per year",
    },
    {
      type: "Networking",
      icon: "🤝",
      description:
        "Build professional connections with peers and industry leaders",
      count: "6+ per month",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <BackToHome />
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-4 bg-blue-600 hover:bg-blue-700">
            Events & Workshops
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Learn, Network &
            <span className="text-blue-600"> Grow Together</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join our regular events, workshops, and seminars to stay updated
            with industry trends and connect with like-minded professionals.
          </p>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {eventTypes.map((eventType, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow"
              >
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{eventType.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {eventType.type}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {eventType.description}
                  </p>
                  <Badge
                    variant="outline"
                    className="text-blue-600 border-blue-600"
                  >
                    {eventType.count}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dont miss out on these exciting learning opportunities and
              networking events
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <Card
                key={event.id}
                className={`border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 ${
                  event.featured ? "ring-2 ring-blue-600" : ""
                }`}
              >
                {event.featured && (
                  <Badge className="absolute top-4 right-4 bg-red-600 z-10">
                    Featured
                  </Badge>
                )}

                <div className="relative">
                  <Image
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-600">
                    {event.type}
                  </Badge>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">
                    {event.title}
                  </CardTitle>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <span>📅</span>
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>🕒</span>
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>📍</span>
                      <span>{event.location}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-700 mb-4">{event.description}</p>

                  <div className="space-y-3">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <div className="text-sm font-semibold text-blue-800">
                        Speaker
                      </div>
                      <div className="text-sm text-blue-600">
                        {event.speaker}
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-sm font-semibold text-gray-800">
                          Price
                        </div>
                        <div className="text-sm text-green-600">
                          {event.price}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-gray-800">
                          Availability
                        </div>
                        <div className="text-sm text-orange-600">
                          {event.seats}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-6">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                      Register Now
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Past Events Highlights
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Take a look at some of our successful events and the impact they
              have made
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <Card
                key={event.id}
                className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow"
              >
                <div className="relative">
                  <Image
                    src={event.image}
                    alt={event.title}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 right-4 bg-green-600">
                    Completed
                  </Badge>
                </div>

                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">
                    {event.title}
                  </CardTitle>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>📅 {event.date}</span>
                    <span>👥 {event.attendees} attendees</span>
                  </div>
                </CardHeader>

                <CardContent>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Event Highlights:
                    </h4>
                    <ul className="space-y-1">
                      {event.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-gray-600 flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button variant="outline" className="w-full mt-4">
                    View Gallery
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Calendar */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Event Calendar
            </h2>
            <p className="text-gray-600">
              Stay updated with our monthly event schedule
            </p>
          </div>

          <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-4xl mb-4">📅</div>
                  <h3 className="text-xl font-semibold mb-2">
                    Interactive Calendar
                  </h3>
                  <p className="text-sm">
                    View all upcoming events and workshops
                  </p>
                  <Button className="mt-4 bg-blue-600 hover:bg-blue-700">
                    View Full Calendar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Never Miss an Event
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Subscribe to our newsletter and get notified about upcoming events,
            workshops, and exclusive opportunities
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-blue-100 mt-3">
              Join 5000+ subscribers who stay updated with our latest events
            </p>
          </div>
        </div>
      </section>

      {/* Contact for Events */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Want to Host an Event?
              </h2>
              <p className="text-gray-600 mb-6">
                We welcome industry professionals and organizations to
                collaborate with us in hosting educational events and workshops.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-blue-600">✓</span>
                  <span className="text-gray-700">
                    Access to our student community
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-600">✓</span>
                  <span className="text-gray-700">
                    Professional event management
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-600">✓</span>
                  <span className="text-gray-700">
                    Marketing and promotion support
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-600">✓</span>
                  <span className="text-gray-700">
                    State-of-the-art facilities
                  </span>
                </div>
              </div>
              <Button className="mt-6 bg-blue-600 hover:bg-blue-700">
                Partner with Us
              </Button>
            </div>

            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  Event Inquiry
                </CardTitle>
                <p className="text-gray-600">
                  Get in touch to discuss your event ideas
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Event Topic"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your event idea"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Submit Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
