'use client'

import { useState, useEffect } from 'react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import gdgocWow2025Image from 'figma:asset/963ea0c0c5256d7a094f88a7d3120a1e2a456938.png'
import webDevelopmentWorkshopImage from 'figma:asset/ba3d9bead6e6352893832bbd3ccc04f3bd0a8ad1.png'
import genAIStudyJamsImage from 'figma:asset/39d738427a0242c05b70a7301873dd207d16aaf5.png'

interface Slide {
  id: number
  image: string
  title: string
  description: string
}

const slides: Slide[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1453060113865-968cea1ad53a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8d2ViJTIwZGV2ZWxvcG1lbnQlMjBoYW5kcyUyMG9uJTIwd29ya3Nob3B8ZW58MXx8fHwxNzU4NzIwNzE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Web Dev Hands-on Workshop at WOW 2025",
    description: "Interactive hands-on web development sessions during our Week of Wonders event, where students dive deep into modern web technologies."
  },
  {
    id: 2,
    image: gdgocWow2025Image,
    title: "GDGoC WOW 2025",
    description: "Our signature Week of Wonders event featuring cutting-edge tech presentations and interactive sessions with industry experts."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1646579885920-0c9a01cb7078?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcHAlMjBwcm9ncmFtbWluZyUyMHdvcmtzaG9wJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzU4NzIwNzI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "C++ Workshop",
    description: "Comprehensive C++ programming workshop focusing on object-oriented programming concepts and practical implementation techniques."
  },
  {
    id: 4,
    image: genAIStudyJamsImage,
    title: "GenAI Study Jams",
    description: "Collaborative learning sessions focused on Generative AI and machine learning technologies, led by student experts and mentors."
  },
  {
    id: 5,
    image: webDevelopmentWorkshopImage,
    title: "Web Development Workshop",
    description: "Hands-on web development sessions where students learn modern frameworks and technologies in our state-of-the-art computer labs."
  },
  {
    id: 6,
    image: gdgocWow2025Image,
    title: "GDGoC WOW 2025 - Day 2",
    description: "Second day highlights from our Week of Wonders event showcasing advanced workshops and networking sessions."
  },
  {
    id: 7,
    image: webDevelopmentWorkshopImage,
    title: "Advanced Web Development",
    description: "Advanced web development techniques and best practices session, covering modern frameworks and deployment strategies."
  }
]

export function AboutSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-play functionality - continuous loop every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full max-w-2xl mx-auto bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
      {/* Main Slideshow Container - 16:9 Aspect Ratio */}
      <div className="relative aspect-video overflow-hidden">
        {/* Slides with Fade Transition */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <ImageWithFallback
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            
            {/* Subtle overlay with content */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-lg md:text-xl font-bold mb-2 font-google-sans">
                  {slide.title}
                </h3>
                <p className="text-sm text-white/90 font-google-sans leading-relaxed">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Subtle progress indicator */}
      <div className="h-1 bg-muted">
        <div 
          className="h-full bg-gradient-to-r from-[#4285F4] to-[#34A853] transition-all duration-1000 ease-linear"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%`
          }}
        />
      </div>
    </div>
  )
}