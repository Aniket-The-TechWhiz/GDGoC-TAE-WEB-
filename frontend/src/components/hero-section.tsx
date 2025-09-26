'use client'

import gdgLogo from '@/assets/gdg-logo.png'
import { useEffect, useState } from 'react'
import { ArrowRight, Code, Users, Calendar, MapPin } from 'lucide-react'

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleViewEventsClick = () => {
    const eventsSection = document.getElementById('events');
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden flex items-center"
      style={{ paddingTop: '4rem' }} // Increased top margin
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        
        {/* Floating Code Elements - Responsive */}
        <div className="absolute top-12 sm:top-20 left-4 sm:left-10 animate-pulse delay-1000">
          <Code className="w-6 h-6 sm:w-8 sm:h-8 text-[#4285F4]/30" />
        </div>
        <div className="absolute top-28 sm:top-40 right-4 sm:right-20 animate-pulse delay-2000">
          <span className="text-xl sm:text-3xl text-[#EA4335]/30 font-google-sans-mono">{"</>"}</span>
        </div>
        <div className="absolute bottom-40 left-1/4 animate-pulse delay-3000">
          <span className="text-lg sm:text-2xl text-[#34A853]/30 font-google-sans-mono">→</span>
        </div>
        
        {/* Globe and Abstract Lines - Responsive */}
        <svg className="absolute top-20 sm:top-32 right-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 text-[#FBBC05]/20 animate-pulse delay-4000" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M50 5 Q75 25 50 50 Q25 75 50 95" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M5 50 Q25 25 50 50 Q75 75 95 50" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
        
        {/* Abstract line art - Responsive */}
        <svg className="absolute bottom-20 right-4 sm:right-10 w-24 h-24 sm:w-32 sm:h-32 text-[#4285F4]/20 animate-pulse delay-5000" viewBox="0 0 100 100">
          <path d="M10 10 Q50 30 90 10 Q50 70 10 90" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Mobile: Logo and Title Container - Stacked Vertically */}
          <div className="md:hidden flex flex-col items-center space-y-6 mb-6">
            {/* GDG Logo Circle - Mobile */}
            <div className={`relative w-36 h-36 flex-shrink-0 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full border-2 border-[#4285F4]/30 animate-pulse"></div>
              <div className="absolute inset-2 rounded-full border-2 border-[#EA4335]/30 animate-pulse delay-1000"></div>
              <div className="absolute inset-4 rounded-full border-2 border-[#FBBC05]/30 animate-pulse delay-2000"></div>
              <div className="absolute inset-6 rounded-full border-2 border-[#34A853]/30 animate-pulse delay-3000"></div>
              
              {/* Central logo */}
              <div className="absolute inset-6 bg-white dark:bg-card rounded-full flex items-center justify-center shadow-2xl border-4 border-[#4285F4]/20">
                <img
                  src={gdgLogo}
                  alt="GDG Logo"
                  className="w-16 h-16 object-contain"
                />
              </div>
              
              {/* Rotating icons container */}
              <div className="absolute inset-0 animate-rotate-icons">
                {/* Users icon - Top (0 degrees) */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-[#4285F4] text-white p-1.5 rounded-lg shadow-lg">
                  <Users className="w-3 h-3" />
                </div>
                
                {/* Code icon - Right (90 degrees) */}
                <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 bg-[#EA4335] text-white p-1.5 rounded-lg shadow-lg">
                  <Code className="w-3 h-3" />
                </div>
                
                {/* Calendar icon - Bottom (180 degrees) */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#34A853] text-white p-1.5 rounded-lg shadow-lg">
                  <Calendar className="w-3 h-3" />
                </div>
                
                {/* MapPin icon - Left (270 degrees) */}
                <div className="absolute top-1/2 -left-2 transform -translate-y-1/2 bg-[#FBBC05] text-white p-1.5 rounded-lg shadow-lg">
                  <MapPin className="w-3 h-3" />
                </div>
              </div>
            </div>

            {/* Main Title Text - Mobile */}
            <div className={`text-center transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h1 className="text-3xl sm:text-4xl font-bold font-google-sans mb-3">
                <span style={{ color: '#4285F4' }}>G</span>
                <span style={{ color: '#EA4335' }}>D</span>
                <span style={{ color: '#FBBC05' }}>G</span>
                <span style={{ color: '#4285F4' }}>o</span>
                <span style={{ color: '#34A853' }}>C</span>

              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground font-google-sans">
                Trinity Academy of Engineering
              </p>
            </div>
          </div>
          
          {/* Desktop: Grouped Logo and Title Container - Side by Side */}
          <div className={`hidden md:inline-flex items-center gap-8 mb-8 lg:mb-10 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            
            {/* GDG Logo Circle - Desktop */}
            <div className="relative w-48 h-48 flex-shrink-0">
              
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full border-2 border-[#4285F4]/30 animate-pulse"></div>
              <div className="absolute inset-2 rounded-full border-2 border-[#EA4335]/30 animate-pulse delay-1000"></div>
              <div className="absolute inset-4 rounded-full border-2 border-[#FBBC05]/30 animate-pulse delay-2000"></div>
              <div className="absolute inset-6 rounded-full border-2 border-[#34A853]/30 animate-pulse delay-3000"></div>
              
              {/* Central logo */}
              <div className="absolute inset-8 bg-white dark:bg-card rounded-full flex items-center justify-center shadow-2xl border-4 border-[#4285F4]/20">
                <img
                  src={gdgLogo}
                  alt="GDG Logo"
                  className="w-20 h-20 object-contain"
                />
              </div>
              
              {/* Rotating icons container */}
              <div className="absolute inset-0 animate-rotate-icons">
                {/* Users icon - Top (0 degrees) */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-[#4285F4] text-white p-2 rounded-lg shadow-lg">
                  <Users className="w-4 h-4" />
                </div>
                
                {/* Code icon - Right (90 degrees) */}
                <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 bg-[#EA4335] text-white p-2 rounded-lg shadow-lg">
                  <Code className="w-4 h-4" />
                </div>
                
                {/* Calendar icon - Bottom (180 degrees) */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#34A853] text-white p-2 rounded-lg shadow-lg">
                  <Calendar className="w-4 h-4" />
                </div>
                
                {/* MapPin icon - Left (270 degrees) */}
                <div className="absolute top-1/2 -left-2 transform -translate-y-1/2 bg-[#FBBC05] text-white p-2 rounded-lg shadow-lg">
                  <MapPin className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Main Title Text - Desktop */}
            <div className="text-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-google-sans mb-3">
                <span style={{ color: '#4285F4' }}>G</span>
                <span style={{ color: '#EA4335' }}>D</span>
                <span style={{ color: '#FBBC05' }}>G</span>
                <span style={{ color: '#4285F4' }}>o</span>
                <span style={{ color: '#34A853' }}>C</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-google-sans">
                Trinity Academy of Engineering
              </p>
            </div>
          </div>
          
          {/* Centered Tagline */}
          <div className={`mb-6 md:mb-8 lg:mb-10 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } ${
            isVisible ? 'delay-400' : 'delay-300'
          }`}>
          </div>
          
          {/* Centered CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 px-4 sm:px-0 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <button
              onClick={() => window.open('https://gdg.community.dev/gdg-on-campus-trinity-academy-of-engineering-pune-india/', '_blank', 'noopener,noreferrer')}
              className="group bg-gradient-to-r from-[#4285F4] to-[#34A853] hover:from-[#3367D6] hover:to-[#2E7D32] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-google-sans flex items-center justify-center text-sm w-full sm:w-auto"
            >
              <span>Join Our Community</span>
            </button>
            
            <button
              onClick={handleViewEventsClick}
              className="border-2 border-[#4285F4] text-[#4285F4] hover:bg-[#4285F4] hover:text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 font-google-sans text-sm w-full sm:w-auto"
            >
              View Events
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}