import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BackToHome from "@/components/BackToHome";

export default function AboutPage() {
  const stats = [
    { number: "5000+", label: "Students Trained" },
    { number: "95%", label: "Job Placement Rate" },
    { number: "50+", label: "Industry Partners" },
    { number: "10+", label: "Years Experience" },
  ];

  const team = [
    {
      name: "Hafiz Faisal Aziz",
      role: "Director",
      image: "./images/faisal.jpg",
      description:
        "Visionary leader with extensive experience in educational technology and digital transformation. Committed to empowering Pakistani youth through innovative learning solutions.",
    },
    {
      name: "Fatima Khan",
      role: "Head of Graphics Design",
      image: "./images/6.jpeg",
      description: "Expert in Adobe Creative Suite and UI/UX",
    },
    {
      name: "Mahnoor Ali",
      role: "Digital Marketing Lead",
      image: "./images/7.jpeg",
      description: "Google & Facebook certified marketing expert",
    },
    {
      name: "Sara Ahmad",
      role: "Web Development Head",
      image: "./images/8.jpeg",
      description: "Full-stack developer with modern frameworks",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <BackToHome />
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-4 bg-blue-600 hover:bg-blue-700">
            About Tech Bridge Pakistan
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Empowering Pakistan
            <span className="text-blue-600"> Digital Future</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Since 2015, Tech Bridge Pakistan has been at the forefront of
            digital education, transforming lives through comprehensive training
            in Graphics Design, Digital Marketing, and Web Development.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="pt-6">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600 flex items-center gap-2">
                  <span className="text-3xl">🎯</span>
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  To provide world-class digital skills training that empowers
                  Pakistani youth with the knowledge and expertise needed to
                  excel in the global digital economy. We are committed to
                  bridging the skills gap and creating opportunities for
                  sustainable career growth.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600 flex items-center gap-2">
                  <span className="text-3xl">🚀</span>
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  To become Pakistan leading digital skills institute,
                  recognized for excellence in education and innovation. We
                  envision a future where every Pakistani has access to quality
                  digital education and the opportunity to thrive in the digital
                  age.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Tech Bridge Pakistan?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer more than just courses - we provide a complete learning
              ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-4">💼</div>
                <CardTitle className="text-xl text-gray-900">
                  Industry-Relevant Curriculum
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our courses are designed in collaboration with industry
                  experts to ensure you learn the most current and in-demand
                  skills.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-4">👨‍🏫</div>
                <CardTitle className="text-xl text-gray-900">
                  Expert Instructors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Learn from certified professionals with years of real-world
                  experience in their respective fields.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-4">🎓</div>
                <CardTitle className="text-xl text-gray-900">
                  Job Placement Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We provide comprehensive career support including job
                  placement assistance and industry connections.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our dedicated team of professionals brings years of industry
              experience to guide your learning journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow text-center"
              >
                <CardContent className="pt-6">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="text-xl">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <Badge variant="secondary" className="mb-3">
                    {member.role}
                  </Badge>
                  <p className="text-sm text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Digital Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of successful graduates who have transformed their
            careers with Tech Bridge Pakistan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              View Courses
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
