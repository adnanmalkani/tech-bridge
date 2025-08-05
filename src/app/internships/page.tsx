import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import BackToHome from "@/components/BackToHome";

export default function InternshipsPage() {
  const internships = [
    {
      id: 1,
      title: "Graphics Design Apprenticeship",
      duration: "6 Months",
      level: "Beginner to Advanced",
      image:
        "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=400&h=250&fit=crop&crop=center",
      description:
        "Master the art of visual communication while working on real client projects. Get hands-on experience with Adobe Creative Suite and build your portfolio with guidance from industry experts.",
      modules: [
        "Adobe Photoshop Advanced",
        "Adobe Illustrator Professional",
        "Brand Identity Design",
        "Print & Digital Media",
        "Client Project Work",
        "Portfolio Development",
      ],
      tools: ["Photoshop", "Illustrator", "InDesign", "Figma", "Canva"],
      partnerCompanies: [
        "Creative Studio Pro",
        "Design Hub PK",
        "BrandCraft",
        "Pixel Perfect",
      ],
      career: [
        "Junior Graphic Designer",
        "Brand Designer",
        "UI/UX Designer",
        "Freelance Designer",
      ],
    },
    {
      id: 2,
      title: "Digital Marketing Internship",
      duration: "8 Months",
      level: "Beginner to Professional",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center",
      description:
        "Join our partner agencies to work on live campaigns for real clients. Learn SEO, social media marketing, and PPC while contributing to actual business growth and building measurable results.",
      modules: [
        "SEO Campaign Management",
        "Google Ads & PPC Campaigns",
        "Social Media Marketing",
        "Content Strategy",
        "Client Account Management",
        "Analytics & Reporting",
      ],
      tools: [
        "Google Analytics",
        "Google Ads",
        "Facebook Ads",
        "SEMrush",
        "Mailchimp",
      ],
      partnerCompanies: [
        "Digital First",
        "Growth Hackers",
        "SEO Masters",
        "Social Buzz",
      ],
      career: [
        "Digital Marketing Specialist",
        "SEO Specialist",
        "Social Media Manager",
        "Campaign Manager",
      ],
    },
    {
      id: 3,
      title: "Web Development Internship",
      duration: "10 Months",
      level: "Beginner to Advanced",
      image:
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=250&fit=crop&crop=center",
      description:
        "Work alongside senior developers on real client websites and applications. Build your GitHub portfolio with production code while learning modern development practices.",
      modules: [
        "Frontend Development",
        "React.js Projects",
        "Backend API Development",
        "Database Design",
        "Client Website Builds",
        "Code Review & Testing",
      ],
      tools: ["VS Code", "React", "Node.js", "MongoDB", "Git", "AWS"],
      partnerCompanies: [
        "Tech Solutions Inc",
        "WebCraft Studio",
        "DevPro Agency",
        "CodeCrafters",
      ],
      career: [
        "Frontend Developer",
        "Backend Developer",
        "Full-Stack Developer",
        "Web Developer",
      ],
    },
    {
      id: 4,
      title: "AI & Machine Learning Internship",
      duration: "12 Months",
      level: "Intermediate",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop&crop=center",
      description:
        "Work on cutting-edge AI projects with our partner tech companies. Apply machine learning to solve real business problems and build portfolio projects using Python, TensorFlow, and cloud platforms.",
      modules: [
        "Python for AI/ML",
        "Machine Learning Algorithms",
        "Deep Learning with TensorFlow",
        "NLP Applications",
        "Computer Vision Projects",
        "AI Model Deployment",
      ],
      tools: [
        "Python",
        "TensorFlow",
        "PyTorch",
        "Jupyter",
        "AWS SageMaker",
        "OpenAI API",
      ],
      partnerCompanies: [
        "AI Innovations Lab",
        "DataTech Solutions",
        "SmartSystems Inc",
        "ML Dynamics",
      ],
      career: [
        "AI Engineer",
        "ML Developer",
        "Data Scientist",
        "AI Research Assistant",
      ],
    },
    {
      id: 5,
      title: "Cybersecurity Apprenticeship",
      duration: "10 Months",
      level: "Intermediate to Advanced",
      image:
        "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=400&h=250&fit=crop&crop=center",
      description:
        "Join cybersecurity teams at our partner companies to work on real security challenges. Learn penetration testing, security audits, and incident response while protecting actual business systems.",
      modules: [
        "Network Security",
        "Penetration Testing",
        "Security Audits",
        "Incident Response",
        "Threat Analysis",
        "Security Tools Implementation",
      ],
      tools: [
        "Kali Linux",
        "Metasploit",
        "Wireshark",
        "Nmap",
        "Burp Suite",
        "Splunk",
      ],
      partnerCompanies: [
        "SecureNet Solutions",
        "CyberShield Corp",
        "SafeGuard Security",
        "TechDefenders",
      ],
      career: [
        "Security Analyst",
        "Penetration Tester",
        "SOC Analyst",
        "Security Consultant",
      ],
    },
    {
      id: 6,
      title: "E-Commerce Management Internship",
      duration: "4 Months",
      level: "Intermediate",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop&crop=center",
      description:
        "Manage real e-commerce stores for our partner businesses. Learn Shopify development, product management, and digital marketing while driving actual sales and business growth.",
      modules: [
        "Shopify Store Management",
        "Product Photography",
        "Inventory Management",
        "Digital Marketing Campaigns",
        "Customer Service",
        "Sales Analytics",
      ],
      tools: [
        "Shopify",
        "WooCommerce",
        "Google Analytics",
        "Facebook Ads",
        "Canva",
      ],
      partnerCompanies: [
        "Ecom Masters",
        "Online Retail Pro",
        "Shopify Experts",
        "Digital Commerce Co",
      ],
      career: [
        "E-commerce Manager",
        "Store Manager",
        "Digital Marketing Specialist",
        "Online Business Owner",
      ],
    },
  ];

  const features = [
    {
      icon: "💰",
      title: "Free Internships",
      description: "Gain experience without any cost",
    },
    {
      icon: "🏢",
      title: "Real Companies",
      description: "Work with our 50+ partner companies on live projects",
    },
    {
      icon: "🎓",
      title: "Experience Certificate",
      description: "Get industry-recognized experience certificates",
    },
    {
      icon: "💼",
      title: "Job Placement",
      description: "90% job placement rate with our hiring partners",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      <BackToHome />
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-4 bg-purple-600 hover:bg-purple-700">
            Our Internships
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Launch Your Career with
            <span className="text-purple-600"> Free Internships</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join our industry-leading internship programs and get hands-on
            experience with real companies. Build your portfolio and secure your dream job.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Internships Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Available Internships
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive internship programs and start
              building real-world experience with top companies
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {internships.map((internship) => (
              <Card
                key={internship.id}
                className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={internship.image}
                    alt={internship.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 right-4 bg-blue-600">
                    {internship.level}
                  </Badge>
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl text-gray-900">
                      {internship.title}
                    </CardTitle>
                  </div>
                  <div className="flex gap-2 text-sm text-gray-600">
                    <span>📅 {internship.duration}</span>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-700 mb-4">{internship.description}</p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Program Modules:
                      </h4>
                      <div className="grid grid-cols-1 gap-1">
                        {internship.modules.slice(0, 3).map((module, idx) => (
                          <div
                            key={idx}
                            className="text-sm text-gray-600 flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                            {module}
                          </div>
                        ))}
                        {internship.modules.length > 3 && (
                          <div className="text-sm text-purple-600 font-medium">
                            +{internship.modules.length - 3} more modules
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Partner Companies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {internship.partnerCompanies
                          .slice(0, 2)
                          .map((company, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              className="text-xs"
                            >
                              {company}
                            </Badge>
                          ))}
                        {internship.partnerCompanies.length > 2 && (
                          <Badge variant="secondary" className="text-xs">
                            +{internship.partnerCompanies.length - 2} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Career Opportunities:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {internship.career.slice(0, 2).map((career, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="text-xs text-green-600 border-green-600"
                          >
                            {career}
                          </Badge>
                        ))}
                        {internship.career.length > 2 && (
                          <Badge
                            variant="outline"
                            className="text-xs text-gray-600"
                          >
                            +{internship.career.length - 2} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-6">
                    <a href="/apply" className="flex-1">
                      <Button className="w-full bg-purple-600 hover:bg-purple-700">
                        Apply Now
                      </Button>
                    </a>
                    <Button variant="outline" className="flex-1">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple Application Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get started with your internship in just a few simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Choose Internship",
                desc: "Select the internship that matches your career goals",
              },
              {
                step: "02",
                title: "Apply Online",
                desc: "Fill out our simple online application form",
              },
              {
                step: "03",
                title: "Interview",
                desc: "Meet with our team and potential host companies",
              },
              {
                step: "04",
                title: "Start Internship",
                desc: "Begin your internship and start building experience",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Career Journey?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join hundreds of successful interns who have launched their careers
            through our internship programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/apply">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100"
              >
                Apply Now
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
