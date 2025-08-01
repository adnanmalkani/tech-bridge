import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import BackToHome from "@/components/BackToHome";

export default function CoursesPage() {
  const courses = [
    {
      id: 1,
      title: "Graphics Designing Mastery",
      duration: "6 Months",
      level: "Beginner to Advanced",
      price: "PKR 25,000",
      image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=400&h=250&fit=crop&crop=center",
      description: "Master the art of visual communication with comprehensive training in Adobe Creative Suite, branding, and digital design.",
      modules: [
        "Adobe Photoshop Advanced",
        "Adobe Illustrator Professional",
        "Adobe InDesign Layout",
        "Logo & Brand Identity Design",
        "Print & Digital Media Design",
        "Portfolio Development"
      ],
      tools: ["Photoshop", "Illustrator", "InDesign", "Figma", "Canva"],
      career: ["Graphic Designer", "Brand Designer", "UI/UX Designer", "Freelancer"]
    },
    {
      id: 2,
      title: "Digital Marketing Expert",
      duration: "8 Months",
      level: "Beginner to Professional",
      price: "PKR 30,000",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center",
      description: "Become a certified digital marketing expert with hands-on training in SEO, SEM, social media, and analytics.",
      modules: [
        "Search Engine Optimization (SEO)",
        "Google Ads & PPC Campaigns",
        "Social Media Marketing",
        "Content Marketing Strategy",
        "Email Marketing Automation",
        "Analytics & Reporting"
      ],
      tools: ["Google Analytics", "Google Ads", "Facebook Ads", "SEMrush", "Mailchimp"],
      career: ["Digital Marketing Manager", "SEO Specialist", "Social Media Manager", "PPC Expert"]
    },
    {
      id: 3,
      title: "Web Development Bootcamp",
      duration: "10 Months",
      level: "Beginner to Advanced",
      price: "PKR 35,000",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=250&fit=crop&crop=center",
      description: "Learn full-stack web development with modern technologies and frameworks to build dynamic, responsive websites.",
      modules: [
        "HTML5 & CSS3 Fundamentals",
        "JavaScript & ES6+",
        "React.js Development",
        "Node.js & Express",
        "Database Management",
        "Deployment & DevOps"
      ],
      tools: ["VS Code", "React", "Node.js", "MongoDB", "Git", "AWS"],
      career: ["Frontend Developer", "Backend Developer", "Full-Stack Developer", "Web Designer"]
    },
    {
      id: 4,
      title: "E-Commerce Specialist",
      duration: "4 Months",
      level: "Intermediate",
      price: "PKR 20,000",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop&crop=center",
      description: "Master e-commerce platforms and online business strategies to build and manage successful online stores.",
      modules: [
        "Shopify Store Development",
        "WooCommerce Setup",
        "Product Photography",
        "Inventory Management",
        "Payment Gateway Integration",
        "E-commerce Marketing"
      ],
      tools: ["Shopify", "WooCommerce", "PayPal", "Stripe", "Google Shopping"],
      career: ["E-commerce Manager", "Online Store Owner", "Digital Entrepreneur", "Product Manager"]
    },
    {
      id: 5,
      title: "Mobile App Development",
      duration: "12 Months",
      level: "Intermediate to Advanced",
      price: "PKR 40,000",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=250&fit=crop&crop=center",
      description: "Build native and cross-platform mobile applications for iOS and Android using modern development frameworks.",
      modules: [
        "React Native Development",
        "Flutter Framework",
        "Mobile UI/UX Design",
        "API Integration",
        "App Store Optimization",
        "Mobile App Testing"
      ],
      tools: ["React Native", "Flutter", "Xcode", "Android Studio", "Firebase"],
      career: ["Mobile App Developer", "iOS Developer", "Android Developer", "App Entrepreneur"]
    },
    {
      id: 6,
      title: "Data Analytics & Visualization",
      duration: "6 Months",
      level: "Beginner to Intermediate",
      price: "PKR 28,000",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=250&fit=crop&crop=center",
      description: "Learn to analyze data and create compelling visualizations to drive business decisions and insights.",
      modules: [
        "Excel Advanced Functions",
        "SQL Database Queries",
        "Python for Data Analysis",
        "Tableau Visualization",
        "Power BI Dashboards",
        "Statistical Analysis"
      ],
      tools: ["Excel", "SQL", "Python", "Tableau", "Power BI", "R"],
      career: ["Data Analyst", "Business Intelligence Analyst", "Data Scientist", "Research Analyst"]
    }
  ];

  const features = [
    {
      icon: "🎓",
      title: "Certified Training",
      description: "Industry-recognized certifications upon completion"
    },
    {
      icon: "💼",
      title: "Job Placement",
      description: "95% job placement rate with our industry partners"
    },
    {
      icon: "🔄",
      title: "Lifetime Support",
      description: "Continuous learning support and course updates"
    },
    {
      icon: "💻",
      title: "Hands-on Projects",
      description: "Real-world projects to build your portfolio"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <BackToHome />
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-4 bg-blue-600 hover:bg-blue-700">Our Courses</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Career with
            <span className="text-blue-600"> Expert Training</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose from our comprehensive range of industry-focused courses designed 
            to give you the skills employers are looking for.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Available Courses
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive course catalog and find the perfect program to advance your career
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                <div className="relative">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 right-4 bg-blue-600">
                    {course.level}
                  </Badge>
                </div>
                
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl text-gray-900">{course.title}</CardTitle>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      {course.price}
                    </Badge>
                  </div>
                  <div className="flex gap-2 text-sm text-gray-600">
                    <span>📅 {course.duration}</span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-700 mb-4">{course.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Course Modules:</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {course.modules.slice(0, 3).map((module, idx) => (
                          <div key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                            {module}
                          </div>
                        ))}
                        {course.modules.length > 3 && (
                          <div className="text-sm text-blue-600 font-medium">
                            +{course.modules.length - 3} more modules
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Tools & Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {course.tools.map((tool, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Career Opportunities:</h4>
                      <div className="flex flex-wrap gap-2">
                        {course.career.slice(0, 2).map((career, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs text-green-600 border-green-600">
                            {career}
                          </Badge>
                        ))}
                        {course.career.length > 2 && (
                          <Badge variant="outline" className="text-xs text-gray-600">
                            +{course.career.length - 2} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 mt-6">
                    <a href="/apply" className="flex-1">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        Enroll Now
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
              Simple Admission Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get started with your learning journey in just a few simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Choose Course", desc: "Select the course that matches your career goals" },
              { step: "02", title: "Apply Online", desc: "Fill out our simple online application form" },
              { step: "03", title: "Interview", desc: "Brief discussion about your goals and expectations" },
              { step: "04", title: "Start Learning", desc: "Begin your transformative learning journey" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of successful students who have transformed their careers with our expert training
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/apply">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Apply Now
              </Button>
            </a>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}