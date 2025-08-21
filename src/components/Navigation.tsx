import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Menu, X } from 'lucide-react';
import logo from '@/assets/logo.svg';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsHeaderVisible(true);
      } 
      else if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        setIsHeaderVisible(false);
        setIsMenuOpen(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Feeding Program', id: 'feeding' },
    { label: 'Education', id: 'education' },
    { label: 'Donate', id: 'donate' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-out ${
      isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      {/* Main Curved Container */}
      <div className="relative">
        {/* Primary Glassmorphism Layer */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/15 via-white/10 to-white/5 backdrop-blur-2xl">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-sky-blue/3 via-transparent to-hope-orange/3"></div>
        </div>

        {/* Curved Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        
        {/* Advanced Folding Geometric Shapes */}
        <div className="absolute top-0 right-0 h-full w-40 overflow-hidden">
          {/* Primary curved shape */}
          <div className="absolute top-0 right-0 w-32 h-20 transform rotate-12 translate-x-8 -translate-y-6">
            <div className="w-full h-full bg-gradient-to-br from-primary/25 to-sky-blue/35 backdrop-blur-sm rounded-3xl border border-white/20 shadow-xl"></div>
          </div>
          
          {/* Secondary curved shape */}
          <div className="absolute top-4 right-8 w-20 h-16 transform -rotate-6">
            <div className="w-full h-full bg-gradient-to-br from-hope-orange/20 to-warm-yellow/30 backdrop-blur-sm rounded-2xl border border-white/15 shadow-lg"></div>
          </div>
          
          {/* Tertiary small curved accent */}
          <div className="absolute top-8 right-16 w-12 h-10 transform rotate-45">
            <div className="w-full h-full bg-gradient-to-br from-gentle-green/25 to-sky-blue/35 backdrop-blur-sm rounded-xl border border-white/20 shadow-md"></div>
          </div>
          
          {/* Floating curved elements */}
          <div className="absolute top-2 right-2 w-6 h-6 bg-gradient-to-br from-warm-yellow/40 to-hope-orange/30 rounded-full backdrop-blur-sm border border-white/25 shadow-lg"></div>
          <div className="absolute top-6 right-24 w-4 h-4 bg-gradient-to-br from-sky-blue/40 to-primary/30 rounded-full backdrop-blur-sm border border-white/25 shadow-md"></div>
        </div>

        {/* Curved bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 h-3 overflow-hidden">
          <svg className="w-full h-6" viewBox="0 0 1200 24" preserveAspectRatio="none">
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                <stop offset="25%" stopColor="rgba(59,130,246,0.1)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0.2)" />
                <stop offset="75%" stopColor="rgba(251,146,60,0.1)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </linearGradient>
            </defs>
            <path 
              d="M0,12 Q300,2 600,12 T1200,12 L1200,24 L0,24 Z" 
              fill="url(#waveGradient)"
              className="drop-shadow-sm"
            />
          </svg>
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Enhanced Logo */}
            <div 
              className="flex items-center gap-4 cursor-pointer group"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-sky-blue/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <img 
                  src={logo} 
                  alt="St Panteleimon Mission School Logo" 
                  className="relative h-12 w-12 object-contain drop-shadow-xl rounded-xl p-1 bg-white/10 backdrop-blur-sm border border-white/20"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-sky-blue bg-clip-text text-transparent drop-shadow-sm">
                  St Panteleimon
                </span>
                <span className="text-xs text-foreground/60 font-medium">Mission School</span>
              </div>
            </div>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative text-foreground/90 hover:text-primary transition-all duration-300 font-medium group"
                >
                  <span className="relative z-10 drop-shadow-sm">{item.label}</span>
                  <div className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 backdrop-blur-sm border border-white/20"></div>
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('donate')}
                className="bg-gradient-to-r from-hope-orange to-warm-yellow hover:from-warm-yellow hover:to-hope-orange text-white transition-all duration-300 transform hover:scale-105 drop-shadow-xl rounded-2xl px-6 py-3 border border-white/20 backdrop-blur-sm"
              >
                <Heart className="mr-2 h-4 w-4" />
                Donate Now
              </Button>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <button
              className="md:hidden p-3 text-foreground/90 hover:text-primary transition-all duration-300 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 group"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative">
                {isMenuOpen ? 
                  <X className="h-6 w-6 transform group-hover:rotate-90 transition-transform duration-300" /> : 
                  <Menu className="h-6 w-6 transform group-hover:scale-110 transition-transform duration-300" />
                }
              </div>
            </button>
          </div>

          {/* Enhanced Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-6 border-t border-white/20">
              <div className="bg-white/5 backdrop-blur-2xl rounded-3xl mx-4 p-6 border border-white/20 shadow-2xl">
                <div className="space-y-3">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full text-left px-6 py-3 text-foreground/90 hover:text-primary hover:bg-white/10 transition-all duration-300 rounded-2xl border border-transparent hover:border-white/20 backdrop-blur-sm"
                    >
                      {item.label}
                    </button>
                  ))}
                  <div className="pt-4 border-t border-white/20">
                    <Button 
                      onClick={() => scrollToSection('donate')}
                      className="w-full bg-gradient-to-r from-hope-orange to-warm-yellow hover:from-warm-yellow hover:to-hope-orange text-white transition-all duration-300 rounded-2xl py-4 border border-white/20 backdrop-blur-sm shadow-xl"
                    >
                      <Heart className="mr-2 h-4 w-4" />
                      Donate Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;