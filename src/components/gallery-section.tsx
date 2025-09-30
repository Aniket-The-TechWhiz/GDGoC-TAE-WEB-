'use client'

import { useEffect, useRef, useState } from 'react'
import { ImageWithFallback } from "./figma/ImageWithFallback"
import ipic from '@/assets/galleryimg/1pic.jpg'
import pic2 from '@/assets/galleryimg/2pic.jpg'
import pic3 from '@/assets/galleryimg/3pic.jpg'
import pic4 from '@/assets/galleryimg/4pic.jpg'
import pic5 from '@/assets/galleryimg/5pic.jpg'
import pic6 from '@/assets/galleryimg/6pic.jpg'
import pic7 from '@/assets/galleryimg/7pic.jpg'
import { Camera, Play, Users, Code, Calendar } from 'lucide-react'

export function GallerySection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleExploreEventsClick = () => {
    const eventsSection = document.getElementById('events');
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Exact collage grid layout matching the provided image
  const collageImages = [
    // TOP ROW
    {
      id: 1,
      src: ipic,
      title: "WOW Conference 2024",
      type: "conference",
      gridArea: "top-left",
      borderColor: '#4285F4',
      icon: Code
    },
    {
      id: 2,
      src: pic2,
      title: "Tech Opportunities",
      type: "presentation",
      gridArea: "top-center",
      borderColor: '#34A853',
      icon: Users
    },
    {
      id: 3,
      src: pic3,
      title: "Empowerment Talk",
      type: "workshop",
      gridArea: "top-right",
      borderColor: '#EA4335',
      icon: Calendar
    },
    // MIDDLE ROW
    {
      id: 4,
      src: pic4,
      title: "WOW Pune Networking",
      type: "networking",
      gridArea: "mid-left",
      borderColor: '#FBBC05',
      icon: Users
    },
    {
      id: 5,
      src: pic5,
      title: "Mobile & Web Dev",
      type: "development",
      gridArea: "mid-center",
      borderColor: '#34A853',
      icon: Code
    },
    {
      id: 6,
      src: pic6,
      title: "Speaker Session",
      type: "talk",
      gridArea: "mid-right",
      borderColor: '#9C27B0',
      icon: Play
    },
    // BOTTOM ROW
    {
      id: 7,
      src: pic7,
      title: "Community Gathering",
      type: "community",
      gridArea: "bottom-left",
      borderColor: '#4285F4',
      icon: Code
    },
    {
      id: 8,
      src: ipic,
      title: "Adversity Workshop",
      type: "workshop",
      gridArea: "bottom-center",
      borderColor: '#34A853',
      icon: Calendar
    }
  ]

  return (
    <section id="gallery" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-[#4285F4]/5 to-transparent rounded-2xl rotate-12"></div>
        <div className="absolute top-40 right-10 w-24 h-24 bg-gradient-to-br from-[#EA4335]/5 to-transparent rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 bg-gradient-to-br from-[#FBBC05]/5 to-transparent rounded-lg rotate-45"></div>
        <div className="absolute bottom-40 right-40 w-16 h-16 bg-gradient-to-br from-[#34A853]/5 to-transparent rounded-full"></div>
        
        {/* Scattered tech icons */}
        <div className="absolute top-32 left-1/4 text-2xl text-[#4285F4]/10 select-none transform rotate-12">💻</div>
        <div className="absolute top-20 right-1/3 text-3xl text-[#EA4335]/10 select-none transform -rotate-12">📱</div>
        <div className="absolute bottom-32 left-1/3 text-2xl text-[#34A853]/10 select-none transform rotate-45">⚡</div>
        <div className="absolute bottom-16 right-1/4 text-3xl text-[#FBBC05]/10 select-none transform -rotate-45">🚀</div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Enhanced Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#4285F4]/10 via-[#EA4335]/10 to-[#34A853]/10 px-6 py-3 rounded-full border border-[#4285F4]/20 mb-8 backdrop-blur-sm">
            <Camera className="w-5 h-5 text-[#4285F4]" />
            <span className="text-sm font-medium text-foreground font-google-sans-mono">Event Memories</span>
            <div className="w-2 h-2 bg-[#EA4335] rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-google-sans mb-6 leading-tight">
            Past Event
            <br />
            <span className="bg-gradient-to-r from-[#4285F4] via-[#EA4335] via-[#FBBC05] to-[#34A853] bg-clip-text text-transparent">
              Highlights
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-google-sans leading-relaxed">
            A precisely crafted collage grid showcasing our most impactful tech community moments—
            each image perfectly positioned and seamlessly integrated for maximum visual impact.
          </p>
        </div>
        
        {/* Exact Collage Grid Layout - Zero Gap Design */}
        <div className={`transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          {/* Mobile Grid: Simplified stacked layout with minimal spacing */}
          <div className="grid md:hidden grid-cols-1 gap-3 mb-12">
            {collageImages.slice(0, 6).map((image, index) => (
              <div
                key={image.id}
                className="relative group overflow-hidden min-h-[200px] transition-all duration-500 rounded-xl"
                style={{
                  transitionDelay: `${index * 100}ms`,
                  backgroundImage: `url(${image.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  border: `3px solid ${image.borderColor}`
                }}
              >
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/70 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <image.icon className="w-4 h-4 text-white" />
                    <span className="text-white text-xs font-google-sans-mono opacity-80 capitalize">{image.type}</span>
                  </div>
                  <h4 className="text-white font-medium text-sm font-google-sans">{image.title}</h4>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop/Tablet Grid: Exact layout with minimal gutters */}
          <div className="hidden md:block">
            <div 
              className="grid rounded-xl"
              style={{
                gridTemplateColumns: '2fr 1fr 2fr',
                gridTemplateRows: 'auto auto auto',
                gridTemplateAreas: `
                  "top-left top-center top-right"
                  "mid-left mid-center mid-right"
                  "bottom-left bottom-center mid-right"
                `,
                height: '600px',
                gap: '10px'
              }}
            >
              {collageImages.map((image, index) => (
                <div
                  key={image.id}
                  className="relative group overflow-hidden transition-all duration-500 hover:z-20 rounded-lg"
                  style={{
                    gridArea: image.gridArea,
                    transitionDelay: `${index * 100}ms`,
                    backgroundImage: `url(${image.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    border: `3px solid ${image.borderColor}`,
                    boxShadow: `0 4px 16px ${image.borderColor}20`
                  }}
                >
                  {/* Subtle brand overlay */}
                  <div 
                    className="absolute inset-0 opacity-5 group-hover:opacity-15 transition-all duration-300"
                    style={{ backgroundColor: image.borderColor }}
                  ></div>
                  
                  {/* Hover information overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute inset-0 backdrop-blur-[0.5px] flex flex-col justify-end p-4 lg:p-6">
                      
                      {/* Event badge */}
                      <div className="flex items-center space-x-2 mb-2 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                        <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                          <image.icon className="w-4 h-4 text-white" />
                          <span className="text-white text-xs font-google-sans-mono capitalize">{image.type}</span>
                        </div>
                      </div>
                      
                      {/* Event title */}
                      <h4 className="text-white font-medium text-sm lg:text-base font-google-sans leading-tight opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200">
                        {image.title}
                      </h4>
                      
                      {/* Corner accent */}
                      <div 
                        className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-b-[20px] border-l-transparent opacity-0 group-hover:opacity-40 transition-all duration-700 delay-300"
                        style={{ borderBottomColor: image.borderColor }}
                      ></div>
                    </div>
                  </div>
                  
                  {/* Color indicator corner */}
                  <div 
                    className="absolute top-0 left-0 w-0 h-0 border-r-[15px] border-b-[15px] border-r-transparent opacity-30 group-hover:opacity-50 transition-all duration-300"
                    style={{ borderBottomColor: image.borderColor }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Enhanced Call to Action */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="relative bg-gradient-to-br from-[#4285F4]/5 via-[#EA4335]/5 via-[#FBBC05]/5 to-[#34A853]/5 border border-border rounded-3xl p-8 lg:p-12 max-w-3xl mx-auto backdrop-blur-sm overflow-hidden">
            
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-4 left-4 w-12 h-12 bg-[#4285F4]/10 rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 bg-[#EA4335]/10 rounded-lg rotate-45"></div>
              <div className="absolute top-1/2 left-8 w-6 h-6 bg-[#34A853]/10 rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#4285F4] to-[#34A853] bg-clip-text text-transparent mb-4">
                <Calendar className="w-6 h-6 text-[#4285F4]" />
                <span className="text-sm font-google-sans-mono">What's Next?</span>
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 font-google-sans">
                Ready to Create New Memories?
              </h3>
              
              <p className="text-muted-foreground mb-8 font-google-sans text-lg leading-relaxed max-w-2xl mx-auto">
                Join our upcoming events and be part of the next chapter in our tech community story. 
                From hands-on workshops to inspiring conferences—there's always something amazing happening.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={handleExploreEventsClick}
                  className="group bg-gradient-to-r from-[#EA4335] via-[#FBBC05] to-[#34A853] hover:from-[#D23E30] hover:via-[#F9AB00] hover:to-[#2E7D32] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-google-sans flex items-center space-x-2"
                >
                  <span>Explore Upcoming Events</span>
                  <Calendar className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
