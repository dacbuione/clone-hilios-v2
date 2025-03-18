import { motion } from 'framer-motion';
import { Layers, BarChart2, GitBranch } from 'lucide-react';

// Image paths
const multichannel = '/assets/imgs/features/multichannel.svg';
const botResponse = '/assets/imgs/features/bot-response.svg';

export default function WhyChoose() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        {/* First section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Images */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative mb-8">
              <img
                src={multichannel}
                alt="Multi-channel support"
                className="rounded-lg shadow-lg w-full max-w-md mx-auto"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/400x250?text=Multi-channel+Support';
                }}
              />
            </div>
            <div className="relative ml-auto max-w-md">
              <img
                src={botResponse}
                alt="AI bot response"
                className="rounded-lg shadow-lg w-full"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/400x250?text=Bot+Response';
                }}
              />
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Look, Here's Why<br />
              Great Companies<br />
              Choose <span className="gradient-title">HiliosAI</span>
            </h2>

            <p className="text-lg text-secondary mb-10">
              Join forward-thinking companies achieving remarkable results
              with our AI solutions
            </p>

            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex items-start gap-5">
                <div className="p-3 rounded-lg bg-blue-100 text-theme flex-shrink-0">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Omni-channel Support</h3>
                  <p className="text-secondary">
                    We support all your channels, so you can focus on what
                    really matters.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-5">
                <div className="p-3 rounded-lg bg-blue-100 text-theme flex-shrink-0">
                  <BarChart2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Data Insights</h3>
                  <p className="text-secondary">
                    Know what your customers wants from your services.
                    With the right strategy.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-5">
                <div className="p-3 rounded-lg bg-blue-100 text-theme flex-shrink-0">
                  <GitBranch className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Workflows Automation</h3>
                  <p className="text-secondary">
                    Intelligent task prioritization and automated processes
                    to save time and reduce cost.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Second section - "But Wait, There's More..." */}
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              But Wait, There's<br />
              More... Let Me Tell<br />
              You
            </h2>

            <p className="text-lg text-secondary mb-8">
              Manage all your social channels, ensure customer supremacy
              engagement, track your performance and more—all from a single
              platform
            </p>

            <div className="space-y-6">
              {/* List item 1 */}
              <div className="flex gap-3">
                <div className="flex-shrink-0 text-theme">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Predictive insights</p>
                  <p className="text-secondary text-sm">Leverage intelligent, powerful predictions to stay ahead of the curve.</p>
                </div>
              </div>

              {/* List item 2 */}
              <div className="flex gap-3">
                <div className="flex-shrink-0 text-theme">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Multi-integration support</p>
                  <p className="text-secondary text-sm">Connect wherever your customers are—we're there with you.</p>
                </div>
              </div>

              {/* List item 3 */}
              <div className="flex gap-3">
                <div className="flex-shrink-0 text-theme">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Customer behavior tracking</p>
                  <p className="text-secondary text-sm">Understand your customers' needs before they even express them.</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a href="#contact" className="bg-theme text-white font-medium px-6 py-3 rounded-lg inline-block hover:bg-blue-600 transition-colors">
                SCHEDULE A DEMO
              </a>
            </div>
          </motion.div>

          {/* Right side - Chat examples */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="/assets/imgs/features/chat-messages.svg"
              alt="Chat examples across different platforms"
              className="w-full rounded-lg shadow-lg max-w-lg mx-auto"
              onError={(e) => {
                e.currentTarget.src = 'https://via.placeholder.com/500x450?text=Chat+Messages';
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
} 