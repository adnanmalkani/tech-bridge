'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const socialLinks = [
    { name: 'Facebook', icon: '📘', href: '#', gradient: 'from-blue-600 to-blue-700' },
    { name: 'Twitter', icon: '🐦', href: '#', gradient: 'from-sky-500 to-sky-600' },
    { name: 'LinkedIn', icon: '💼', href: '#', gradient: 'from-blue-700 to-blue-800' },
    { name: 'YouTube', icon: '📺', href: '#', gradient: 'from-red-600 to-red-700' },
    { name: 'Instagram', icon: '📷', href: '#', gradient: 'from-pink-500 to-purple-600' }
  ]

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Courses', href: '/courses' },
    { name: 'Success Stories', href: '/success-stories' },
    { name: 'Events', href: '/events' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ]

  const popularCourses = [
    'Graphics Designing',
    'Digital Marketing',
    'Web Development',
    'Freelancing Training',
    'Amazon FBA',
    'Social Media Marketing',
    'E-commerce',
    'Content Writing'
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Company Info */}
          <div className={`space-y-6 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold gradient-text">Tech Bridge Pakistan</h3>
              <p className="text-gray-300 leading-relaxed">
                Empowering individuals with digital skills for a successful career in technology. 
                Join thousands of graduates who have transformed their lives.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <Link 
                    key={index}
                    href={social.href} 
                    className={`w-12 h-12 bg-gradient-to-r ${social.gradient} rounded-2xl flex items-center justify-center hover:scale-110 transition-transform-smooth shadow-lg group`}
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform">{social.icon}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className={`space-y-6 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '200ms'}}>
            <h4 className="text-xl font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-blue-400 transition-colors group flex items-center space-x-2"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Courses */}
          <div className={`space-y-6 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '400ms'}}>
            <h4 className="text-xl font-semibold text-white">Popular Courses</h4>
            <ul className="space-y-3">
              {popularCourses.map((course, index) => (
                <li key={index}>
                  <Link 
                    href="#" 
                    className="text-gray-300 hover:text-blue-400 transition-colors group flex items-center space-x-2"
                  >
                    <span className="w-2 h-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>{course}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div className={`space-y-4 sm:space-y-6 sm:col-span-2 lg:col-span-1 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '600ms'}}>
            <h4 className="text-lg sm:text-xl font-semibold text-white">Stay Connected</h4>
            
            {/* Newsletter */}
            <div className="space-y-3 sm:space-y-4">
              <p className="text-gray-300 text-sm sm:text-base">
                Subscribe for updates and industry insights.
              </p>
              <div className="space-y-2 sm:space-y-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-xl sm:rounded-2xl text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors glass text-sm sm:text-base"
                />
                <button className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl sm:rounded-2xl font-semibold hover:shadow-xl hover:scale-105 transition-all-smooth text-sm sm:text-base">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-2 sm:space-x-3 text-gray-300">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs sm:text-sm">📍</span>
                </div>
                <span className="text-xs sm:text-sm">Lahore, Pakistan</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 text-gray-300">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs sm:text-sm">📞</span>
                </div>
                <span className="text-xs sm:text-sm">+92 300 2627941</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 text-gray-300">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs sm:text-sm">✉️</span>
                </div>
                <span className="text-xs sm:text-sm break-all">info@techbridgepakistan.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className={`flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '800ms'}}>
            <div className="text-gray-400 text-center md:text-left">
              <p>© 2024 <span className="gradient-text font-semibold">Tech Bridge Pakistan</span>. All rights reserved.</p>
              <p className="text-sm mt-1">Transforming lives through digital education</p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Cookie Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer