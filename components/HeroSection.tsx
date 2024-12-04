'use client';

import { ArrowDown } from 'lucide-react';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1699323500377-a00bb326ffdb?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyOHx8cm9sbHMlMjByb3ljZXxlbnwwfHx8fDE3MzE1MjY5MjB8MA&ixlib=rb-4.0.3&auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
       
          <span className="text-emerald-400 block mt-2">Cents on Dollars</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
          You don't have to be an expert, to trade like one.
        </p>
        <Button 
          onClick={scrollToContent}
          size="lg" 
          className="bg-emerald-500 hover:bg-emerald-600 text-lg px-8"
        >
          Get Started
        </Button>
      </div>

      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <button
          onClick={scrollToContent}
          className="text-white hover:text-emerald-400 transition-colors duration-300"
          aria-label="Scroll to content"
        >
          <ArrowDown className="w-8 h-8 animate-bounce" />
        </button>
      </div>
    </div>
  );
}