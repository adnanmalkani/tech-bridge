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
      role: "Director & Lead Cyber Security Engineer",
      image: "/images/team/faisal.jpg",
      description:
        "Visionary leader and cyber security expert with extensive experience in educational technology, digital transformation, and cybersecurity solutions. Committed to empowering Pakistani youth through innovative learning solutions while ensuring secure digital practices.",
    },
    {
      name: "Adnan Malkani",
      role: "Co-Founder & AI Engineer",
      image: "/images/team/adnan.webp",
      description:
        "Expert in machine learning and artificial intelligence with a focus on educational applications and industry automation solutions.",
    },
    {
      name: "Fatima Khan",
      role: "Head of Graphics Design",
      image: "/images/team/1.png",
      description:
        "Creative professional with expertise in Adobe Creative Suite, UI/UX design, and visual communication for digital platforms.",
    },
    {
      name: "Muhammad Ali",
      role: "Full Stack Developer",
      image: "/images/2.jpg",
      description:
        "Experienced developer specializing in modern web technologies, database design, and scalable application architecture.",
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
                  develop the problem-solving abilities that today's
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

      {/* Our Team Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our dedicated team of professionals brings together expertise from
              education, technology, and industry to create meaningful learning
              experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow text-center"
              >
                <CardContent className="pt-6">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="text-lg font-semibold bg-blue-100 text-blue-600">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
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
