'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const CoursesSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const courses = [
    {
      title: "Digital Marketing",
      description: "Master the art of online marketing with comprehensive training in SEO, social media, and digital advertising.",
      duration: "3 Months",
      level: "Beginner to Advanced",
      icon: "📱",
      gradient: "from-blue-500 to-cyan-500",
      features: ["SEO Optimization", "Social Media Marketing", "Google Ads", "Content Marketing"]
    },
    {
      title: "Graphics Design",
      description: "Learn professional graphic design using industry-standard tools like Adobe Photoshop, Illustrator, and InDesign.",
      duration: "4 Months",
      level: "Beginner to Advanced",
      icon: "🎨",
      gradient: "from-purple-500 to-pink-500",
      features: ["Adobe Creative Suite", "Logo Design", "Print Design", "Digital Graphics"]
    },
    {
      title: "Web Development",
      description: "Build modern, responsive websites using HTML, CSS, JavaScript, and popular frameworks like React.",
      duration: "6 Months",
      level: "Beginner to Advanced",
      icon: "💻",
      gradient: "from-green-500 to-teal-500",
      features: ["HTML/CSS", "JavaScript", "React", "Responsive Design"]
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Popular <span className="gradient-text">Courses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose from our industry-leading courses designed to give you practical skills and real-world experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-16">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className={`group glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 hover-lift transition-all-smooth border border-white/20 ${
                isVisible ? 'animate-fadeInUp' : 'opacity-0'
              }`}
              style={{animationDelay: `${index * 200}ms`}}
            >
              {/* Course Icon */}
              <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${course.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform-smooth shadow-lg`}>
                {course.icon}
              </div>
              
              {/* Course Content */}
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {course.description}
                </p>
                
                {/* Course Details */}
                <div className="flex justify-between items-center py-4 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-sm text-gray-500">Duration</div>
                    <div className="font-semibold text-gray-800">{course.duration}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500">Level</div>
                    <div className="font-semibold text-gray-800">{course.level}</div>
                  </div>
                </div>
                
                {/* Features */}
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  <h4 className="text-sm sm:text-base font-semibold text-gray-800">What you'll learn:</h4>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* CTA Button */}
                <Button className={`w-full bg-gradient-to-r ${course.gradient} hover:shadow-lg text-white py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold transition-all-smooth group-hover:scale-105`}>
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Courses CTA */}
        <div className={`text-center ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '800ms'}}>
          <Link href="/courses">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-12 py-4 rounded-full text-lg font-semibold shadow-xl hover-lift transition-all-smooth">
              View All Courses
              <span className="ml-2">→</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CoursesSection