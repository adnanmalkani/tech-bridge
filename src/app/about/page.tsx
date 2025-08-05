import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BackToHome from "@/components/BackToHome";
import {
  FaUsers,
  FaBriefcase,
  FaLightbulb,
  FaHandsHelping,
} from "react-icons/fa";

export default function AboutPage() {
  const team = [
    {
      name: "Hafiz Faisal Aziz",
      role: "Founder & Lead Cyber Security Engineer",
      image: "/images/faisal.jpg",
      description:
        "Visionary leader and cyber security expert with extensive experience in educational technology, digital transformation, and cybersecurity solutions. Committed to empowering Pakistani youth through innovative learning solutions while ensuring secure digital practices.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <BackToHome />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-4 bg-blue-600 hover:bg-blue-700">About Us</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Bridging IT Academia
            <span className="text-blue-600"> and Industry</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At Tech Bridge Pakistan, we are committed to bridging the gap
            between IT academia and industry, creating a platform where both
            students and the tech industry can thrive together.
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* For Students */}
            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600 flex items-center gap-3">
                  <FaUsers className="text-3xl" />
                  For Students
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  We provide deserving IT students with invaluable hands-on
                  experience, industry-driven training, and mentorship
                  opportunities that allow them to gain practical skills.
                  Through our internships, boot camps, and real-world projects,
                  students not only enhance their technical expertise but also
                  develop the problem-solving abilities that todays
                  fast-evolving IT landscape demands.
                </p>
              </CardContent>
            </Card>

            {/* For Industry */}
            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-indigo-600 flex items-center gap-3">
                  <FaBriefcase className="text-3xl" />
                  For Industry
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  We partner with leading tech companies to provide them with a
                  pipeline of highly skilled, motivated, and industry-ready
                  talent. By offering opportunities for students to work on live
                  projects, companies gain access to fresh perspectives and the
                  next generation of innovators, all while contributing to the
                  development of the workforce they rely on.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Our Mission */}
          <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm mb-16">
            <CardHeader>
              <CardTitle className="text-3xl text-purple-600 flex items-center justify-center gap-3 text-center">
                <FaLightbulb className="text-4xl" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
                Our mission is simple: to create a sustainable ecosystem where
                the needs of students and the IT industry are seamlessly met.
                Through collaboration and experience-sharing, we ensure that
                students enter the workforce with the practical skills they
                need, while the industry gains professionals who are equipped to
                drive progress, innovation, and success.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto font-medium">
                Join us in shaping the future of IT, one student and one project
                at a time.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Founder Section */}
      <section className="min-h-screen bg-white/50">
        <div className="max-w-full mx-auto">
          <div className="space-y-0">
            {team.map((member, index) => (
              <div
                key={index}
                className={`min-h-screen flex items-center ${
                  index % 2 === 0
                    ? "bg-gradient-to-r from-blue-50 to-white"
                    : "bg-gradient-to-r from-white to-indigo-50"
                }`}
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                      index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                    }`}
                  >
                    {/* Image Section */}
                    <div
                      className={`${
                        index % 2 === 1 ? "lg:col-start-2" : ""
                      } flex justify-center`}
                    >
                      <div className="relative">
                        <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-8 border-white">
                          <Avatar className="w-full h-full">
                            <AvatarImage
                              src={member.image}
                              alt={member.name}
                              className="object-cover w-full h-full"
                            />
                            <AvatarFallback className="text-6xl font-bold bg-blue-100 text-blue-600 w-full h-full flex items-center justify-center">
                              {member.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-60 animate-pulse"></div>
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-200 rounded-full opacity-40 animate-pulse animation-delay-1000"></div>
                      </div>
                    </div>

                    {/* Text Section */}
                    <div
                      className={`${
                        index % 2 === 1 ? "lg:col-start-1" : ""
                      } space-y-6`}
                    >
                      <div className="space-y-4">
                        <h3 className="text-4xl lg:text-5xl font-bold text-gray-900">
                          {member.name}
                        </h3>
                        <div className="inline-block">
                          <span className="text-xl lg:text-2xl font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 rounded-full shadow-lg">
                            {member.role}
                          </span>
                        </div>
                      </div>

                      <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>

                      <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-2xl">
                        {member.description}
                      </p>

                      {/* Optional: Add social links or contact info */}
                      <div className="flex space-x-4 pt-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors cursor-pointer">
                          <span className="text-blue-600 font-semibold">
                            in
                          </span>
                        </div>
                        <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center hover:bg-indigo-200 transition-colors cursor-pointer">
                          <span className="text-indigo-600 font-semibold">
                            @
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <FaHandsHelping className="text-5xl mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join our mission to empower the next generation of IT professionals
            and bridge the gap between academia and industry.
          </p>
          {/* Add contact button or link here if needed */}
        </div>
      </section>
    </div>
  );
}
