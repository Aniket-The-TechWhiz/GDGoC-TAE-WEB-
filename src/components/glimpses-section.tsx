'use client'

import { useEffect, useRef, useState } from 'react'
import { ImageWithFallback } from "./figma/ImageWithFallback"
import { Camera, Calendar, Users, Award } from 'lucide-react'

export function GlimpsesSection() {
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

  const glimpses = [
    {
      id: 1,
      title: "Flutter Workshop 2024",
      description: "Students building their first mobile apps",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMGNvZGluZ3xlbnwwfHx8fDE3NTgyOTQzNTV8MA&ixlib=rb-4.1.0&q=80&w=600",
      category: "Workshop",
      participants: "45",
      date: "Oct 2024"
    },
    {
      id: 2,
      title: "Cloud Study Jam",
      description: "Learning Google Cloud Platform together",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZ3xlbnwwfHx8fDE3NTgyOTQzNTV8MA&ixlib=rb-4.1.0&q=80&w=600",
      category: "Study Jam",
      participants: "60",
      date: "Sep 2024"
    },
    {
      id: 3,
      title: "Hackathon Winner",
      description: "Our team won the college hackathon",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWNrYXRob24lMjB3aW5uZXJ8ZW58MHx8fHwxNzU4Mjk0MzU1fDA&ixlib=rb-4.1.0&q=80&w=600",
      category: "Achievement",
      participants: "150",
      date: "Aug 2024"
    },
    {
      id: 4,
      title: "Tech Talk Series",
      description: "Industry expert sharing insights",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwdGFsa3xlbnwwfHx8fDE3NTgyOTQzNTV8MA&ixlib=rb-4.1.0&q=80&w=600",
      category: "Tech Talk",
      participants: "80",
      date: "Jul 2024"
    },
    {
      id: 5,
      title: "Android Study Jam",
      description: "Building Android apps with Kotlin",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmRyb2lkJTIwZGV2ZWxvcG1lbnR8ZW58MHx8fHwxNzU4Mjk0MzU1fDA&ixlib=rb-4.1.0&q=80&w=600",
      category: "Study Jam",
      participants: "70",
      date: "Jun 2024"
    },
    {
      id: 6,
      title: "Web Development Bootcamp",
      description: "Full-stack development intensive",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NTgyOTQzNTV8MA&ixlib=rb-4.1.0&q=80&w=600",
      category: "Bootcamp",
      participants: "40",
      date: "May 2024"
    }
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Workshop':
        return '#4285F4'
      case 'Study Jam':
        return '#34A853'
      case 'Achievement':
        return '#FBBC05'
      case 'Tech Talk':
        return '#EA4335'
      case 'Bootcamp':
        return '#9C27B0'
      default:
        return '#4285F4'
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Achievement':
        return <Award className="w-4 h-4" />
      case 'Tech Talk':
        return <Users className="w-4 h-4" />
      default:
        return <Calendar className="w-4 h-4" />
    }
  }

  return (
    <section id="glimpses" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-gradient-to-br from-[#4285F4]/5 to-transparent"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-[#34A853]/5 to-transparent"></div>
        
        {/* Camera decorations */}
        <div className="absolute top-40 right-40 text-4xl text-[#EA4335]/10 select-none">📸</div>
        <div className="absolute bottom-40 left-40 text-4xl text-[#4285F4]/10 select-none">🎉</div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#4285F4]/10 to-[#EA4335]/10 px-4 py-2 rounded-full border border-[#4285F4]/20 mb-6">
            <Camera className="w-5 h-5 text-[#4285F4]" />
            <span className="text-sm font-medium text-foreground font-google-sans-mono">Photo Gallery</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-google-sans mb-6">
            Glimpses of
            <br />
            <span className="bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#34A853] bg-clip-text text-transparent">
              Our Journey
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-google-sans">
            Capturing moments of learning, innovation, and community building 
            at GDGoC-TAE events and activities.
          </p>
        </div>
        
        {/* Photo Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {glimpses.map((glimpse, index) => (
            <div
              key={glimpse.id}
              className={`group bg-card border border-border rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 transition-all duration-1000 delay-${index * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={glimpse.image}
                  alt={glimpse.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <div 
                    className="flex items-center space-x-1 px-3 py-1 rounded-full text-white text-sm font-medium font-google-sans-mono"
                    style={{ backgroundColor: getCategoryColor(glimpse.category) }}
                  >
                    {getCategoryIcon(glimpse.category)}
                    <span>{glimpse.category}</span>
                  </div>
                </div>
                
                {/* Date */}
                <div className="absolute top-4 right-4">
                  <div className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium font-google-sans-mono">
                    {glimpse.date}
                  </div>
                </div>
                
                {/* Participants count */}
                <div className="absolute bottom-4 right-4">
                  <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-medium font-google-sans">
                    <Users className="w-4 h-4" />
                    <span>{glimpse.participants}</span>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-lg text-foreground mb-2 font-google-sans group-hover:text-[#4285F4] transition-colors duration-300">
                  {glimpse.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-google-sans">
                  {glimpse.description}
                </p>
                
                {/* Action button */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="text-[#4285F4] hover:text-[#3367D6] font-medium text-sm font-google-sans flex items-center space-x-1">
                    <span>View More</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-[#4285F4]/5 via-[#EA4335]/5 to-[#34A853]/5 border border-border rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4 font-google-sans">
              Be Part of Our Story
            </h3>
            <p className="text-muted-foreground mb-6 font-google-sans">
              Join GDGoC-TAE and create your own tech journey. Every event is an 
              opportunity to learn, grow, and make lasting connections.
            </p>
            <button className="bg-gradient-to-r from-[#EA4335] to-[#FBBC05] hover:from-[#D23E30] hover:to-[#F9AB00] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-google-sans">
              Join Our Next Event
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}