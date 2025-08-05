"use client";

import { useState, useEffect } from "react";

const AdmissionsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const applicationSteps = [
    {
      step: "1",
      title: "Choose Your Internship",
      description:
        "Browse our internship catalog and select the program that aligns with your career goals.",
      icon: "📚",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      step: "2",
      title: "Submit Application",
      description:
        "Fill out our simple online application form with your basic information and educational background.",
      icon: "📝",
      gradient: "from-green-500 to-teal-500",
    },
    {
      step: "3",
      title: "Assessment & Interview",
      description:
        "Complete a brief skills assessment and participate in a consultation call with our admissions team.",
      icon: "🎯",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      step: "4",
      title: "Enrollment Confirmation",
      description:
        "Receive your acceptance letter and complete the enrollment process to secure your spot.",
      icon: "✅",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const requirements = [
    "Basic computer literacy",
    "High school diploma or equivalent",
    "Commitment to complete the program",
    "Access to a computer and internet",
    "Willingness to learn and practice",
  ];

  const benefits = [
    {
      title: "Flexible Schedule",
      description: "Choose from morning, evening, or weekend batches",
      icon: "⏰",
    },
    {
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of experience",
      icon: "👨‍🏫",
    },
    {
      title: "Hands-on Projects",
      description: "Build a portfolio with real-world projects",
      icon: "💼",
    },
    {
      title: "Job Placement Support",
      description: "Get assistance with job search and interview preparation",
      icon: "🚀",
    },
    {
      title: "Lifetime Access",
      description: "Access course materials and updates forever",
      icon: "♾️",
    },
    {
      title: "Community Support",
      description: "Join our active community of learners and professionals",
      icon: "👥",
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-12 sm:mb-16 ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 px-4">
            Start Your <span className="gradient-text">Journey</span> Today
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Join thousands of successful graduates who have transformed their
            careers through our comprehensive digital skills programs.
          </p>
        </div>

        {/* Admission Process */}
        <div className="mb-20">
          <div
            className={`text-center mb-8 sm:mb-12 ${
              isVisible ? "animate-fadeInUp" : "opacity-0"
            }`}
            style={{ animationDelay: "200ms" }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 px-4">
              Simple <span className="gradient-text">Application</span> Process
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Get started in just 4 easy steps
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {applicationSteps.map((step, index) => (
              <div
                key={index}
                className={`group text-center ${
                  isVisible ? "animate-fadeInUp" : "opacity-0"
                }`}
                style={{ animationDelay: `${(index + 2) * 150}ms` }}
              >
                <div className="glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 hover-lift transition-all-smooth border border-white/20 h-full relative">
                  <div
                    className={`absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${step.gradient} text-white rounded-xl sm:rounded-2xl flex items-center justify-center font-bold text-sm sm:text-lg shadow-lg group-hover:scale-110 transition-transform-smooth`}
                  >
                    {step.step}
                  </div>
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${step.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform-smooth shadow-lg`}
                  >
                    <span className="text-lg sm:text-xl lg:text-2xl">
                      {step.icon}
                    </span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements and Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-16 sm:mb-20">
          {/* Requirements */}
          <div
            className={`${isVisible ? "animate-slideInLeft" : "opacity-0"}`}
            style={{ animationDelay: "800ms" }}
          >
            <div className="glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 hover-lift transition-all-smooth border border-white/20">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">
                Application <span className="gradient-text">Requirements</span>
              </h3>
              <div className="space-y-4 sm:space-y-6">
                {requirements.map((requirement, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 sm:space-x-4 group"
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform-smooth shadow-lg">
                      <span className="text-white text-xs sm:text-sm font-bold">
                        ✓
                      </span>
                    </div>
                    <span className="text-gray-700 text-base sm:text-lg group-hover:text-gray-900 transition-colors">
                      {requirement}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div
            className={`${isVisible ? "animate-slideInRight" : "opacity-0"}`}
            style={{ animationDelay: "1000ms" }}
          >
            <div className="glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 hover-lift transition-all-smooth border border-white/20">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">
                Program <span className="gradient-text">Benefits</span>
              </h3>
              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 sm:space-x-4 group"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform-smooth shadow-lg">
                      <span className="text-base sm:text-lg">
                        {benefit.icon}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-base sm:text-lg mb-1 sm:mb-2 group-hover:text-blue-600 transition-colors">
                        {benefit.title}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className={`${isVisible ? "animate-fadeInUp" : "opacity-0"}`}
          style={{ animationDelay: "1200ms" }}
        >
          <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-center bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-200/20 hover-lift transition-all-smooth">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 px-4">
              Ready to Transform Your{" "}
              <span className="gradient-text">Career?</span>
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Dont wait Limited seats available for the next batch.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <a href="/apply">
                <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg hover:shadow-xl hover:scale-105 transition-all-smooth w-full sm:w-auto">
                  Apply Now
                </button>
              </a>
              <button className="px-6 sm:px-8 py-3 sm:py-4 glass border border-blue-200 text-gray-800 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg hover:shadow-xl hover:scale-105 transition-all-smooth w-full sm:w-auto">
                Download Brochure
              </button>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-8 text-gray-600">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <span className="text-white text-sm sm:text-base">📞</span>
                </div>
                <span className="font-medium text-sm sm:text-base">
                  +92 300 2627941
                </span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <span className="text-white text-sm sm:text-base">✉️</span>
                </div>
                <span className="font-medium text-sm sm:text-base break-all">
                  info@techbridgepakistan.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsSection;
