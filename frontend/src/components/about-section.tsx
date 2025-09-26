'use client'

import { useEffect, useRef, useState } from 'react'
import { Code, Users, Globe, Lightbulb, Heart, Zap } from 'lucide-react'
import { SimpleSlideshow } from './simple-slideshow'

export function AboutSection() {
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

  const stats = [
    { 
      number: '10,000+', 
      label: 'Participants',
      icon: Users,
      color: '#4285F4',
      bgColor: 'from-[#4285F4] to-[#3367D6]'
    },
    { 
      number: '25+', 
      label: 'Sessions',
      icon: Code,
      color: '#EA4335',
      bgColor: 'from-[#EA4335] to-[#D23E30]'
    },
    { 
      number: '35+', 
      label: 'Speakers',
      icon: Globe,
      color: '#FBBC05',
      bgColor: 'from-[#FBBC05] to-[#F9AB00]'
    },
    { 
      number: '2', 
      label: 'Days',
      icon: Lightbulb,
      color: '#34A853',
      bgColor: 'from-[#34A853] to-[#2E7D32]'
    }
  ]

  return (
    <section id="about" ref={sectionRef} className="pt-20 pb-10 lg:pt-32 lg:pb-16 relative overflow-hidden">
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-[#4285F4]/10 to-transparent"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-gradient-to-br from-[#34A853]/10 to-transparent"></div>
        <svg className="absolute top-1/2 right-20 w-24 h-24 text-[#EA4335]/10" viewBox="0 0 100 100">
          <polygon points="50,15 90,85 10,85" fill="currentColor" />
        </svg>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#4285F4]/10 to-[#34A853]/10 px-4 py-2 rounded-full border border-[#4285F4]/20">
                <Heart className="w-5 h-5 text-[#EA4335]" />
                <span className="text-sm font-medium text-foreground font-google-sans-mono">About GDGoC-TAE</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-google-sans leading-tight">
                Empowering Developers
                <br />
                <span className="bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#34A853] bg-clip-text text-transparent">
                  Worldwide
                </span>
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed font-google-sans">
                Google Developer Groups on Campus at Trinity Academy of Engineering (GDGoC-TAE) 
                is a student-led community fostering technology learning and innovation. Through 
                hands-on workshops, coding sessions, and tech talks, we empower students to 
                explore Google's cutting-edge technologies.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed font-google-sans">
                Our mission is to create an inclusive environment where students can develop 
                technical skills, work on real-world projects, and connect with the global 
                developer community. From Android development to Cloud computing, AI to Web 
                technologies - we're building tomorrow's tech leaders today.
              </p>
            </div>
            
            {/* Mission points */}
            <div className="space-y-4">
              {[
                { icon: Code, text: 'Learn cutting-edge Google technologies' },
                { icon: Users, text: 'Connect with fellow developers' },
                { icon: Zap, text: 'Build innovative solutions together' }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#4285F4]/20 to-[#34A853]/20 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-[#4285F4]" />
                  </div>
                  <span className="text-foreground font-google-sans">{item.text}</span>
                </div>
              ))}
            </div>
            
            <button
              onClick={() =>
                window.open('https://gdg.community.dev/gdg-on-campus-trinity-academy-of-engineering-pune-india/', '_blank', 'noopener,noreferrer')
              }
              className="bg-gradient-to-r from-[#4285F4] to-[#34A853] hover:from-[#3367D6] hover:to-[#2E7D32] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-google-sans"
            >
              Join Our Community
            </button>
          </div>
          
          {/* Right: Stats Grid */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`group relative bg-card border border-border rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 overflow-hidden delay-${index * 100}`}
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  {/* Icon */}
                  <div className="relative z-10 mb-4">
                    <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${stat.bgColor} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Number */}
                  <div className="relative z-10 mb-2">
                    <div 
                      className="text-3xl lg:text-4xl font-bold font-google-sans"
                      style={{ color: stat.color }}
                    >
                      {stat.number}
                    </div>
                  </div>
                  
                  {/* Label */}
                  <div className="relative z-10">
                    <div className="text-muted-foreground font-google-sans">
                      {stat.label}
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-2 -right-2 w-16 h-16 rounded-full bg-gradient-to-br from-white/5 to-transparent"></div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-white/5 to-transparent"></div>
                </div>
              ))}
            </div>
            
            {/* Additional info card */}
            <div className="mt-8 bg-gradient-to-r from-[#4285F4]/5 via-[#EA4335]/5 to-[#34A853]/5 border border-border rounded-2xl p-6">
              <h3 className="text-xl font-bold text-foreground mb-3 font-google-sans">
                Why Join GDGoC-TAE?
              </h3>
              <ul className="space-y-2 text-muted-foreground font-google-sans">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#4285F4] rounded-full"></div>
                  <span>Learn Google technologies through practical projects</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#EA4335] rounded-full"></div>
                  <span>Connect with fellow students and industry mentors</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#FBBC05] rounded-full"></div>
                  <span>Participate in hackathons and coding competitions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#34A853] rounded-full"></div>
                  <span>Access to exclusive Google developer resources</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Simple Slideshow - Below main content */}
        <div className={`mt-20 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground font-google-sans mb-4">
              Our Community in
              <span className="bg-gradient-to-r from-[#4285F4] to-[#34A853] bg-clip-text text-transparent"> Action</span>
            </h3>
            <p className="text-muted-foreground font-google-sans text-lg max-w-2xl mx-auto">
              Discover the events and workshops that make GDGoC-TAE a vibrant learning community
            </p>
          </div>
          <SimpleSlideshow />
        </div>
      </div>
    </section>
  )
}