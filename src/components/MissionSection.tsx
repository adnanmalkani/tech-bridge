"use client";

import { useState, useEffect } from "react";

const MissionSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const values = [
    {
      title: "Excellence in Education",
      description:
        "We provide world-class training with industry-standard curriculum and experienced instructors.",
      icon: "🎓",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Practical Learning",
      description:
        "Our hands-on approach ensures students gain real-world experience through projects and internships.",
      icon: "💼",
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "Career Support",
      description:
        "We offer comprehensive career guidance, job placement assistance, and ongoing professional development.",
      icon: "🚀",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Innovation Focus",
      description:
        "We stay ahead of industry trends and incorporate the latest technologies in our curriculum.",
      icon: "💡",
      gradient: "from-orange-500 to-red-500",
    },
    // Add a new value emphasizing the volunteer nature:
    {
      title: "Community-Driven Impact",
      description:
        "Our volunteer-based approach ensures **free access** to quality internships, bridging the gap between Pakistani youth and industry opportunities.",
      icon: "🤝",
      gradient: "from-emerald-500 to-green-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply animate-float"></div>
        <div
          className="absolute bottom-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply animate-float"
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 px-4">
            Our Mission & <span className="gradient-text">Vision</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            At Tech Bridge Pakistan, we are committed to empowering individuals
            with the digital skills needed to succeed in todays
            technology-driven world.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-16 sm:mb-20">
          {/* Mission */}
          <div
            className={`group ${
              isVisible ? "animate-slideInLeft" : "opacity-0"
            }`}
            style={{ animationDelay: "200ms" }}
          >
            <div className="glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 hover-lift transition-all-smooth border border-white/20">
              <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform-smooth shadow-lg">
                <span className="text-2xl sm:text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 group-hover:text-blue-600 transition-colors">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                To provide accessible, high-quality digital skills training that
                empowers individuals to build successful careers in technology.
                We bridge the gap between traditional education and industry
                requirements through practical, hands-on learning experiences.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div
            className={`group ${
              isVisible ? "animate-slideInRight" : "opacity-0"
            }`}
            style={{ animationDelay: "400ms" }}
          >
            <div className="glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 hover-lift transition-all-smooth border border-white/20">
              <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform-smooth shadow-lg">
                <span className="text-2xl sm:text-3xl">👁️</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 group-hover:text-green-600 transition-colors">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                To become leading digital skills development center in Pakistan,
                creating a skilled workforce that drives innovation and economic
                growth. We envision a future where every individual has the
                opportunity to thrive in the digital economy.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values Header */}
        <div
          className={`text-center mb-8 sm:mb-12 ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}
          style={{ animationDelay: "600ms" }}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 px-4">
            Our Core <span className="gradient-text">Values</span>
          </h3>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            The principles that guide everything we do
          </p>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={`group text-center ${
                isVisible ? "animate-fadeInUp" : "opacity-0"
              }`}
              style={{ animationDelay: `${(index + 4) * 150}ms` }}
            >
              <div className="glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 hover-lift transition-all-smooth border border-white/20 h-full">
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${value.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform-smooth shadow-lg`}
                >
                  <span className="text-lg sm:text-xl lg:text-2xl">
                    {value.icon}
                  </span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors">
                  {value.title}
                </h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
