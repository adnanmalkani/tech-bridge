'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const EventsSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const events = [
    {
      title: "Digital Marketing Workshop",
      date: "March 15, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Tech Bridge Pakistan Campus",
      description: "Learn the latest digital marketing strategies and tools in this hands-on workshop.",
      type: "Workshop",
      price: "Free",
      icon: "📱",
      gradient: "from-blue-500 to-cyan-500",
      attendees: "50+"
    },
    {
      title: "Web Development Bootcamp",
      date: "March 22, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Online",
      description: "Intensive bootcamp covering modern web development technologies and frameworks.",
      type: "Bootcamp",
      price: "PKR 2,000",
      icon: "💻",
      gradient: "from-green-500 to-teal-500",
      attendees: "30+"
    },
    {
      title: "Career Guidance Seminar",
      date: "March 28, 2024",
      time: "3:00 PM - 6:00 PM",
      location: "Tech Bridge Pakistan Campus",
      description: "Get expert advice on career planning and job search strategies in the tech industry.",
      type: "Seminar",
      price: "Free",
      icon: "🎯",
      gradient: "from-purple-500 to-pink-500",
      attendees: "100+"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply animate-float"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 px-4">
            Upcoming <span className="gradient-text">Events</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Join our workshops, seminars, and bootcamps to enhance your skills and network with industry professionals.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {events.map((event, index) => (
            <div 
              key={index} 
              className={`group glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 hover-lift transition-all-smooth border border-white/20 ${
                isVisible ? 'animate-fadeInUp' : 'opacity-0'
              }`}
              style={{animationDelay: `${index * 200}ms`}}
            >
              {/* Event Header */}
              <div className="flex items-start justify-between mb-4 sm:mb-6">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${event.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center text-lg sm:text-xl lg:text-2xl shadow-lg group-hover:scale-110 transition-transform-smooth`}>
                  {event.icon}
                </div>
                <div className="text-right">
                  <div className={`inline-block px-2 sm:px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${event.gradient} text-white`}>
                    {event.type}
                  </div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mt-1 sm:mt-2">{event.price}</div>
                </div>
              </div>
              
              {/* Event Content */}
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors leading-tight">
                  {event.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                  {event.description}
                </p>
                
                {/* Event Details */}
                <div className="space-y-2 sm:space-y-3 py-3 sm:py-4 border-t border-gray-200">
                  <div className="flex items-center text-xs sm:text-sm text-gray-600">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-blue-100 rounded-md sm:rounded-lg flex items-center justify-center mr-2 sm:mr-3 text-xs sm:text-sm">
                      📅
                    </div>
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-gray-600">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-green-100 rounded-md sm:rounded-lg flex items-center justify-center mr-2 sm:mr-3 text-xs sm:text-sm">
                      🕐
                    </div>
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-gray-600">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-purple-100 rounded-md sm:rounded-lg flex items-center justify-center mr-2 sm:mr-3 text-xs sm:text-sm">
                      📍
                    </div>
                    <span className="truncate">{event.location}</span>
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-gray-600">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-orange-100 rounded-md sm:rounded-lg flex items-center justify-center mr-2 sm:mr-3 text-xs sm:text-sm">
                      👥
                    </div>
                    <span>{event.attendees} Expected Attendees</span>
                  </div>
                </div>
                
                {/* Register Button */}
                <Button className={`w-full bg-gradient-to-r ${event.gradient} hover:shadow-lg text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold transition-all-smooth group-hover:scale-105`}>
                  Register Now
                  <span className="ml-2">→</span>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center px-4 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '800ms'}}>
          <Link href="/events">
            <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 sm:px-12 py-3 sm:py-4 rounded-lg sm:rounded-full text-sm sm:text-lg font-semibold shadow-xl hover-lift transition-all-smooth">
              View All Events
              <span className="ml-2">📅</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default EventsSection