"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float animation-delay-400"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float animation-delay-800"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div
            className={`space-y-6 lg:space-y-8 transition-all duration-1000 mb-10 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Admissions Badge */}
            <div className="inline-flex items-center glass px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium text-blue-700 hover-glow transition-all-smooth mt-5">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 sm:mr-3 animate-pulse"></span>
              Applications Open 2025
            </div>

            {/* Main Heading */}
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                Bridge the Gap with
                <span className="gradient-text block">Free Internships</span>
                <span className="text-gray-700">for Pakistani Youth</span>
              </h1>

              <p className="text-lg sm:text-xl lg:text-xl text-gray-600 leading-relaxed max-w-xl font-light">
                Get real-world experience through our **free volunteer-based**
                internships and apprenticeships. We connect Pakistani youth with
                top companies at **no cost** - bridging the skills gap through
                community-driven initiatives.
                <span className="font-semibold text-blue-600 px-1">
                  500+ youth empowered
                </span>
                through our volunteer network. We don't offer courses, we offer careers.
              </p>
            </div>

            {/* Action Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-3 sm:gap-4 ${
                isVisible ? "animate-fadeInUp" : "opacity-0"
              }`}
              style={{ animationDelay: "400ms" }}
            >
              <Link href="/apply" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all-smooth hover-lift text-sm sm:text-base"
                >
                  Apply for Internship
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </Link>
              <Link href="/programs" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all-smooth hover-lift glass text-sm sm:text-base"
                >
                  Explore Programs
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center group">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform-smooth">
                  500+
                </div>
                <div className="text-sm text-gray-500 font-medium">
                  Youth Empowered
                </div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform-smooth">
                  92%
                </div>
                <div className="text-sm text-gray-500 font-medium">
                  Job Placement
                </div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform-smooth">
                  100%
                </div>
                <div className="text-sm text-gray-500 font-medium">
                  Free Programs
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Modern Design */}
          <div
            className={`relative mt-8 lg:mt-0 transition-all duration-1000 animation-delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Card */}
              <div className="glass rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl hover-lift transition-all-smooth">
                <div className="space-y-4 lg:space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 lg:gap-3">
                      <img
                        src="/tech.svg"
                        alt="Tech Bridge Pakistan"
                        className="h-10 sm:h-12 lg:h-16 w-50 scale-125 lg:scale-150 p-4"
                      />
                    </div>
                    <div className="w-2 h-2 lg:w-3 lg:h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>

                  {/* Internship Preview */}
                  <div className="bg-white/50 rounded-xl lg:rounded-2xl p-4 lg:p-6 space-y-3 lg:space-y-4">
                    <div className="flex items-center gap-2 lg:gap-3">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs lg:text-sm">
                          💼
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-gray-900 text-sm lg:text-base truncate">
                          Software Development Internship
                        </div>
                        <div className="text-xs lg:text-sm text-gray-500 truncate">
                          6-month paid program at TechCorp
                        </div>
                      </div>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-1.5 lg:h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-1.5 lg:h-2 rounded-full w-3/4 animate-pulse"></div>
                    </div>

                    <div className="flex justify-between text-xs lg:text-sm">
                      <span className="text-gray-600">Stipend: ₨40K/month</span>
                      <span className="text-purple-600 font-medium">
                        2 months left
                      </span>
                    </div>
                  </div>

                  {/* Achievement Badges */}
                  <div className="flex gap-2 lg:gap-3 flex-wrap">
                    <div className="glass px-3 lg:px-4 py-1.5 lg:py-2 rounded-full text-xs lg:text-sm font-medium text-blue-700">
                      💼 Paid Internship
                    </div>
                    <div className="glass px-3 lg:px-4 py-1.5 lg:py-2 rounded-full text-xs lg:text-sm font-medium text-green-700">
                      🎯 Job Guarantee
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Success Card */}
              <div className="absolute -top-3 -right-3 lg:-top-6 lg:-right-6 glass rounded-xl lg:rounded-2xl p-3 lg:p-4 shadow-xl animate-float">
                <div className="text-center">
                  <div className="text-lg lg:text-2xl font-bold text-green-600">
                    ₨60K
                  </div>
                  <div className="text-xs text-gray-600">
                    Avg. Full-time Salary
                  </div>
                </div>
              </div>

              {/* Floating Community Card */}
              <div className="absolute -bottom-3 -left-3 lg:-bottom-6 lg:-left-6 glass rounded-xl lg:rounded-2xl p-3 lg:p-4 shadow-xl animate-float animation-delay-600">
                <div className="flex items-center gap-1.5 lg:gap-2">
                  <div className="flex -space-x-1.5 lg:-space-x-2">
                    <div className="w-6 h-6 lg:w-8 lg:h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                    <div className="w-6 h-6 lg:w-8 lg:h-8 bg-green-500 rounded-full border-2 border-white"></div>
                    <div className="w-6 h-6 lg:w-8 lg:h-8 bg-purple-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="text-xs text-gray-600">
                    <div className="font-medium">Partner Companies</div>
                    <div className="hidden sm:block">50+ hiring partners</div>
                    <div className="sm:hidden">50+ partners</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
