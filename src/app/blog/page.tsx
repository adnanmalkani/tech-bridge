import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import BackToHome from "@/components/BackToHome";
import Image from "next/image";

export default function BlogPage() {
  const featuredPosts = [
    {
      id: 1,
      title:
        "The Future of Digital Marketing in Pakistan: Trends to Watch in 2024",
      excerpt:
        "Explore the emerging trends in digital marketing that are shaping the Pakistani market. From AI-powered campaigns to voice search optimization.",
      author: "Ahmed Hassan",
      date: "March 10, 2024",
      readTime: "8 min read",
      category: "Digital Marketing",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop&crop=center",
      featured: true,
      tags: ["Digital Marketing", "AI", "Trends", "Pakistan"],
    },
    {
      id: 2,
      title:
        "Complete Guide to React.js for Beginners: Build Your First Web App",
      excerpt:
        "Learn React.js from scratch with this comprehensive guide. We'll cover components, state management, and build a real project together.",
      author: "Sara Ahmad",
      date: "March 8, 2024",
      readTime: "12 min read",
      category: "Web Development",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=600&h=300&fit=crop&crop=center",
      featured: true,
      tags: ["React", "JavaScript", "Web Development", "Tutorial"],
    },
  ];

  const recentPosts = [
    {
      id: 3,
      title: "10 Essential Photoshop Techniques Every Designer Should Know",
      excerpt:
        "Master these fundamental Photoshop techniques to elevate your design skills and create professional-quality graphics.",
      author: "Fatima Khan",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Graphics Design",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=250&fit=crop&crop=center",
      tags: ["Photoshop", "Design", "Tutorial"],
    },
    {
      id: 4,
      title: "How to Build a Successful E-commerce Website in 2024",
      excerpt:
        "Step-by-step guide to creating an e-commerce website that converts visitors into customers using modern web technologies.",
      author: "Ali Raza",
      date: "March 3, 2024",
      readTime: "10 min read",
      category: "Web Development",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&crop=center",
      tags: ["E-commerce", "Web Development", "Business"],
    },
    {
      id: 5,
      title: "Social Media Marketing Strategies That Actually Work",
      excerpt:
        "Discover proven social media marketing strategies that drive engagement and convert followers into customers.",
      author: "Zainab Sheikh",
      date: "March 1, 2024",
      readTime: "7 min read",
      category: "Digital Marketing",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=250&fit=crop&crop=center",
      tags: ["Social Media", "Marketing", "Strategy"],
    },
    {
      id: 6,
      title: "Getting Started with Python: A Beginner's Journey",
      excerpt:
        "Learn Python programming from the ground up with practical examples and real-world projects.",
      author: "Hassan Ali",
      date: "February 28, 2024",
      readTime: "9 min read",
      category: "Programming",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=250&fit=crop&crop=center",
      tags: ["Python", "Programming", "Beginner"],
    },
  ];

  const categories = [
    { name: "All", count: 24 },
    { name: "Web Development", count: 8 },
    { name: "Digital Marketing", count: 6 },
    { name: "Graphics Design", count: 5 },
    { name: "Programming", count: 3 },
    { name: "Business", count: 2 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <BackToHome />
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-4 bg-blue-600 hover:bg-blue-700">
            Tech Blog
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Learn, Grow &<span className="text-blue-600"> Stay Updated</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover the latest trends, tutorials, and insights in technology,
            digital marketing, and career development.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Featured Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-gray-500">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                        {post.author.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {post.author}
                        </p>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories and Recent Posts */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    className="w-full flex items-center justify-between p-3 text-left rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-gray-700">{category.name}</span>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="lg:col-span-3">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Recent Articles
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {recentPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className="text-xs">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-gray-500">
                        {post.readTime}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                          {post.author.charAt(0)}
                        </div>
                        <div>
                          <p className="text-xs font-medium text-gray-900">
                            {post.author}
                          </p>
                          <p className="text-xs text-gray-500">{post.date}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        Read
                      </Button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated with Our Newsletter
          </h2>
          <p className="text-gray-600 mb-8">
            Get the latest articles, tutorials, and industry insights delivered
            to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button className="bg-blue-600 hover:bg-blue-700">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Want to Contribute?
          </h2>
          <p className="text-blue-100 mb-8">
            Share your knowledge and experience with our community. We are
            always looking for quality content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Submit Article
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white hover:text-blue-600"
            >
              Writing Guidelines
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
