import { useState, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { PlayIcon } from '@heroicons/react/24/solid';
import {
  InboxIcon,
  BookOpenIcon,
  PuzzlePieceIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

// Lazy load the video modal
const VideoModal = lazy(() => import('../ui/VideoModal'));

const tabItems = [
  {
    id: 'unified-inbox',
    title: 'Unified Inbox',
    description: 'Manage all customer messages in one AI-powered inbox for streamlined communication.',
    image: '/assets/imgs/hilios/hero/unified-inbox.svg',
    icon: InboxIcon
  },
  {
    id: 'knowledge-base',
    title: 'Knowledge Base',
    description: 'AI-powered knowledge base that learns from your content to provide accurate answers and identify gaps.',
    image: '/assets/imgs/hilios/hero/knowledge-base.svg',
    icon: BookOpenIcon
  },
  {
    id: 'integrate-plugins',
    title: 'Integrate Plugins',
    description: 'Powerful apps and integrations to acquire, engage and retain more customers.',
    image: '/assets/imgs/hilios/hero/integrate-plugins.svg',
    icon: PuzzlePieceIcon
  },
  {
    id: 'business-insight',
    title: 'Business Insight',
    description: 'Get real-time analytics and AI insights to track customer satisfaction and agent performance.',
    image: '/assets/imgs/hilios/hero/business-insight.svg',
    icon: ChartBarIcon
  }
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState('unified-inbox');
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="bg-white border-0 relative h-auto md:h-auto mt-[90px] md:mt-[120px] pt-0 lg:pt-10 overflow-hidden has_fade_anim">
      <div className="container">
        <div className="py-[40px] md:py-[50px] lg:py-[70px] 2xl:py-[90px] relative z-[1]">
          {/* Hero Text Content */}
          <div className="select-none relative text-center max-w-[500px] lg:max-w-[660px] xl:max-w-[820px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="has_fade_anim"
            >
              <span className="text-[12px] font-bold leading-none uppercase text-theme bg-white border border-gray-300 rounded-[30px] px-[26px] py-[10px] inline-flex gap-[3px]">
                AI-FIRST CUSTOMER SERVICE
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="tracking-tighter mt-[27px] text-[40px] md:text-[50px] text-primary lg:text-[70px] xl:text-[80px] 2xl:text-[90px] font-bold leading-none has_fade_anim"
              data-delay="0.30"
            >
              The Best AI Agents by <span className="gradient-title">HiliosAI</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="mt-[46px] text-[18px] xl:text-[22px] max-w-[660px] xl:max-w-[700px] mx-auto text-primary leading-[1.36] has_fade_anim"
              data-delay="0.45"
            >
              Our AI-Agent quickly automate workflows, offers real-time customer service, tailored playbooks for agent coaching, and business insight.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex justify-center flex-wrap gap-[20px] mt-[43px] has_fade_anim"
              data-delay="0.60"
            >
              <a
                href="https://cal.com/hillios-marketing-team-oyploi/30min-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 group text-[16px] font-bold leading-none text-btn-text-main hover:text-btn-text-hover capitalize transition-all duration-300 bg-btn-bg-main hover:bg-btn-bg-hover rounded-[15px] overflow-hidden z-[1] gap-[30px] h-[50px] md:h-[60px] px-[25px] lg:px-[30px] py-[16px] lg:py-[21px]"
              >
                <span data-text="Schedule a demo">Schedule A Demo</span>
              </a>
              
              <div 
                className="flex items-center gap-[10px] group cursor-pointer"
                role="button"
                tabIndex={0}
                onClick={() => setShowVideo(true)}
              >
                <div className="w-[50px] md:w-[56px] h-[50px] md:h-[56px] transition-colors duration-150 flex justify-center items-center border md:border-[1.5px] border-primary group-hover:border-theme rounded-full text-primary group-hover:text-theme">
                  <PlayIcon className="h-6 w-6" />
                </div>
                <p className="text-[16px] font-bold text-primary transition-colors duration-150 group-hover:text-theme">
                  Watch Promo Video
                </p>
              </div>
            </motion.div>
          </div>

          {/* Desktop Tabs Interface */}
          <div className="mt-16 relative has_fade_anim hidden md:block">
            <div className="mt-2">
              <div className="relative mt-4">
                <div className="h-full has_fade_anim">
                  <div className="w-full flex justify-center items-center h-[600px] lg:h-[700px]">
                    <img 
                      src={tabItems.find(tab => tab.id === activeTab)?.image} 
                      alt={`${tabItems.find(tab => tab.id === activeTab)?.title} image`}
                      className="object-contain object-center"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="inline-flex h-10 justify-center rounded-md bg-muted p-1 text-muted-foreground w-full mx-auto md:grid md:grid-flow-col md:auto-cols-fr md:gap-x-4 container items-baseline">
              {tabItems.map((tab) => (
                <div key={tab.id} className="relative">
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all disabled:pointer-events-none disabled:opacity-50 group-theme group select-none md:select-auto shadow-none mt-0 block focus-visible:ring-0 focus-visible:outline-none p-0 rounded-none relative flex flex-row md:flex-col w-full
                      ${activeTab === tab.id ? 'text-primary' : ''}`}
                  >
                    <div className={`absolute top-0 h-0.5 w-full bg-white ${activeTab === tab.id ? 'bg-blue-200/80' : ''} transition-colors`}></div>
                    <div className="flex flex-col flex-1 pl-0 p-4">
                      <span className={`relative z-[1] block text-left leading-tight font-bold tracking-tight mb-1 ${activeTab === tab.id ? 'text-primary' : ''} hover:text-primary`}>
                        {tab.title}
                      </span>
                      <p className={`text-pretty text-left leading-tight tracking-tight text-secondary hover:text-primary ${activeTab === tab.id ? 'text-primary' : ''}`}>
                        {tab.description}
                      </p>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Accordion */}
          <div className="mt-16 relative has_fade_anim md:hidden">
            {tabItems.map((tab) => (
              <div
                key={tab.id}
                className={`border-t-[2px] border-white ${activeTab === tab.id ? 'border-blue-200/80' : ''} transition-colors`}
              >
                <button
                  className="flex-1 items-center justify-between font-medium transition-all hover:underline flex gap-4 py-4 w-full text-left"
                  onClick={() => setActiveTab(tab.id)}
                >
                  <div className="text-primary">
                    <tab.icon className="w-8 h-8" />
                  </div>
                  <div className="flex flex-col items-start gap-1">
                    <span className="font-bold text-left">{tab.title}</span>
                    <p className="text-sm text-slate-600 font-normal text-left">{tab.description}</p>
                  </div>
                </button>
                
                {activeTab === tab.id && (
                  <div className="overflow-hidden text-sm">
                    <div className="pt-0 pb-4">
                      <div className="w-full aspect-[16/9] min-h-[200px] relative">
                        <img 
                          src={tab.image} 
                          alt={tab.title}
                          className="object-contain object-center h-full w-full"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal with Suspense */}
      {showVideo && (
        <Suspense fallback={<div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">Loading...</div>}>
          <VideoModal onClose={() => setShowVideo(false)} />
        </Suspense>
      )}
    </section>
  );
} 