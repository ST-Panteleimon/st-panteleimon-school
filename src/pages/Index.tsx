import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import FeedingProgram from '@/components/FeedingProgram';
import EducationProgram from '@/components/EducationProgram';
import Donate from '@/components/Donate';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <FeedingProgram />
        <EducationProgram />
        <Donate />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
