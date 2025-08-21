import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, BookOpen, Users } from 'lucide-react';
import heroImage from '@/assets/hero-education.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="St Panteleimon Mission School students learning together"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              St Panteleimon
              <span className="block bg-gradient-warm bg-clip-text text-transparent">
                Mission School
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-medium opacity-90">
              Feeding Hearts, Nurturing Minds, Building Futures
            </p>
          </div>

          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed opacity-80">
            Supporting over 230 orphans and vulnerable children with education, 
            nutritious meals, and hope for a brighter tomorrow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={() => scrollToSection('donate')}
              className="bg-gradient-warm hover:shadow-warm transition-all duration-300 transform hover:scale-105 px-8 py-6 text-lg font-semibold"
            >
              <Heart className="mr-2 h-5 w-5" />
              Support Our Mission
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('about')}
              className="bg-gradient-warm hover:shadow-warm transition-all duration-300 transform hover:scale-105 px-8 py-6 text-lg font-semibold"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-primary-foreground/20">
            <div className="text-center">
              <Users className="h-8 w-8 mx-auto mb-2 text-hope-orange" />
              <div className="text-3xl font-bold text-primary-foreground">230+</div>
              <div className="text-primary-foreground/80">Children Supported</div>
            </div>
            <div className="text-center">
              <BookOpen className="h-8 w-8 mx-auto mb-2 text-warm-yellow" />
              <div className="text-3xl font-bold text-primary-foreground">Daily</div>
              <div className="text-primary-foreground/80">Education Programs</div>
            </div>
            <div className="text-center">
              <Heart className="h-8 w-8 mx-auto mb-2 text-warm-red" />
              <div className="text-3xl font-bold text-primary-foreground">231</div>
              <div className="text-primary-foreground/80">Daily Meals Provided</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;