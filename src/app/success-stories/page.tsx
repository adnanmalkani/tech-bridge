import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BackToHome from "@/components/BackToHome";

export default function SuccessStoriesPage() {
  const successStories = [
    {
      id: 1,
      name: "Ahmed Hassan",
      course: "Digital Marketing Expert",
      currentRole: "Digital Marketing Manager at TechCorp",
      salary: "PKR 80,000/month",
      image: "./images/1.jpg",
      story:
        "After completing the Digital Marketing course at Tech Bridge Pakistan, I landed my dream job within 2 months. The practical training and industry connections made all the difference.",
      achievement: "300% salary increase",
      duration: "8 months course",
      rating: 5,
      company: "TechCorp Solutions",
      linkedin: "https://linkedin.com/in/ahmed-hassan",
    },
    {
      id: 2,
      name: "Fatima Khan",
      course: "Graphics Designing Mastery",
      currentRole: "Senior UI/UX Designer at Creative Agency",
      salary: "PKR 70,000/month",
      image: "./images/6.jpeg",
      story:
        "Tech Bridge Pakistan transformed my creative passion into a successful career. The portfolio I built during the course helped me secure multiple job offers.",
      achievement: "5 job offers received",
      duration: "6 months course",
      rating: 5,
      company: "Creative Minds Agency",
      linkedin: "https://linkedin.com/in/fatima-khan",
    },
    {
      id: 3,
      name: "Ali Raza",
      course: "Web Development Bootcamp",
      currentRole: "Full-Stack Developer at StartupXYZ",
      salary: "PKR 90,000/month",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      story:
        "From zero coding knowledge to building complex web applications. Tech Bridge Pakistan's comprehensive curriculum and expert mentorship made it possible.",
      achievement: "Built 10+ projects",
      duration: "10 months course",
      rating: 5,
      company: "StartupXYZ",
      linkedin: "https://linkedin.com/in/ali-raza",
    },
    {
      id: 4,
      name: "Sara Ahmed",
      course: "E-Commerce Specialist",
      currentRole: "E-Commerce Business Owner",
      salary: "PKR 150,000/month",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      story:
        "I started my own online store after the course and now generate 6-figure monthly revenue. The practical knowledge was invaluable.",
      achievement: "6-figure monthly revenue",
      duration: "4 months course",
      rating: 5,
      company: "Own Business",
      linkedin: "https://linkedin.com/in/sara-ahmed",
    },
    {
      id: 5,
      name: "Muhammad Usman",
      course: "Mobile App Development",
      currentRole: "iOS Developer at Tech Giant",
      salary: "PKR 100,000/month",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
      story:
        "The mobile app development course opened doors to international opportunities. I now work remotely for a US-based company.",
      achievement: "Remote international job",
      duration: "12 months course",
      rating: 5,
      company: "Tech Giant Inc.",
      linkedin: "https://linkedin.com/in/muhammad-usman",
    },
    {
      id: 6,
      name: "Ayesha Malik",
      course: "Data Analytics & Visualization",
      currentRole: "Data Analyst at Financial Corp",
      salary: "PKR 75,000/month",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      story:
        "The data analytics course helped me transition from a non-tech background to a high-paying tech career. The support was exceptional.",
      achievement: "Career transition success",
      duration: "6 months course",
      rating: 5,
      company: "Financial Corp",
      linkedin: "https://linkedin.com/in/ayesha-malik",
    },
  ];

  const stats = [
    { number: "5000+", label: "Successful Graduates", icon: "🎓" },
    { number: "95%", label: "Job Placement Rate", icon: "💼" },
    { number: "PKR 75K", label: "Average Starting Salary", icon: "💰" },
    { number: "200%", label: "Average Salary Increase", icon: "📈" },
  ];

  const companies = [
    {
      name: "TechCorp Solutions",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&crop=center",
    },
    {
      name: "Creative Minds Agency",
      logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&h=60&fit=crop&crop=center",
    },
    {
      name: "StartupXYZ",
      logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=120&h=60&fit=crop&crop=center",
    },
    {
      name: "Financial Corp",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=120&h=60&fit=crop&crop=center",
    },
    {
      name: "Digital Innovations",
      logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=120&h=60&fit=crop&crop=center",
    },
    {
      name: "Tech Giant Inc.",
      logo: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=120&h=60&fit=crop&crop=center",
    },
    {
      name: "E-Commerce Hub",
      logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=120&h=60&fit=crop&crop=center",
    },
    {
      name: "Data Solutions Ltd",
      logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=120&h=60&fit=crop&crop=center",
    },
  ];

  const testimonials = [
    {
      text: "Tech Bridge Pakistan doesn't just teach you skills; they transform your entire career trajectory. The practical approach and industry connections are unmatched.",
      author: "Ahmed Hassan",
      role: "Digital Marketing Manager",
    },
    {
      text: "The quality of education and the support system at Tech Bridge Pakistan is exceptional. I recommend it to anyone looking to advance their career in tech.",
      author: "Fatima Khan",
      role: "Senior UI/UX Designer",
    },
    {
      text: "From a complete beginner to landing a high-paying job in just 10 months. Tech Bridge Pakistan made my dreams come true.",
      author: "Ali Raza",
      role: "Full-Stack Developer",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <BackToHome />
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-4 bg-blue-600 hover:bg-blue-700">
            Success Stories
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Real Students,
            <span className="text-blue-600"> Real Success </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how our graduates have transformed their careers and
            achieved remarkable success in the digital industry.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="pt-6">
                  <div className="text-4xl mb-2">{stat.icon}</div>
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

      {/* Success Stories Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Graduate Success Stories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet our successful graduates who have transformed their careers
              and achieved their dreams
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {successStories.map((story) => (
              <Card
                key={story.id}
                className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={story.image} alt={story.name} />
                      <AvatarFallback className="text-lg">
                        {story.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-gray-900">
                        {story.name}
                      </CardTitle>
                      <Badge className="mb-2 bg-blue-600">{story.course}</Badge>
                      <p className="text-sm text-gray-600">
                        {story.currentRole}
                      </p>
                      <p className="text-sm font-semibold text-green-600">
                        {story.salary}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="flex text-yellow-400 mb-1">
                        {[...Array(story.rating)].map((_, i) => (
                          <span key={i}>⭐</span>
                        ))}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {story.company}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <blockquote className="text-gray-700 italic mb-4 border-l-4 border-blue-600 pl-4">
                    "{story.story}"
                  </blockquote>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <div className="text-sm font-semibold text-green-800">
                        Achievement
                      </div>
                      <div className="text-sm text-green-600">
                        {story.achievement}
                      </div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <div className="text-sm font-semibold text-blue-800">
                        Course Duration
                      </div>
                      <div className="text-sm text-blue-600">
                        {story.duration}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                    >
                      View Profile
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      Connect on LinkedIn
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Graduates Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear directly from our successful graduates about their experience
              at Tech Bridge Pakistan
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="pt-6">
                  <div className="text-4xl text-blue-600 mb-4">"</div>
                  <blockquote className="text-gray-700 italic mb-4">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Graduates Work At
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Leading companies trust our graduates and actively recruit from
              our programs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companies.map((company, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow"
              >
                <CardContent className="pt-6 text-center">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-full h-12 object-contain mb-3"
                  />
                  <p className="text-sm font-medium text-gray-700">
                    {company.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Transformation */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-6xl mx-auto">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Career Transformation Journey
            </h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              See how our students progress from beginners to industry
              professionals
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Enroll",
                desc: "Join our comprehensive training program",
                icon: "📝",
              },
              {
                step: "2",
                title: "Learn",
                desc: "Master industry-relevant skills with expert guidance",
                icon: "📚",
              },
              {
                step: "3",
                title: "Build",
                desc: "Create impressive portfolio projects",
                icon: "🛠️",
              },
              {
                step: "4",
                title: "Succeed",
                desc: "Land your dream job with our placement support",
                icon: "🎯",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-green-100 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of successful graduates who have transformed their
            careers with Tech Bridge Pakistan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Start Your Journey
            </Button>
            <Button size="lg" variant="outline">
              Talk to a Graduate
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
