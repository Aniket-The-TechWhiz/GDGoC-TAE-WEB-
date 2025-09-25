'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import gdgocWow2025Image from 'figma:asset/963ea0c0c5256d7a094f88a7d3120a1e2a456938.png'
import webDevelopmentWorkshopImage from 'figma:asset/ba3d9bead6e6352893832bbd3ccc04f3bd0a8ad1.png'
import genAIStudyJamsImage from 'figma:asset/39d738427a0242c05b70a7301873dd207d16aaf5.png'

interface Slide {
  id: number
  image: string
  alt: string
}

const slides: Slide[] = [
  {
    id: 1,
    image: gdgocWow2025Image,
    alt: "GDGoC WOW 2025 Event"
  },
  {
    id: 2,
    image: webDevelopmentWorkshopImage,
    alt: "Web Development Workshop"
  },
  {
    id: 3,
    image: genAIStudyJamsImage,
    alt: "GenAI Study Jams"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1540058404349-2e5fabf32d75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8Y29kaW5nJTIwd29ya3Nob3AlMjBzdHVkZW50c3xlbnwxfHx8fDE3NTg3MjAzMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Coding Workshop"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1758598306835-2c030e203707?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8dGVjaG5vbG9neSUyMHByZXNlbnRhdGlvbiUyMGNvbmZlcmVuY2V8ZW58MXx8fHwxNzU4NzIwMzMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Technology Conference"
  }
]

export function ShapedSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Main slideshow container with unique shape */}
      <div className="relative group">
        {/* Shaped frame container */}
        <div 
          className="relative w-full aspect-video overflow-hidden"
          style={{
            clipPath: `polygon(
              15% 0%, 
              85% 0%, 
              100% 15%, 
              100% 70%, 
              90% 85%, 
              75% 100%, 
              25% 100%, 
              10% 85%, 
              0% 70%, 
              0% 30%, 
              5% 15%
            )`
          }}
        >
          {/* Background with Google brand gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#4285F4] via-[#EA4335] to-[#34A853] p-1">
            {/* Inner content area */}
            <div 
              className="w-full h-full overflow-hidden relative"
              style={{
                clipPath: `polygon(
                  15% 0%, 
                  85% 0%, 
                  100% 15%, 
                  100% 70%, 
                  90% 85%, 
                  75% 100%, 
                  25% 100%, 
                  10% 85%, 
                  0% 70%, 
                  0% 30%, 
                  5% 15%
                )`
              }}
            >
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <ImageWithFallback
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slide indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-gradient-to-r from-[#4285F4] to-[#34A853] scale-110'
                : 'bg-muted hover:bg-muted-foreground/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}