'use client'

import { useEffect, useState } from 'react'
import webDevHandsOnImage from '@/assets/slideshowimg/1.png'
import gdgocWow2025Image from '@/assets/slideshowimg/2.png'
import cppWorkshopImage from '@/assets/slideshowimg/3.png'
import genAIStudyJamsImage from '@/assets/slideshowimg/4.png'
import webDevelopmentWorkshopImage from '@/assets/slideshowimg/5.png'

export function SimpleSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const images = [
    {
      src: webDevHandsOnImage,
      alt: "Web Dev Hands-on Workshop at WOW 2025"
    },
    {
      src: gdgocWow2025Image,
      alt: "GDGoC WOW 2025"
    },
    {
      src: cppWorkshopImage,
      alt: "C++ Workshop"
    },
    {
      src: genAIStudyJamsImage,
      alt: "GenAI Study Jams"
    },
    {
      src: webDevelopmentWorkshopImage,
      alt: "Web Development Workshop"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Main slideshow container - pure focus on images */}
      <div className="relative h-[500px] md:h-[650px] lg:h-[750px] flex items-center justify-center">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out flex items-center justify-center ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="max-w-full max-h-full object-contain"
              style={{
                filter: 'none',
                borderRadius: '0px'
              }}
            />
          </div>
        ))}
      </div>
      
      {/* Minimal navigation dots */}
      <div className="flex justify-center mt-8 space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 border-0 ${
              index === currentSlide
                ? 'bg-[#4285F4] scale-125'
                : 'bg-muted-foreground/40 hover:bg-muted-foreground/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}