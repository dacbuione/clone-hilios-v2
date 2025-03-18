import React from 'react';
import Hero from '../components/layout/Hero';
import Features from '../components/layout/Features';
import WhyChoose from '../components/layout/WhyChoose';
import Testimonials from '../components/layout/Testimonials';
import FAQ from '../components/layout/FAQ';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <WhyChoose />
      <Testimonials />
      <FAQ />
    </>
  );
};

export default HomePage; 