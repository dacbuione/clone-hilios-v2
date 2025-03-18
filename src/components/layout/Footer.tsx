import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, ArrowUp, Facebook, Linkedin, Youtube, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Logo and Company Info */}
          <div className="space-y-6">
            <div className="mb-6">
              {/* Logo "hi" with speech bubble */}
              <div className="flex items-start">
                <span className="text-4xl font-bold">hi</span>
                <div className="ml-1 mt-1 relative">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <div className="w-3 h-3 bg-white rounded-full ml-1"></div>
                  <div className="w-3 h-3 bg-white rounded-full ml-1"></div>
                </div>
              </div>
            </div>
            
            <p className="text-gray-300 max-w-xs">
              HiliosAI transforms businesses with human-quality AI agents
              that automate operations, enhance customer experiences,
              and deliver actionable insights.
            </p>
            
            <div className="space-y-4 pt-2">
              <a href="mailto:hi@hilios.ai" className="flex items-center gap-3 text-gray-300 hover:text-white">
                <Mail size={18} className="flex-shrink-0" />
                <span>hi@hilios.ai</span>
              </a>
              
              <a href="tel:+84037645022" className="flex items-center gap-3 text-gray-300 hover:text-white">
                <Phone size={18} className="flex-shrink-0" />
                <span>(+84) 03 7645 5022</span>
              </a>
              
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span>72nd Floor, Landmark 81, Vinhomes Central Park, 720A Dien Bien Phu Street, Ward 22, Binh Thanh District, Ho Chi Minh City, Vietnam</span>
              </div>
            </div>
          </div>
          
          {/* Column 2: Company Links */}
          <div className="mt-8 md:mt-0">
            <h3 className="text-xl font-medium mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contact Sales</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Terms of Use</a></li>
            </ul>
          </div>
          
          {/* Column 3: Solutions */}
          <div className="mt-8 md:mt-0">
            <h3 className="text-xl font-medium mb-6">Solutions</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white">Integration</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
            </ul>
          </div>
          
          {/* Column 4: Social Media */}
          <div className="mt-8 lg:mt-0">
            <h3 className="text-xl font-medium mb-6">Follow us on:</h3>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-md hover:bg-gray-700">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-md hover:bg-gray-700">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-md hover:bg-gray-700">
                <Youtube size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-md hover:bg-gray-700">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-gray-400">
          <p>© Alrights reserved by HiliosAI</p>
        </div>
      </div>
      
      {/* Scroll to top button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center shadow-lg hover:bg-gray-200 transition-all"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  );
};

export default Footer; 