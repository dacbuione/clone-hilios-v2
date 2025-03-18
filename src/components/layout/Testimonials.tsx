import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "HiliosAI-Agents have helped us significantly optimize our customer support process. Response time has been shortened by 70%, and the conversion rate has also grown impressively.",
    name: "Minh Quang",
    role: "Technical Support at NHK",
    avatar: "/assets/imgs/testimonial/profile/minh-quang.svg"
  },
  {
    id: 2,
    text: "HiliosAI-Agents is a comprehensive solution for SOM - AIT's admissions process. We are particularly impressed with its multi-channel integration capabilities, multilingual support, and process automation. Thanks to Hilios, we have increased our conversion rate by 25% and improved the satisfaction of both applicants and admissions staff.",
    name: "Dao Thanh Yen",
    role: "Coordinator at SOM - AIT",
    avatar: "/assets/imgs/testimonial/profile/yen-dao.svg"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-[#f6f9fa] py-20 md:py-24">
      <div className="container max-w-4xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-primary mb-16"
        >
          What Clients Say<br />
          about HiliosAI
        </motion.h2>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex"
              style={{ transform: `translate3d(${-activeIndex * 100}%, 0, 0)`, transition: 'transform 0.5s ease-in-out' }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-0 shrink-0 grow-0 basis-full">
                  <div className="flex flex-col items-center">
                    {/* Quote symbol */}
                    <div className="mb-8">
                      <svg width="58" height="48" viewBox="0 0 58 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48V27.84C0 21.76 1.12 16.48 3.36 12C5.6 7.52 9.28 3.84 14.4 0.96L21.6 9.12C18.56 10.88 16.16 13.12 14.4 15.84C12.64 18.56 11.76 21.6 11.76 24.96V48H0ZM32.4 48V27.84C32.4 21.76 33.52 16.48 35.76 12C38 7.52 41.68 3.84 46.8 0.96L54 9.12C50.96 10.88 48.56 13.12 46.8 15.84C45.04 18.56 44.16 21.6 44.16 24.96V48H32.4Z" fill="#0078FF" fillOpacity="0.1"/>
                      </svg>
                    </div>
                    
                    {/* Testimonial text */}
                    <p className="text-lg md:text-xl text-center text-primary mb-16 max-w-2xl">
                      {testimonial.text}
                    </p>
                    
                    {/* Profile image */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                        <img 
                          alt={`${testimonial.name}'s profile`} 
                          src={testimonial.avatar}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = 'https://via.placeholder.com/64?text=Profile';
                          }}
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-primary">{testimonial.name}</h3>
                      <span className="text-sm text-secondary">{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation arrows */}
          <div className="flex justify-center gap-6 mt-10">
            <button 
              onClick={goToPrev}
              className="inline-flex items-center justify-center w-8 h-8 text-primary hover:text-theme focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={goToNext}
              className="inline-flex items-center justify-center w-8 h-8 text-primary hover:text-theme focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 