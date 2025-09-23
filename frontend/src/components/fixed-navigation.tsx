'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Globe } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'

export function FixedNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Events', href: '#events', id: 'events' },
    { name: 'Team', href: '#team', id: 'team' },
    { name: 'Contact', href: '#contact', id: 'contact' },
    { name: 'FAQ', href: '#faq', id: 'faq' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let currentSection = 'home';

      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          if (element.offsetTop <= scrollPosition) {
            currentSection = item.id;
          }
        }
      }
      
      setActiveSection(currentSection);
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navItems])

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <nav className={`transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/20 backdrop-blur-xl shadow-2xl border border-white/20' 
          : 'bg-background/10 backdrop-blur-lg shadow-xl border border-white/10'
      } rounded-2xl`}>
        {/* Glassmorphism enhancement */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/5 via-transparent to-white/5 pointer-events-none"></div>
        <div className="absolute inset-0 rounded-2xl shadow-inner shadow-white/10 pointer-events-none"></div>
        
        <div className="relative px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 lg:h-16">
            {/* Logo Text - Far Left */}
            <div className="flex items-center">
              <button 
                onClick={() => scrollToSection('home')}
                className="flex items-center transform hover:scale-110 transition-all duration-200 p-2 rounded-lg hover:bg-white/10"
              >
                <span className="text-lg lg:text-xl font-bold font-google-sans drop-shadow-sm">
                  <span style={{ color: '#4285F4' }}>G</span>
                  <span style={{ color: '#EA4335' }}>D</span>
                  <span style={{ color: '#FBBC05' }}>G</span>
                  <span style={{ color: '#4285F4' }}>o</span>
                  <span style={{ color: '#34A853' }}>C</span>
                  <span className="text-foreground/90">-TAE</span>
                </span>
              </button>
            </div>

            {/* Desktop Navigation - Center */}
            <div className="hidden lg:flex items-center justify-center mx-8">
              <div className="flex items-center space-x-6">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-foreground/90 hover:text-[#4285F4] font-medium transition-all duration-200 relative group font-google-sans px-3 py-2 rounded-lg hover:bg-white/10 ${
                      activeSection === item.id ? 'text-[#4285F4] bg-white/10' : ''
                    }`}
                  >
                    {item.name}
                    <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-[#4285F4] to-[#34A853] transition-all duration-300 rounded-full ${
                      activeSection === item.id ? 'w-4/5' : 'w-0 group-hover:w-4/5'
                    }`}></span>
                  </button>
                ))}
              </div>
            </div>

            {/* Theme Toggle - Far Right */}
            <div className="hidden lg:flex items-center">
              <div className="p-1 rounded-lg hover:bg-white/10 transition-colors duration-200">
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile Menu Button and Theme Toggle */}
            <div className="lg:hidden flex items-center space-x-2">
              <div className="p-1 rounded-lg hover:bg-white/10 transition-colors duration-200">
                <ThemeToggle />
              </div>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5 text-foreground/90" />
                ) : (
                  <Menu className="w-5 h-5 text-foreground/90" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-[70vh] opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}>
            <div className="border-t border-white/10 bg-white/5 backdrop-blur-md rounded-b-2xl">
              <div className="py-4 space-y-2 max-h-[60vh] overflow-y-auto scrollbar-hide">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-4 py-3 text-foreground/90 hover:text-[#4285F4] hover:bg-white/10 rounded-lg font-medium transition-all duration-200 font-google-sans mx-2 ${
                      activeSection === item.id ? 'text-[#4285F4] bg-white/10' : ''
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}