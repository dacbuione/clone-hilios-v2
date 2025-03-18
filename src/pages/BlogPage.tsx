import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Calendar, User, ArrowRight, Tag } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  image: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "AI Agents - The Future of Autonomous Systems",
    excerpt:
      "Explore how AI agents are evolving to become more autonomous, capable of complex reasoning, and transforming customer experiences and business operations.",
    author: "Dr. David Chen",
    date: "March 15, 2024",
    category: "AI Technology",
    tags: ["AI Agents", "Autonomous Systems", "Future of AI", "Enterprise AI"],
    image:
      "https://hilios.ai/_next/image?url=%2Fassets%2Fimgs%2Fblog%2Fdetails%2Fai-agents-future-of-autonomous-systems.png&w=1200&q=75",
    slug: "ai-agents-future-of-autonomous-systems",
  },
  {
    id: 2,
    title: "The Business Case for AI-Powered Customer Support",
    excerpt:
      "Learn how implementing AI in your customer support operations can lead to significant cost savings and improved customer satisfaction.",
    author: "Michael Johnson",
    date: "May 28, 2023",
    category: "Business Strategy",
    tags: ["ROI", "Business Growth", "Customer Retention"],
    image:
      "https://hilios.ai/_next/image?url=%2Fassets%2Fimgs%2Fblog%2Fai-agents-future-of-autonomous-systems%2Fitems%2Frobots-task.png&w=1200&q=75",
    slug: "business-case-ai-powered-customer-support",
  },
  {
    id: 3,
    title: "Balancing Automation and Human Touch in Customer Service",
    excerpt:
      "Explore the perfect balance between AI automation and human intervention to create the optimal customer experience.",
    author: "Sophia Williams",
    date: "April 12, 2023",
    category: "Customer Experience",
    tags: ["Human Touch", "Automation", "Customer Experience"],
    image:
      "https://hilios.ai/_next/image?url=%2Fassets%2Fimgs%2Fblog%2Fdetails%2Fai-agents-future-of-autonomous-systems.png&w=1200&q=75",
    slug: "balancing-automation-human-touch",
  },
  {
    id: 4,
    title:
      "10 Ways Natural Language Processing is Improving Support Interactions",
    excerpt:
      "Discover the practical applications of NLP that are making customer interactions more natural and effective.",
    author: "David Rodriguez",
    date: "March 5, 2023",
    category: "AI Technology",
    tags: ["NLP", "Language Processing", "AI Applications"],
    image:
      "https://hilios.ai/_next/image?url=%2Fassets%2Fimgs%2Fblog%2Fai-agents-future-of-autonomous-systems%2Fitems%2Frobots-task.png&w=1200&q=75",
    slug: "nlp-improving-support-interactions",
  },
  {
    id: 5,
    title: "The Future of Work: How AI is Empowering Support Agents",
    excerpt:
      "See how AI tools are transforming the role of customer support agents and creating more fulfilling career paths.",
    author: "Lisa Thompson",
    date: "February 19, 2023",
    category: "Workplace",
    tags: ["Future of Work", "Employee Experience", "Support Teams"],
    image:
      "https://hilios.ai/_next/image?url=%2Fassets%2Fimgs%2Fblog%2Fai-agents-future-of-autonomous-systems%2Fitems%2Frobots-task.png&w=1200&q=75",
    slug: "future-work-ai-empowering-agents",
  },
  {
    id: 6,
    title: "Building a Seamless Omnichannel Experience with AI",
    excerpt:
      "Learn how AI can help you deliver consistent customer service across all communication channels.",
    author: "Robert Zhang",
    date: "January 8, 2023",
    category: "Customer Experience",
    tags: ["Omnichannel", "Customer Journey", "Integration"],
    image:
      "https://hilios.ai/_next/image?url=%2Fassets%2Fimgs%2Fblog%2Fai-agents-future-of-autonomous-systems%2Fitems%2Frobots-task.png&w=1200&q=75",
    slug: "seamless-omnichannel-experience-ai",
  },
];

const categories = [
  "All",
  "AI Technology",
  "Business Strategy",
  "Customer Experience",
  "Workplace",
];

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = blogPosts.filter((post) => {
    // Filter by search query
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    // Filter by category
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-[#f6f9fa] min-h-screen">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Our <span className="gradient-title">Blog</span>
          </h1>
          <p className="text-lg text-secondary">
            Insights, trends, and best practices to help you deliver exceptional
            customer experiences with AI.
          </p>
        </motion.div>

        {/* Search and filters */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="w-full md:w-auto">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles..."
                  className="w-full md:w-80 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-theme focus:border-transparent outline-none"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? "bg-theme text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog posts grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Post image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    onError={(e) => {
                      e.currentTarget.src = `https://via.placeholder.com/600x400?text=${encodeURIComponent(
                        post.title
                      )}`;
                    }}
                  />
                </div>

                {/* Post content */}
                <div className="p-6">
                  {/* Category */}
                  <div className="mb-3">
                    <span className="inline-block bg-blue-100 text-theme text-xs px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta info */}
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <div className="flex items-center mr-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <div
                        key={index}
                        className="flex items-center text-xs text-gray-500"
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        <span>{tag}</span>
                      </div>
                    ))}
                  </div>

                  {/* Read more link */}
                  <Link
                    to={`/blog/${post.slug}`}
                    className="flex items-center text-theme font-medium hover:underline"
                  >
                    Read more
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No articles found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filter to find what you're looking
              for.
            </p>
          </div>
        )}

        {/* Newsletter subscription */}
        <div className="mt-20 bg-white rounded-xl shadow-sm p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-gray-600 mb-6">
                Stay up to date with the latest insights on AI, customer
                service, and technology trends. No spam, just valuable content
                delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-theme focus:border-transparent outline-none"
                />
                <button className="bg-theme text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="/assets/imgs/newsletter-illustration.svg"
                alt="Newsletter subscription"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
