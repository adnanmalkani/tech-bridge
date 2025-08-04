"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ProgramsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const programs = [
    {
      title: "AI & Machine Learning Internship",
      description:
        "Work on cutting-edge AI projects with leading tech companies. Apply machine learning to solve real business problems through our free volunteer program.",
      duration: "6-12 Months",
      stipend: "Free Program",
      icon: "🤖",
      gradient: "from-indigo-500 to-purple-500",
      features: [
        "Python for AI/ML",
        "Machine Learning Algorithms",
        "Deep Learning with TensorFlow",
        "NLP Applications",
        "Computer Vision Projects",
        "AI Model Deployment",
      ],
      companies: [
        "AI Innovations Lab",
        "DataTech Solutions",
        "SmartSystems Inc",
      ],
    },
    {
      title: "Cybersecurity Apprenticeship",
      description:
        "Join cybersecurity teams to work on real security challenges. Learn penetration testing and incident response through our free volunteer program.",
      duration: "8-12 Months",
      stipend: "Free Program",
      icon: "🔒",
      gradient: "from-red-500 to-orange-500",
      features: [
        "Network Security",
        "Penetration Testing",
        "Security Audits",
        "Incident Response",
        "Threat Analysis",
        "Security Tools Implementation",
      ],
      companies: [
        "SecureNet Solutions",
        "CyberShield Corp",
        "SafeGuard Security",
      ],
    },
    {
      title: "Software Development Internship",
      description:
        "Build production-ready software applications for real businesses. Learn modern frameworks while contributing to live codebases.",
      duration: "6-12 Months",
      stipend: "₨35K-50K/month",
      icon: "💻",
      gradient: "from-green-500 to-teal-500",
      features: [
        "Full-Stack Development",
        "React & Next.js",
        "Database Design",
        "API Development",
        "Code Reviews",
        "Deployment & DevOps",
      ],
      companies: [
        "10Pearls",
        "Netsol",
        "Systems Ltd",
        "Tech Mahindra",
        "TRG Pakistan",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply animate-float"></div>
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Launch Your Career with{" "}
            <span className="gradient-text">Paid Internships</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get real-world experience through paid internships and
            apprenticeships with top companies in Pakistan. Earn while you learn
            and secure your dream job.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-16">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`group glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 hover-lift transition-all-smooth border border-white/20 ${
                isVisible ? "animate-fadeInUp" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Program Icon */}
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${program.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform-smooth shadow-lg`}
              >
                {program.icon}
              </div>

              {/* Program Content */}
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {program.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {program.description}
                </p>

                {/* Program Details */}
                <div className="flex justify-between items-center py-4 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-sm text-gray-500">Duration</div>
                    <div className="font-semibold text-gray-800">
                      {program.duration}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500">Stipend</div>
                    <div className="font-semibold text-green-600">
                      {program.stipend}
                    </div>
                  </div>
                </div>

                {/* Partner Companies */}
                <div className="space-y-2">
                  <h4 className="text-sm sm:text-base font-semibold text-gray-800">
                    Partner Companies:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {program.companies.map((company, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                      >
                        {company}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  <h4 className="text-sm sm:text-base font-semibold text-gray-800">
                    What you'll do:
                  </h4>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {program.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-xs sm:text-sm text-gray-600 flex items-center"
                      >
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full bg-gradient-to-r ${program.gradient} hover:shadow-lg text-white py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold transition-all-smooth group-hover:scale-105`}
                >
                  Apply Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Programs CTA */}
        <div
          className={`text-center ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}
          style={{ animationDelay: "800ms" }}
        >
          <Link href="/programs">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-12 py-4 rounded-full text-lg font-semibold shadow-xl hover-lift transition-all-smooth"
            >
              View All Programs
              <span className="ml-2">→</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
