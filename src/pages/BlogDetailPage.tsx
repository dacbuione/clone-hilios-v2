import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, Facebook, Twitter, Linkedin, ArrowLeft, MessageSquare } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  content: React.ReactNode;
  author: string;
  authorRole?: string;
  authorImage?: string;
  date: string;
  category: string;
  tags: string[];
  readTime: string;
  mainImage: string;
  relatedImages?: {src: string; alt: string; caption?: string}[];
  slug: string;
}

const blogData: Record<string, BlogPost> = {
  "ai-agents-future-of-autonomous-systems": {
    id: 1,
    title: "AI Agents - The Future of Autonomous Systems",
    content: (
      <>
        <p className="text-lg mb-6">
          The evolution of artificial intelligence has been nothing short of remarkable. From rule-based systems to machine learning models, and now to increasingly autonomous AI agents, we're witnessing a fundamental shift in how intelligent systems operate and interact with the world.
        </p>
        
        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">The Rise of AI Agents</h2>
        
        <p className="mb-6">
          AI agents represent the next frontier in artificial intelligence. Unlike traditional AI systems that execute predefined tasks within narrow domains, AI agents possess the capability to:
        </p>
        
        <ul className="list-disc pl-8 mb-6 space-y-2">
          <li>Perceive their environment through various inputs (text, images, sensor data)</li>
          <li>Reason about complex scenarios and make decisions</li>
          <li>Take actions autonomously to achieve specified goals</li>
          <li>Learn from interactions and improve over time</li>
          <li>Work collaboratively with humans and other AI systems</li>
        </ul>
        
        <div className="bg-blue-50 p-6 rounded-xl my-8">
          <p className="italic text-primary text-lg">
            "AI agents are fundamentally changing how we think about software. They're not just tools that execute commands – they're partners that understand contexts, anticipate needs, and take initiative to solve problems."
          </p>
        </div>
        
        <p className="mb-6">
          The shift toward agent-based AI systems is being driven by remarkable advances in several key technologies:
        </p>
        
        <h3 className="text-xl font-bold text-primary mt-8 mb-3">1. Foundation Models and Emergent Capabilities</h3>
        
        <p className="mb-6">
          Large language models (LLMs) like GPT-4 and Claude have demonstrated capabilities that extend far beyond their original training objectives. These systems can reason through complex problems, understand nuanced instructions, and generate creative solutions – forming the cognitive backbone of more sophisticated AI agents.
        </p>
        
        <div className="my-8">
          <img 
            src="https://hilios.ai/_next/image?url=%2Fassets%2Fimgs%2Fblog%2Fai-agents-future-of-autonomous-systems%2Fitems%2Frobots-task.png&w=1200&q=75" 
            alt="Robots performing various tasks" 
            className="rounded-xl w-full" 
          />
          <p className="text-sm text-gray-500 mt-2 text-center">The new generation of AI agents can handle increasingly complex and creative tasks</p>
        </div>
        
        <h3 className="text-xl font-bold text-primary mt-8 mb-3">2. Sophisticated Planning and Reasoning</h3>
        
        <p className="mb-6">
          Modern AI agents incorporate advanced planning capabilities, breaking down complex goals into manageable steps and adapting when circumstances change. Techniques like chain-of-thought reasoning, recursive task decomposition, and reflection mechanisms enable these systems to tackle problems that previously required human intervention.
        </p>
        
        <h3 className="text-xl font-bold text-primary mt-8 mb-3">3. Multimodal Understanding</h3>
        
        <p className="mb-6">
          AI agents are increasingly able to perceive and reason across multiple modalities – understanding text, images, audio, and video in combination. This enables richer interaction with the physical world and more natural communication with humans.
        </p>
        
        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Real-World Applications of AI Agents</h2>
        
        <p className="mb-6">
          The growing capabilities of AI agents are enabling transformative applications across numerous domains:
        </p>
        
        <h3 className="text-xl font-bold text-primary mt-8 mb-3">Customer Service and Support</h3>
        
        <p className="mb-6">
          AI agents are revolutionizing customer support by handling complex inquiries without human intervention. These systems can:
        </p>
        
        <ul className="list-disc pl-8 mb-6 space-y-2">
          <li>Understand customer needs across multiple interactions</li>
          <li>Access knowledge bases and customer data to provide personalized assistance</li>
          <li>Execute transactions and solve problems end-to-end</li>
          <li>Seamlessly escalate to human agents when necessary</li>
        </ul>
        
        <p className="mb-6">
          At HiliosAI, our autonomous agents are redefining customer support capabilities. They can understand complex queries in context, navigate sophisticated business systems, engage in multi-turn conversations with memory, and deliver consistent, high-quality support 24/7.
        </p>
        
        <h3 className="text-xl font-bold text-primary mt-8 mb-3">Business Operations and Productivity</h3>
        
        <p className="mb-6">
          AI agents are streamlining operations by automating complex workflows that previously required human judgment:
        </p>
        
        <ul className="list-disc pl-8 mb-6 space-y-2">
          <li>Document processing and summarization</li>
          <li>Data analysis and report generation</li>
          <li>Calendar management and meeting scheduling</li>
          <li>Research and information synthesis</li>
        </ul>
        
        <div className="my-8">
          <img 
            src="https://hilios.ai/_next/image?url=%2Fassets%2Fimgs%2Fblog%2Fai-agents-future-of-autonomous-systems%2Fitems%2Fai-office.png&w=1200&q=75" 
            alt="AI agents helping in office environment" 
            className="rounded-xl w-full" 
          />
          <p className="text-sm text-gray-500 mt-2 text-center">AI agents can handle repetitive tasks, freeing humans to focus on creative and strategic work</p>
        </div>
        
        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">The Challenges Ahead</h2>
        
        <p className="mb-6">
          Despite rapid progress, several significant challenges must be addressed as AI agents become more autonomous:
        </p>
        
        <h3 className="text-xl font-bold text-primary mt-8 mb-3">Safety and Alignment</h3>
        
        <p className="mb-6">
          Ensuring that autonomous systems act in accordance with human values and intentions is paramount. As AI agents gain more capabilities and autonomy, robust safety mechanisms and alignment techniques become increasingly critical.
        </p>
        
        <h3 className="text-xl font-bold text-primary mt-8 mb-3">Reliability and Robustness</h3>
        
        <p className="mb-6">
          AI agents must function reliably across diverse scenarios, including unexpected situations. Current challenges include reducing hallucinations, improving reasoning in edge cases, and ensuring consistent performance over time.
        </p>
        
        <h3 className="text-xl font-bold text-primary mt-8 mb-3">Human-AI Collaboration</h3>
        
        <p className="mb-6">
          Designing effective interfaces and interaction patterns between humans and AI agents remains an active area of research. The goal is to leverage the complementary strengths of both while mitigating potential friction points.
        </p>
        
        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">The Future Landscape</h2>
        
        <p className="mb-6">
          As we look ahead, several trends are likely to shape the evolution of AI agents:
        </p>
        
        <h3 className="text-xl font-bold text-primary mt-8 mb-3">Increasing Autonomy</h3>
        
        <p className="mb-6">
          Future AI agents will likely demonstrate greater independence, requiring less oversight and handling more complex tasks with minimal human intervention.
        </p>
        
        <h3 className="text-xl font-bold text-primary mt-8 mb-3">Specialized Agent Ecosystems</h3>
        
        <p className="mb-6">
          We'll likely see the emergence of specialized agents designed for particular domains, working together in coordinated systems to accomplish complex objectives.
        </p>
        
        <h3 className="text-xl font-bold text-primary mt-8 mb-3">Personalized Agents</h3>
        
        <p className="mb-6">
          AI agents will become increasingly personalized, adapting to individual users' preferences, communication styles, and needs over time.
        </p>
        
        <div className="bg-blue-50 p-6 rounded-xl my-8">
          <p className="italic text-primary text-lg">
            "The most profound impact of AI agents may be in how they augment human capabilities rather than replace them – creating partnerships that enhance creativity, problem-solving, and decision-making across all domains of human endeavor."
          </p>
        </div>
        
        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Conclusion</h2>
        
        <p className="mb-6">
          AI agents represent a fundamental evolution in how artificial intelligence interacts with the world. By combining advanced reasoning, planning capabilities, and multimodal understanding, these systems are becoming increasingly capable of autonomous operation in complex environments.
        </p>
        
        <p className="mb-6">
          At HiliosAI, we're building the next generation of autonomous agents that combine these cutting-edge capabilities with enterprise-grade reliability. Our mission is to leverage AI agents to transform customer experiences while addressing the challenges of safety, reliability, and effective human-AI collaboration.
        </p>
        
        <p className="mb-6">
          The future of AI isn't just about smarter algorithms – it's about creating systems that can understand, reason, and act autonomously to achieve meaningful goals in partnership with humans.
        </p>
      </>
    ),
    author: "Dr. David Chen",
    authorRole: "Chief AI Officer at HiliosAI",
    authorImage: "https://randomuser.me/api/portraits/men/32.jpg",
    date: "March 15, 2024",
    category: "AI Technology",
    tags: ["AI Agents", "Autonomous Systems", "Future of AI", "Enterprise AI"],
    readTime: "8 min read",
    mainImage: "https://hilios.ai/_next/image?url=%2Fassets%2Fimgs%2Fblog%2Fdetails%2Fai-agents-future-of-autonomous-systems.png&w=1200&q=75",
    relatedImages: [
      {
        src: "https://hilios.ai/_next/image?url=%2Fassets%2Fimgs%2Fblog%2Fai-agents-future-of-autonomous-systems%2Fitems%2Frobots-task.png&w=1200&q=75",
        alt: "Robots performing various tasks",
        caption: "The new generation of AI agents can handle increasingly complex and creative tasks"
      },
      {
        src: "https://hilios.ai/_next/image?url=%2Fassets%2Fimgs%2Fblog%2Fai-agents-future-of-autonomous-systems%2Fitems%2Fai-office.png&w=1200&q=75",
        alt: "AI agents helping in office environment",
        caption: "AI agents can handle repetitive tasks, freeing humans to focus on creative and strategic work"
      }
    ],
    slug: "ai-agents-future-of-autonomous-systems"
  }
};

const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogData[slug] : null;
  
  if (!post) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Blog post not found</h1>
        <p className="mb-6">The article you're looking for doesn't exist or has been moved.</p>
        <Link to="/blog" className="text-theme hover:underline flex items-center justify-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all articles
        </Link>
      </div>
    );
  }
  
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-6 py-20 pt-32">
          <Link to="/blog" className="text-theme hover:underline flex items-center mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all articles
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-4xl mx-auto">
              {/* Category */}
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-theme text-sm px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              
              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                {post.title}
              </h1>
              
              {/* Meta Info */}
              <div className="flex flex-wrap items-center text-sm text-gray-500 mb-8 gap-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              {/* Featured Image */}
              <div className="mb-10">
                <img 
                  src={post.mainImage} 
                  alt={post.title}
                  className="w-full h-auto rounded-xl shadow-sm"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Article Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <article className="prose prose-lg max-w-none">
              {post.content}
            </article>
            
            {/* Tags */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center">
                      <Tag className="h-3 w-3 mr-1" />
                      <span>{tag}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Share */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Share this article:</h3>
              <div className="flex gap-3">
                <a href="#" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-800 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-4"
          >
            {/* Author Bio */}
            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <div className="flex items-center mb-4">
                <img 
                  src={post.authorImage || `https://ui-avatars.com/api/?name=${encodeURIComponent(post.author)}&background=0D8ABC&color=fff`} 
                  alt={post.author}
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="font-bold text-lg">{post.author}</h3>
                  {post.authorRole && <p className="text-gray-600 text-sm">{post.authorRole}</p>}
                </div>
              </div>
              <p className="text-gray-700">
                Dr. Chen is responsible for HiliosAI's artificial intelligence strategy and research initiatives. With over 15 years of experience in machine learning and AI systems, he leads the development of our autonomous agent technologies.
              </p>
            </div>
            
            {/* Newsletter Signup */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
              <p className="text-gray-600 mb-4">
                Get the latest insights on AI, customer service, and technology trends delivered to your inbox.
              </p>
              <form className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-theme focus:border-transparent outline-none"
                />
                <button 
                  type="submit" 
                  className="w-full bg-theme text-white font-medium py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
            
            {/* Related Articles - Would be implemented with real data */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Related Articles</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <img 
                    src="https://hilios.ai/_next/image?url=%2Fassets%2Fimgs%2Fblog%2Fai-agents-future-of-autonomous-systems%2Fitems%2Frobots-task.png&w=1200&q=75" 
                    alt="Related article" 
                    className="w-20 h-20 object-cover rounded mr-3"
                  />
                  <div>
                    <h4 className="font-medium line-clamp-2 hover:text-theme">
                      <a href="#">The Business Case for AI-Powered Customer Support</a>
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">May 28, 2023</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <img 
                    src="https://hilios.ai/_next/image?url=%2Fassets%2Fimgs%2Fblog%2Fdetails%2Fai-agents-future-of-autonomous-systems.png&w=1200&q=75" 
                    alt="Related article" 
                    className="w-20 h-20 object-cover rounded mr-3"
                  />
                  <div>
                    <h4 className="font-medium line-clamp-2 hover:text-theme">
                      <a href="#">Balancing Automation and Human Touch in Customer Service</a>
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">April 12, 2023</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <img 
                    src="https://hilios.ai/_next/image?url=%2Fassets%2Fimgs%2Fblog%2Fai-agents-future-of-autonomous-systems%2Fitems%2Fai-office.png&w=1200&q=75" 
                    alt="Related article" 
                    className="w-20 h-20 object-cover rounded mr-3"
                  />
                  <div>
                    <h4 className="font-medium line-clamp-2 hover:text-theme">
                      <a href="#">10 Ways Natural Language Processing is Improving Support Interactions</a>
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">March 5, 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage; 