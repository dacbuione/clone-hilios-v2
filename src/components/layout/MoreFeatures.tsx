import { motion } from 'framer-motion';

export default function MoreFeatures() {
  return (
    <section className="sec_space4">
      <div className="container">
        <div className="relative flex flex-col lg:flex-row justify-between items-center gap-x-[80px] gap-y-[40px]">
          <div className="hidden xl:block absolute w-[14%] top-[60%] -start-[24%]"></div>
          
          {/* Content */}
          <div className="max-w-[500px] xl:max-w-[550px]">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="sec_title1 has_fade_anim"
            >
              But Wait, There's More... Let Me Tell You
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-[33px] has_fade_anim"
            >
              Manage all your social channels, ensure customer supremacy engagement, track your performance and more—all from a single platform
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-[27px] flex flex-col gap-[15px] has_fade_anim"
            >
              <div className="flex items-start gap-[10px]">
                <span className="min-w-3 mt-1">
                  <img alt="icon image" src="/assets/imgs/icon/check.png" width="12" height="13" />
                </span>
                <p className="[&>span]:text-primary [&>span]:font-medium">
                  <span>Predictive insights</span> - Leverage intelligent, powerful predictions to stay ahead of the curve.
                </p>
              </div>
              <div className="flex items-start gap-[10px]">
                <span className="min-w-3 mt-1">
                  <img alt="icon image" src="/assets/imgs/icon/check.png" width="12" height="13" />
                </span>
                <p className="[&>span]:text-primary [&>span]:font-medium">
                  <span>Multi-integration support</span> - Connect wherever your customers are—we're there with you.
                </p>
              </div>
              <div className="flex items-start gap-[10px]">
                <span className="min-w-3 mt-1">
                  <img alt="icon image" src="/assets/imgs/icon/check.png" width="12" height="13" />
                </span>
                <p className="[&>span]:text-primary [&>span]:font-medium">
                  <span>Customer behavior tracking</span> - Understand your customers' needs before they even express them.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-[43px] has_fade_anim"
            >
              <a
                className="inline-flex items-center justify-center whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 group text-[16px] font-bold leading-none text-btn-text-main hover:text-btn-text-hover capitalize transition-all duration-300 bg-btn-bg-main hover:bg-btn-bg-hover rounded-[15px] overflow-hidden z-[1] gap-[30px] h-[50px] md:h-[60px] px-[25px] lg:px-[30px] py-[16px] lg:py-[21px]"
                target="_blank"
                rel="noopener noreferrer"
                href="https://cal.com/hillios-marketing-team-oyploi/30min-demo"
              >
                <span data-text="Schedule a Demo">Schedule a Demo</span>
              </a>
            </motion.div>
          </div>
          
          {/* Image */}
          <div className="relative inline-block p-0 z-[1]">
            <div>
              <img
                alt="about image"
                src="/assets/imgs/hilios/feature/conversation.png"
                width="550"
                height="530"
                className="h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 