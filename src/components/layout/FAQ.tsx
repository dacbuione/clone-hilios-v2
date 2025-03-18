import { useState } from 'react';
import { motion } from 'framer-motion';
import { CirclePlusIcon } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: "What is HiliosAI?",
    answer: "HiliosAI is an AI-powered customer service platform that helps businesses automate workflows, provide real-time customer service, offer agent coaching, and deliver business insights."
  },
  {
    id: 2,
    question: "How does HiliosAI improve customer service?",
    answer: "HiliosAI improves customer service through AI-powered automation, unified inbox management, self-learning knowledge base, and real-time analytics to monitor performance."
  },
  {
    id: 3,
    question: "Can HiliosAI handle complex customer inquiries?",
    answer: "Yes, HiliosAI is designed to handle complex customer inquiries with its advanced natural language processing capabilities and continuous learning algorithms."
  },
  {
    id: 4,
    question: "How secure is HiliosAI?",
    answer: "HiliosAI maintains the highest security standards with end-to-end encryption, secure data handling, and compliance with industry regulations."
  },
  {
    id: 5,
    question: "What kind of support do you provide?",
    answer: "We provide comprehensive support including implementation assistance, training, 24/7 technical support, and regular updates and improvements."
  },
  {
    id: 6,
    question: "How does pricing work?",
    answer: "Our pricing is flexible and based on your specific needs. Contact our sales team for a customized quote based on your requirements."
  }
];

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpanded = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="sec_space_bottom4 pt-[51px] md:pt-[81px] xl:pt-[111px] 2xl:pt-[181px]">
      <div className="container">
        <div className="relative flex flex-col items-center">
          <div className="max-w-full md:max-w-[80%] lg:max-w-[740px] mx-auto text-center mb-10">
            <div className="text-center has_fade_anim">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="sec_title1 max-w-[565px] mx-auto has_fade_anim"
              >
                Frequently Asked Questions
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-[23px] lg:mt-[33px] max-w-[550px] mx-auto has_fade_anim"
              >
                Everything you need to know about HiliosAI and how it can transform your customer service
              </motion.p>
            </div>
          </div>

          <div className="w-full max-w-[740px] mx-auto">
            {faqs.map((faq, index) => (
              <motion.div 
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col gap-2 mb-4 has_fade_anim"
              >
                <div 
                  onClick={() => toggleExpanded(faq.id)}
                  className="flex items-center justify-start gap-3 group transition-all duration-200 select-none cursor-pointer"
                >
                  <span className="p-5 py-2.5 bg-[rgb(234,236,240)] text-black max-w-full w-fit text-lg font-medium rounded-full group-hover:bg-[rgb(229,241,255)] group-hover:text-[rgb(0,120,255)]">
                    {faq.question}
                  </span>
                  <CirclePlusIcon className="w-6 h-6 stroke-[rgb(208,213,221)] group-hover:[&>circle]:stroke-[rgb(0,122,255)] group-hover:[&>path]:stroke-white group-hover:fill-[rgb(0,122,255)]" />
                </div>
                {expandedId === faq.id && (
                  <div className="pl-4 pr-10 py-2 text-gray-700">
                    {faq.answer}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 