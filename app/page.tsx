'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Slide1 from '@/components/slides/slide-1';
import Slide2 from '@/components/slides/slide-2';
import Slide3 from '@/components/slides/slide-3';
import Slide4 from '@/components/slides/slide-4';
import Slide5 from '@/components/slides/slide-5';
import Slide6 from '@/components/slides/slide-6';
import Slide7 from '@/components/slides/slide-7';
import Slide8 from '@/components/slides/slide-8';
import Slide9 from '@/components/slides/slide-9';
import Slide10 from '@/components/slides/slide-10';
import Slide11 from '@/components/slides/slide-11';
import Slide12 from '@/components/slides/slide-12';

const slides = [
  Slide1, Slide2, Slide3, Slide4, Slide5, Slide6,
  Slide7, Slide8, Slide9, Slide10, Slide11, Slide12
];

export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const CurrentSlide = slides[currentSlide];

  return (
    <div className="w-full h-screen bg-slate-900 flex flex-col items-center justify-center overflow-hidden">
      {/* Presentation Container */}
      <div className="w-full max-w-7xl h-screen flex items-center justify-center relative">
        {/* Slide Display */}
        <div className="w-full aspect-video bg-background rounded-xl shadow-2xl overflow-hidden relative">
          <CurrentSlide />
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-20 p-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-colors z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-20 p-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-colors z-10"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Slide Counter and Controls */}
      <div className="flex flex-col items-center gap-4 mt-8">
        <div className="text-white text-lg font-semibold">
          {currentSlide + 1} / {slides.length}
        </div>

        {/* Slide Indicators */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-blue-500 w-8'
                  : 'bg-slate-600 w-2 hover:bg-slate-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
