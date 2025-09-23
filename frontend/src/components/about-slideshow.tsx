'use client'

import { useState, useEffect } from 'react'
import { ImageWithFallback } from './figma/ImageWithFallback'

interface Slide {
  id: number
  image: string
  title: string
  description: string
}

const slides: Slide[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1540058404349-2e5fabf32d75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8Y29kaW5nJTIwd29ya3Nob3AlMjBzdHVkZW50c3xlbnwxfHx8fDE3NTgzODg2NDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Interactive Workshops",
    description: "Hands-on coding sessions where students learn Google technologies through practical implementation."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1560439514-0fc9d2cd5e1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8dGVjaG5vbG9neSUyMGNvbmZlcmVuY2UlMjBkZXZlbG9wZXJzfGVufDF8fHx8MTc1ODQ0MjYzM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Tech Conferences",
    description: "Exclusive access to Google developer events and conferences for continuous learning."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1587691592099-24045742c181?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8cHJvZ3JhbW1pbmclMjBib290Y2FtcCUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NTg0NDI2MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Intensive Learning",
    description: "Comprehensive bootcamp-style sessions covering everything from basics to advanced concepts."
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1632910121591-29e2484c0259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8aGFja2F0aG9uJTIwdGVhbXdvcmslMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc1ODQ0MjYzOXww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Hackathons & Projects",
    description: "Collaborative coding challenges where teams build innovative solutions using Google technologies."
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1647514422086-18cde746fa26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8ZGV2ZWxvcGVyJTIwbWVldHVwJTIwbmV0d29ya2luZ3xlbnwxfHx8fDE3NTg0NDI2NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Community Networking",
    description: "Connect with fellow developers, mentors, and industry professionals in our vibrant community."
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