"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const SuccessStories = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stories = [
    {
      name: "Ahmed Hassan",
      course: "Digital Marketing",
      position: "Digital Marketing Manager",
      company: "TechCorp Solutions",
      story:
        "After completing the digital marketing course at Tech Bridge Pakistan, I landed my dream job as a Digital Marketing Manager. The practical training and industry insights were invaluable.",
      salary: "PKR 80,000/month",
      gradient: "from-blue-500 to-cyan-500",
      icon: "📱",
      image: "./images/1.jpg",
    },
    {
      name: "Fatima Khan",
      course: "Graphics Design",
      position: "Senior Graphic Designer",
      company: "Creative Agency",
      story:
        "The graphics design course transformed my creative skills. I now work with international clients and have my own design studio.",
      salary: "PKR 65,000/month",
      gradient: "from-purple-500 to-pink-500",
      icon: "🎨",
      image: "./images/4.jpeg",
    },
    {
      name: "Urooj Khan",
      course: "Web Development",
      position: "Full Stack Developer",
      company: "StartupTech",
      story:
        "From zero coding knowledge to becoming a full-stack developer in 6 months. Tech Bridge Pakistan's curriculum is industry-focused and practical.",
      salary: "PKR 120,000/month",
      gradient: "from-green-500 to-teal-500",
      icon: "💻",
      image: "./images/3.jpeg",
    },
  ];

  const stats = [
    { number: "500+", label: "Graduates", icon: "🎓" },
    { number: "95%", label: "Job Placement", icon: "💼" },
    { number: "50+", label: "Partner Companies", icon: "🏢" },
    { number: "4.9/5", label: "Student Rating", icon: "⭐" },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply animate-float"></div>
        <div
          className="absolute bottom-20 left-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-12 sm:mb-16 ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
            Success <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Hear from our graduates who have transformed their careers and
            achieved their dreams.
          </p>
        </div>

        {/* Stats Section */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-12 sm:mb-16 ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}
          style={{ animationDelay: "200ms" }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="glass rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 hover-lift transition-all-smooth">
                <div className="text-xl sm:text-2xl lg:text-3xl mb-1 sm:mb-2">
                  {stat.icon}
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-1 sm:mb-2 group-hover:text-blue-600 transition-colors">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {stories.map((story, index) => (
            <div
              key={index}
              className={`group glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 hover-lift transition-all-smooth border border-white/20 ${
                isVisible ? "animate-fadeInUp" : "opacity-0"
              }`}
              style={{ animationDelay: `${(index + 2) * 200}ms` }}
            >
              {/* Profile Section */}
              <div className="text-center mb-4 sm:mb-6">
                <div className="relative w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 mx-auto mb-3 sm:mb-4">
                  <Image
                    src={story.image}
                    alt={story.name}
                    className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-full object-cover shadow-lg group-hover:scale-110 transition-transform-smooth border-2 sm:border-4 border-white"
                  />
                  <div
                    className={`absolute -bottom-1 -right-1 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-gradient-to-r ${story.gradient} rounded-full flex items-center justify-center text-xs sm:text-sm shadow-md`}
                  >
                    {story.icon}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">
                  {story.name}
                </h3>
                <p className="text-blue-600 font-medium text-xs sm:text-sm">
                  {story.position}
                </p>
                <p className="text-gray-500 text-xs sm:text-sm">
                  {story.company}
                </p>
              </div>

              {/* Course & Salary Info */}
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <div className="flex justify-between items-center py-1.5 sm:py-2 border-b border-gray-100">
                  <span className="text-gray-500 text-xs sm:text-sm">
                    Course:
                  </span>
                  <span className="font-medium text-gray-800 text-xs sm:text-sm">
                    {story.course}
                  </span>
                </div>
                <div className="flex justify-between items-center py-1.5 sm:py-2">
                  <span className="text-gray-500 text-xs sm:text-sm">
                    Salary:
                  </span>
                  <span className="font-bold text-green-600 text-xs sm:text-sm">
                    {story.salary}
                  </span>
                </div>
              </div>

              {/* Story Quote */}
              <blockquote className="text-gray-600 italic leading-relaxed text-xs sm:text-sm relative">
                <span className="text-2xl sm:text-3xl lg:text-4xl text-blue-200 absolute -top-1 sm:-top-2 -left-1 sm:-left-2">
                  "
                </span>
                <span className="relative z-10">{story.story}</span>
              </blockquote>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className={`text-center ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}
          style={{ animationDelay: "1000ms" }}
        >
          <Link href="/success-stories">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white px-6 sm:px-12 py-3 sm:py-4 rounded-full text-sm sm:text-lg font-semibold shadow-xl hover-lift transition-all-smooth"
            >
              Read More Stories
              <span className="ml-2">→</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
