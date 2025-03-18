import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CheckCircle, Facebook, Twitter, Linkedin, Youtube, ChevronRight } from 'lucide-react';

interface FormField {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormField>({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<Partial<Record<keyof FormField, string>>>({});

  const validateForm = (): boolean => {
    const errors: Partial<Record<keyof FormField, string>> = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user types
    if (formErrors[name as keyof FormField]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  // Options for subject dropdown
  const subjectOptions = [
    { value: '', label: 'Select a subject' },
    { value: 'general', label: 'General Inquiry' },
    { value: 'sales', label: 'Sales Question' },
    { value: 'support', label: 'Technical Support' },
    { value: 'partnership', label: 'Partnership Opportunity' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <div className="bg-white relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-40 left-0 w-60 h-60 bg-blue-50 rounded-full opacity-70 blur-3xl"></div>
      <div className="absolute top-60 right-10 w-80 h-80 bg-indigo-50 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-blue-50 rounded-full opacity-60 blur-3xl"></div>
      
      <div className="container mx-auto px-6 py-20 pt-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
            Let's get in <span className="relative">
              touch
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.5C32 0.5 62 0.5 101 5.5C140 0.5 170 0.5 199 5.5" stroke="#0078FF" strokeWidth="2" strokeLinecap="round" fill="none" />
              </svg>
            </span>
          </h1>
          <p className="text-lg text-gray-600 mt-6">
            Reach out to us for unparalleled app service and top-rated customer support in the industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Left sidebar with contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-primary">HILIOSAI Corporation</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-theme" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700">Office Address</h3>
                    <p className="text-gray-600 mt-1">72 Flr., Landmark 81, Vinhomes Central Park</p>
                    <p className="text-gray-600">720A Dien Bien Phu street, HCMC, Vietnam</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-theme" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700">Email</h3>
                    <a href="mailto:hi@hilios.ai" className="text-gray-600 mt-1 hover:text-theme">hi@hilios.ai</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-theme" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700">Phone</h3>
                    <p className="text-gray-600 mt-1">+84-3-7645 5022</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Follow us on:</h3>
                <div className="flex space-x-4">
                  <a href="#" className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-blue-100 transition-colors" aria-label="Visit our Facebook page">
                    <Facebook className="h-5 w-5 text-gray-700" />
                  </a>
                  <a href="#" className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-blue-100 transition-colors" aria-label="Visit our LinkedIn page">
                    <Linkedin className="h-5 w-5 text-gray-700" />
                  </a>
                  <a href="#" className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-blue-100 transition-colors" aria-label="Visit our YouTube page">
                    <Youtube className="h-5 w-5 text-gray-700" />
                  </a>
                  <a href="#" className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-blue-100 transition-colors" aria-label="Visit our Twitter/X page">
                    <Twitter className="h-5 w-5 text-gray-700" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Opportunity Section - Mobile */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-md p-8 text-white lg:hidden">
              <h2 className="text-2xl font-bold mb-4">
                Don't miss, grab the opportunity now!
              </h2>
              <p className="mb-6">
                Unleash the power of AI Agent with Hilios. Upgrade your productivity and scale your business with HiliosAI Agent.
              </p>
              <button
                className="bg-white text-blue-600 font-medium px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center"
              >
                Contact Us
                <ChevronRight className="ml-1 w-5 h-5" />
              </button>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold mb-6 text-primary">Send us a message</h2>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg mb-6 flex items-center">
                  <CheckCircle className="h-6 w-6 mr-3 text-green-500" />
                  <div>
                    <h3 className="font-semibold text-lg">Thank you for your message!</h3>
                    <p>We've received your inquiry and will get back to you shortly.</p>
                  </div>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-theme focus:border-transparent outline-none transition-colors`}
                      placeholder="Enter your name"
                    />
                    {formErrors.name && <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-theme focus:border-transparent outline-none transition-colors`}
                      placeholder="Enter your email"
                    />
                    {formErrors.email && <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-theme focus:border-transparent outline-none transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-theme focus:border-transparent outline-none transition-colors"
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${formErrors.subject ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-theme focus:border-transparent outline-none transition-colors appearance-none bg-white`}
                  >
                    {subjectOptions.map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                  {formErrors.subject && <p className="mt-1 text-sm text-red-500">{formErrors.subject}</p>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 border ${formErrors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-theme focus:border-transparent outline-none transition-colors resize-none`}
                    placeholder="Tell us how we can help you"
                  ></textarea>
                  {formErrors.message && <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>}
                </div>
                
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex items-center justify-center bg-theme text-white font-medium py-3 px-8 rounded-lg ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-600'
                    } transition-colors`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
        
        {/* Opportunity Section - Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 hidden lg:block bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 md:p-12 relative overflow-hidden max-w-6xl mx-auto"
        >
          <div className="absolute top-0 right-0 w-60 h-60 bg-blue-400 rounded-full translate-x-1/2 -translate-y-1/2 opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500 rounded-full -translate-x-1/2 translate-y-1/2 opacity-20"></div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-white">
                Don't miss, grab the<br/>opportunity now!
              </h2>
              <p className="text-blue-100 mb-0">
                Unleash the power of AI Agent with Hilios. Upgrade your productivity and scale your business with HiliosAI Agent.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <button
                className="bg-white text-blue-600 font-medium px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center"
              >
                Contact Us
                <ChevronRight className="ml-1 w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage; 