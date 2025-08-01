import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BackToHome from "@/components/BackToHome";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: "📍",
      title: "Visit Our Campus",
      details: [
        "Main Campus: Gulshan-e-Iqbal, Karachi",
        "Branch Office: DHA Phase 2, Karachi",
        "Timing: Mon-Sat 9:00 AM - 6:00 PM",
      ],
    },
    {
      icon: "📞",
      title: "Call Us",
      details: [
        "Main Office: +92 21 1234 5678",
        "Admissions: +92 300 1234567",
        "WhatsApp: +92 321 1234567",
      ],
    },
    {
      icon: "✉️",
      title: "Email Us",
      details: [
        "General: info@techbridgepakistan.com",
        "Admissions: admissions@techbridgepakistan.com",
        "Support: support@techbridgepakistan.com",
      ],
    },
    {
      icon: "🌐",
      title: "Follow Us",
      details: [
        "Facebook: /TechBridgePakistanOfficial",
        "Instagram: @techbridgepakistan",
        "LinkedIn: /company/tech-bridge-pakistan",
      ],
    },
  ];

  const departments = [
    {
      name: "Admissions Department",
      head: "Ms. Ayesha Khan",
      phone: "+92 300 1234567",
      email: "admissions@techbridgepakistan.com",
      timing: "Mon-Sat: 9:00 AM - 6:00 PM",
    },
    {
      name: "Academic Department",
      head: "Mr. Ahmed Ali",
      phone: "+92 321 1234567",
      email: "academic@techbridgepakistan.com",
      timing: "Mon-Fri: 10:00 AM - 5:00 PM",
    },
    {
      name: "Career Services",
      head: "Ms. Fatima Sheikh",
      phone: "+92 333 1234567",
      email: "careers@techbridgepakistan.com",
      timing: "Mon-Fri: 9:00 AM - 4:00 PM",
    },
  ];

  const faqs = [
    {
      question: "What are the admission requirements?",
      answer:
        "Basic computer literacy and intermediate education (12th grade) are required for most courses.",
    },
    {
      question: "Do you provide job placement assistance?",
      answer:
        "Yes, we have a 95% job placement rate and maintain partnerships with over 50 companies.",
    },
    {
      question: "Are the courses available online?",
      answer:
        "We offer both in-person and online learning options to accommodate different learning preferences.",
    },
    {
      question: "What is the fee structure?",
      answer:
        "Course fees vary by program. We offer flexible payment plans and scholarship opportunities.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <BackToHome />
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-4 bg-blue-600 hover:bg-blue-700">
            Contact Us
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Get in Touch with
            <span className="text-blue-600"> Tech Bridge Pakistan</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions about our courses? Need guidance on your career path?
            We are here to help you every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow"
              >
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">{info.icon}</div>
                  <CardTitle className="text-lg text-gray-900">
                    {info.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p
                        key={idx}
                        className="text-sm text-gray-600 text-center"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">
                  Send us a Message
                </CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and we will get back to you within 24
                  hours
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <Input
                        placeholder="Enter your first name"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <Input
                        placeholder="Enter your last name"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      placeholder="Enter your phone number"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Course Interest
                    </label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="">Select a course</option>
                      <option value="graphics">Graphics Designing</option>
                      <option value="digital-marketing">
                        Digital Marketing
                      </option>
                      <option value="web-development">Web Development</option>
                      <option value="ecommerce">E-Commerce</option>
                      <option value="mobile-app">Mobile App Development</option>
                      <option value="data-analytics">Data Analytics</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your goals and how we can help you"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    ></textarea>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 py-3">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map and Location */}
            <div className="space-y-6">
              <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">
                    Visit Our Campus
                  </CardTitle>
                  <p className="text-gray-600">
                    Come and see our state-of-the-art facilities
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center text-gray-500">
                      <div className="text-4xl mb-2">🗺️</div>
                      <p>Interactive Map</p>
                      <p className="text-sm">Gulshan-e-Iqbal, Karachi</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-blue-600">📍</span>
                      <span className="text-gray-700">
                        Block 13-A, Gulshan-e-Iqbal, Karachi, Pakistan
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-blue-600">🚗</span>
                      <span className="text-gray-700">
                        Free parking available
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-blue-600">🚌</span>
                      <span className="text-gray-700">
                        Accessible by public transport
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Need Immediate Help?
                  </h3>
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full border-white text-white hover:bg-white hover:text-blue-600"
                    >
                      📞 Call Now: +92 21 1234 5678
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-white text-white hover:bg-white hover:text-blue-600"
                    >
                      💬 WhatsApp: +92 321 1234567
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-white text-white hover:bg-white hover:text-blue-600"
                    >
                      💬 Live Chat Support
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Department Contacts
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Connect directly with the right department for faster assistance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">
                    {dept.name}
                  </CardTitle>
                  <p className="text-blue-600 font-medium">{dept.head}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <span>📞</span>
                      <span>{dept.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>✉️</span>
                      <span>{dept.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>🕒</span>
                      <span>{dept.timing}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Quick answers to common questions about our courses and services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
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
            Still Have Questions?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our admissions team is ready to help you find the perfect course for
            your career goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Schedule a Call
            </Button>
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
