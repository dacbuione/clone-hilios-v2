import { motion } from 'framer-motion';
import {
  MessageSquareShareIcon,
  DollarSignIcon,
  BotIcon,
  LineChartIcon,
  BrainIcon,
  Settings2Icon,
} from 'lucide-react';

const features = [
  {
    id: 1,
    title: 'Omni-channel',
    description: 'First-rate customer experience & loyalty through consistent responses, simplifying search and access.',
    icon: MessageSquareShareIcon
  },
  {
    id: 2,
    title: 'Reduced Costs',
    description: 'Reduce operational costs and uncover new opportunities through intelligent process optimization and automation.',
    icon: DollarSignIcon
  },
  {
    id: 3,
    title: 'Automation',
    description: 'Customizable intelligent automation and task prioritization, allowing your team to focus on more strategic initiatives.',
    icon: BotIcon
  },
  {
    id: 4,
    title: 'Actionable Insights',
    description: 'Easily interpret aggregated data to make quick data-driven decisions, optimize vendors relationships & terms.',
    icon: LineChartIcon
  },
  {
    id: 5,
    title: 'Pro-active Learning',
    description: 'Self-learning AI that adapts to your business tone, improves responses, and handles complex conversations.',
    icon: BrainIcon
  },
  {
    id: 6,
    title: 'Operation',
    description: 'Streamline your operations processes, ensuring these agents adapt to changing business needs and deliver continuous value.',
    icon: Settings2Icon
  }
];

export default function EnterpriseFeatures() {
  return (
    <section className="mx-auto sec_space4 bg-gradient-to-b from-[#FAFAFA] to-white">
      <div className="container">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sec_title1 mx-auto has_fade_anim max-w-[695px]"
          >
            Enterprise AI Agent for Modern Digital Change
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-[23px] lg:mt-[33px] mx-auto has_fade_anim max-w-[695px]"
          >
            We deliver next-generation AI solutions that create impactful digital experiences and transform customer service operations.
          </motion.p>
        </div>

        <div className="mt-[20px] md:mt-[40px] lg:mt-[70px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px] lg:gap-[30px] mx-[20px] xl:mx-[70px] justify-center">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index % 3 * 0.1 }}
              className="has_fade_anim"
              data-delay={index % 3 === 0 ? "0" : index % 3 === 1 ? "0.25" : "0.35"}
            >
              <div className="group rounded-theme bg-white p-[15px] md:p-7 flex flex-col border h-full transition duration-300 ease-in-out hover:bg-theme-100">
                <div className="mb-8">
                  <div className="w-[44px] h-[44px] rounded-[10px] bg-main flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="mb-4 text-[24px]">{feature.title}</h3>
                <p className="group-hover:text-primary">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 