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
      <div className="relative h-[500px] md:h-[647px] lg:h-[745px] overflow-hidden">
        {images.map((image, index) => {
          return (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out flex items-center justify-center ${
              index === currentSlide
                ? 'opacity-100 scale-100'  // Active slide
                : 'opacity-0 scale-90'     // Inactive slides are scaled down and invisible
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
          );
        })}
      </div>
    </div>
  )
}