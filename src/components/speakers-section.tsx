'use client'

import { useEffect, useRef, useState } from 'react'
import { ImageWithFallback } from "./figma/ImageWithFallback"
import { Star, MapPin, Building, Award, ExternalLink } from 'lucide-react'

export function SpeakersSection() {
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

  const speakers = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "Senior Developer Advocate",
      company: "Google",
      location: "Mountain View, CA",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b077?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbnxlbnwwfHx8fDE3NTgyOTQzNTN8MA&ixlib=rb-4.1.0&q=80&w=300",
      badge: "Speaker",
      badgeColor: "#EA4335",
      expertise: ["Flutter", "Dart", "Mobile Development"],
      bio: "Passionate about mobile development and developer experience. Leading Flutter advocacy at Google.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      title: "Cloud Solutions Architect",
      company: "Google Cloud",
      location: "San Francisco, CA",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW58ZW58MHx8fHwxNzU4Mjk0MzUzfDA&ixlib=rb-4.1.0&q=80&w=300",
      badge: "Speaker",
      badgeColor: "#4285F4",
      expertise: ["GCP", "Kubernetes", "DevOps"],
      bio: "Expert in cloud architecture and scalable systems. Helping developers build for the cloud.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 3,
      name: "Priya Patel",
      title: "AI Research Engineer",
      company: "Google Research",
      location: "Seattle, WA",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGluZGlhbnxlbnwwfHx8fDE3NTgyOTQzNTN8MA&ixlib=rb-4.1.0&q=80&w=300",
      badge: "Organizer",
      badgeColor: "#34A853",
      expertise: ["Machine Learning", "TensorFlow", "AI Ethics"],
      bio: "Researching the future of AI and its ethical implications. Making ML accessible to everyone.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ]

  return (
    <section id="speakers" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-br from-[#4285F4]/5 to-transparent"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#34A853]/5 to-transparent"></div>
        
        {/* Quote marks */}
        <div className="absolute top-40 left-10 text-8xl text-[#EA4335]/10 font-google-sans select-none">"</div>
        <div className="absolute bottom-40 right-10 text-8xl text-[#4285F4]/10 font-google-sans select-none">"</div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#4285F4]/10 to-[#EA4335]/10 px-4 py-2 rounded-full border border-[#4285F4]/20 mb-6">
            <Star className="w-5 h-5 text-[#FBBC05]" />
            <span className="text-sm font-medium text-foreground font-google-sans-mono">Featured Speakers</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-google-sans mb-6">
            Learn from the
            <br />
            <span className="bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#34A853] bg-clip-text text-transparent">
              Best in Tech
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-google-sans">
            Learn from Google experts, industry leaders, and experienced developers 
            who visit Trinity Academy to share their knowledge and inspire students.
          </p>
        </div>
        
        {/* Speakers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {speakers.map((speaker, index) => (
            <div
              key={speaker.id}
              className={`group bg-card border border-border rounded-3xl p-8 text-center hover:scale-105 transition-all duration-500 hover:shadow-2xl overflow-hidden relative transition-all duration-1000 delay-${index * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Profile badge */}
              <div className="absolute top-4 right-4 z-10">
                <div 
                  className="px-3 py-1 rounded-full text-white text-sm font-medium font-google-sans-mono"
                  style={{ backgroundColor: speaker.badgeColor }}
                >
                  {speaker.badge}
                </div>
              </div>
              
              {/* Speaker Image */}
              <div className="relative z-10 mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-xl border-4 border-white/10 group-hover:border-white/20 transition-all duration-300">
                  <ImageWithFallback
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Floating icons */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-[#4285F4] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                  <Award className="w-4 h-4 text-white" />
                </div>
              </div>
              
              {/* Speaker Details */}
              <div className="relative z-10 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1 font-google-sans group-hover:text-[#4285F4] transition-colors duration-300">
                    {speaker.name}
                  </h3>
                  <p className="text-muted-foreground font-medium font-google-sans">
                    {speaker.title}
                  </p>
                </div>
                
                <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Building className="w-4 h-4" />
                    <span className="font-google-sans">{speaker.company}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span className="font-google-sans">{speaker.location}</span>
                  </div>
                </div>
                
                {/* Expertise tags */}
                <div className="flex flex-wrap justify-center gap-2">
                  {speaker.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gradient-to-r from-[#4285F4]/10 to-[#34A853]/10 text-[#4285F4] rounded-full text-sm font-medium font-google-sans-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                {/* Bio */}
                <p className="text-sm text-muted-foreground italic leading-relaxed font-google-sans">
                  "{speaker.bio}"
                </p>
                
                {/* Social links */}
                <div className="flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300">
                  <button className="w-8 h-8 bg-[#4285F4] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </button>
                  <button className="w-8 h-8 bg-[#34A853] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-[#FBBC05]/20 to-transparent rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#EA4335]/20 to-transparent rounded-full"></div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className={`text-center transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-[#4285F4]/5 via-[#EA4335]/5 to-[#34A853]/5 border border-border rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4 font-google-sans">
              Want to Speak at GDGoC-TAE?
            </h3>
            <p className="text-muted-foreground mb-6 font-google-sans">
              Share your expertise and inspire students at Trinity Academy. We welcome 
              industry professionals and experienced developers to join our events.
            </p>
            <button className="bg-gradient-to-r from-[#EA4335] to-[#4285F4] hover:from-[#D23E30] hover:to-[#3367D6] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-google-sans">
              Become a Speaker
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}