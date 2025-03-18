import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, ChevronDown, SearchIcon, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Integration {
  id: number;
  name: string;
  description: string;
  icon: string;
  category: 'messaging' | 'crm' | 'analytics' | 'productivity';
  popular?: boolean;
}

interface FAQ {
  question: string;
  answer: string;
}

const integrations: Integration[] = [
  // Messaging Platforms
  {
    id: 1,
    name: 'WhatsApp',
    description: "Integrate HiliosAI with WhatsApp to provide seamless customer support on the world's most popular messaging platform.",
    icon: '/assets/imgs/integrations/whatsapp.svg',
    category: 'messaging',
    popular: true
  },
  {
    id: 2,
    name: 'Facebook Messenger',
    description: 'Connect your Facebook business page with HiliosAI to automate customer interactions and provide 24/7 support.',
    icon: '/assets/imgs/integrations/messenger.svg',
    category: 'messaging',
    popular: true
  },
  {
    id: 3,
    name: 'Telegram',
    description: 'Extend your customer support to Telegram users with our seamless integration and AI-powered responses.',
    icon: '/assets/imgs/integrations/telegram.svg',
    category: 'messaging'
  },
  {
    id: 4,
    name: 'WeChat',
    description: 'Reach customers in China and beyond by integrating HiliosAI with WeChat for intelligent customer service.',
    icon: '/assets/imgs/integrations/wechat.svg',
    category: 'messaging'
  },
  
  // CRM Systems
  {
    id: 5,
    name: 'Salesforce',
    description: 'Connect HiliosAI with Salesforce to enhance customer data management and provide personalized support.',
    icon: '/assets/imgs/integrations/salesforce.svg',
    category: 'crm',
    popular: true
  },
  {
    id: 6,
    name: 'HubSpot',
    description: 'Integrate with HubSpot to streamline lead generation and customer service workflows in one unified platform.',
    icon: '/assets/imgs/integrations/hubspot.svg',
    category: 'crm',
    popular: true
  },
  {
    id: 7,
    name: 'Zoho CRM',
    description: "Combine HiliosAI's capabilities with Zoho CRM to enhance customer relationship management and support.",
    icon: '/assets/imgs/integrations/zoho.svg',
    category: 'crm'
  },
  
  // Analytics Platforms
  {
    id: 8,
    name: 'Google Analytics',
    description: 'Track user interactions and gain valuable insights by connecting HiliosAI with Google Analytics.',
    icon: '/assets/imgs/integrations/google-analytics.svg',
    category: 'analytics',
    popular: true
  },
  {
    id: 9,
    name: 'Mixpanel',
    description: 'Leverage advanced user behavior analytics by integrating HiliosAI with Mixpanel.',
    icon: '/assets/imgs/integrations/mixpanel.svg',
    category: 'analytics'
  },
  
  // Productivity Tools
  {
    id: 10,
    name: 'Slack',
    description: 'Connect HiliosAI with Slack to streamline internal communications and customer support workflows.',
    icon: '/assets/imgs/integrations/slack.svg',
    category: 'productivity',
    popular: true
  },
  {
    id: 11,
    name: 'Microsoft Teams',
    description: 'Integrate with Microsoft Teams to enhance collaboration and customer service in your organization.',
    icon: '/assets/imgs/integrations/ms-teams.svg',
    category: 'productivity'
  },
  {
    id: 12,
    name: 'Zapier',
    description: 'Connect HiliosAI with thousands of apps through Zapier to automate workflows and improve productivity.',
    icon: '/assets/imgs/integrations/zapier.svg',
    category: 'productivity',
    popular: true
  }
];

const faqs: FAQ[] = [
  {
    question: "How do I set up an integration with HiliosAI?",
    answer: "Setting up integrations is a straightforward process. Navigate to your HiliosAI dashboard, select 'Integrations' from the menu, choose the platform you want to integrate with, and follow the step-by-step instructions. Most integrations take less than 5 minutes to complete."
  },
  {
    question: "Are there any additional costs for integrations?",
    answer: "Basic integrations are included in all HiliosAI plans at no extra cost. Some premium integrations with advanced features may require a higher-tier subscription. Check our pricing page or contact our sales team for specific information about integration costs."
  },
  {
    question: "Can I integrate HiliosAI with my custom software?",
    answer: "Yes! HiliosAI offers a robust API that allows for custom integrations with your proprietary software. Our developer documentation provides comprehensive guides and examples to help you build custom integrations. For enterprise clients, we also offer custom integration development services."
  },
  {
    question: "How secure are these integrations?",
    answer: "Security is our top priority. All integrations use industry-standard security protocols including OAuth 2.0, TLS encryption, and regular security audits. Your data is always encrypted in transit and at rest. We comply with GDPR, CCPA, and other relevant data protection regulations."
  },
  {
    question: "What if I need help with an integration?",
    answer: "Our support team is available 24/7 to assist with integration issues. You can access integration-specific documentation, video tutorials, and troubleshooting guides in our help center. For enterprise customers, we offer dedicated integration support."
  }
];

const IntegrationPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  
  const filteredIntegrations = integrations
    .filter(integration => 
      activeCategory === 'all' || integration.category === activeCategory
    )
    .filter(integration => 
      integration.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      integration.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  // Get popular integrations
  const popularIntegrations = integrations.filter(integration => integration.popular);

  return (
    <div className="bg-white relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-40 left-0 w-60 h-60 bg-blue-50 rounded-full opacity-70 blur-3xl"></div>
      <div className="absolute top-60 right-10 w-80 h-80 bg-indigo-50 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-blue-50 rounded-full opacity-60 blur-3xl"></div>
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#f6f9ff] to-white pt-32 pb-16 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Powerful <span className="relative">
                Integrations
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.5C32 0.5 62 0.5 101 5.5C140 0.5 170 0.5 199 5.5" stroke="#0078FF" strokeWidth="2" strokeLinecap="round" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="text-lg text-secondary mb-8">
              Connect HiliosAI with your favorite tools and platforms to create seamless workflows
              and enhance customer experiences across all touchpoints.
            </p>
            
            {/* Search bar */}
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search integrations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-theme focus:border-transparent"
              />
              <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </motion.div>
          
          {/* Popular integrations preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-xl font-semibold text-center mb-6">Popular Integrations</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {popularIntegrations.slice(0, 6).map((integration) => (
                <div key={integration.id} className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mb-2 overflow-hidden">
                    <img
                      src={integration.icon}
                      alt={`${integration.name} logo`}
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(integration.name)}&background=0078FF&color=fff&size=128`;
                      }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{integration.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105 ${
              activeCategory === 'all' 
                ? 'bg-theme text-white shadow-md' 
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveCategory('messaging')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105 ${
              activeCategory === 'messaging' 
                ? 'bg-theme text-white shadow-md' 
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            Messaging
          </button>
          <button
            onClick={() => setActiveCategory('crm')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105 ${
              activeCategory === 'crm' 
                ? 'bg-theme text-white shadow-md' 
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            CRM
          </button>
          <button
            onClick={() => setActiveCategory('analytics')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105 ${
              activeCategory === 'analytics' 
                ? 'bg-theme text-white shadow-md' 
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            Analytics
          </button>
          <button
            onClick={() => setActiveCategory('productivity')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105 ${
              activeCategory === 'productivity' 
                ? 'bg-theme text-white shadow-md' 
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            Productivity
          </button>
        </div>

        {/* Integrations grid */}
        {filteredIntegrations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredIntegrations.map((integration) => (
              <motion.div
                key={integration.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all hover:translate-y-[-5px] group border border-gray-100"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 mr-4 flex-shrink-0 bg-blue-50 rounded-lg flex items-center justify-center overflow-hidden group-hover:bg-blue-100 transition-colors">
                      <img
                        src={integration.icon}
                        alt={`${integration.name} logo`}
                        className="w-8 h-8 object-contain"
                        onError={(e) => {
                          e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(integration.name)}&background=0078FF&color=fff&size=128`;
                        }}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-primary">{integration.name}</h3>
                    {integration.popular && (
                      <span className="ml-3 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Popular</span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-4">{integration.description}</p>
                  <div className="mt-6 flex justify-between items-center">
                    <div>
                      <span className="text-xs uppercase font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {integration.category}
                      </span>
                    </div>
                    <a 
                      href="#" 
                      className="text-theme font-medium flex items-center group-hover:underline"
                    >
                      Learn more
                      <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-600 mb-4">No integrations found</h3>
            <p className="text-gray-500">Try a different search term or category</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('all');
              }}
              className="mt-4 px-6 py-2 bg-theme text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Benefits section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-24 bg-[#f6f9ff] rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Benefits of HiliosAI Integrations</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Streamline your workflows and enhance productivity by connecting HiliosAI with your favorite tools.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <Check className="text-theme" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">Seamless Connectivity</h3>
              <p className="text-gray-600">
                Connect HiliosAI with your existing tools in just a few clicks. No coding required.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <Check className="text-theme" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">Automated Workflows</h3>
              <p className="text-gray-600">
                Save time by automating repetitive tasks across multiple platforms.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <Check className="text-theme" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">Enhanced Analytics</h3>
              <p className="text-gray-600">
                Gain comprehensive insights by combining data from multiple sources.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <Check className="text-theme" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">Better Customer Experience</h3>
              <p className="text-gray-600">
                Provide consistent, personalized service across all customer touchpoints.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <Check className="text-theme" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">Increased Productivity</h3>
              <p className="text-gray-600">
                Focus on what matters by letting HiliosAI handle routine tasks.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <Check className="text-theme" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">Scalable Solutions</h3>
              <p className="text-gray-600">
                Easily add or remove integrations as your business needs evolve.
              </p>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about HiliosAI integrations.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                >
                  <span className="font-medium text-lg text-primary">{faq.question}</span>
                  <ChevronDown 
                    className={`text-gray-400 transition-transform ${openFaqIndex === index ? 'transform rotate-180' : ''}`}
                    size={20}
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaqIndex === index ? 'max-h-96 py-4 px-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Additional integration request */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-60 h-60 bg-blue-100 rounded-full translate-x-1/2 -translate-y-1/2 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-100 rounded-full -translate-x-1/2 translate-y-1/2 opacity-50"></div>
          
          <div className="text-center relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-primary">
              Don't see the integration you need?
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              We're constantly adding new integrations. Let us know what you need, and our team will work on it.
            </p>
            <Link
              to="/contact"
              className="bg-theme text-white font-medium px-8 py-3 rounded-lg inline-flex items-center hover:bg-blue-600 transition-colors group"
            >
              Request an Integration
              <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default IntegrationPage; 