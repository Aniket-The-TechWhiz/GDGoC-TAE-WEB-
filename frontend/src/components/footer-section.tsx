'use client'

import { Mail, Instagram, Linkedin, Twitter, Github, MapPin, Phone, MessageCircle } from 'lucide-react'
import gdgLogo from '@/assets/gdg-logo.png'


export function FooterSection() {
  const quickLinks = [
    { name: 'About GDG Program', href: 'https://developers.google.com/community' },
    { name: 'Community Guidelines', href: 'https://www.google.com/events/policy/anti-harassmentpolicy.html' },
    { name: 'FAQ', href: '#faq' }
  ]

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/gdsc-tae/', color: '#0077B5', name: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/gdgoc_tae/', color: '#E4405F', name: 'Instagram' },
    { icon: MessageCircle, href: 'https://chat.whatsapp.com/Hy5cXWkn5fa1f5xUwaowh0', color: '#25D366', name: 'WhatsApp' },
    { icon: Twitter, href: 'https://x.com/gdgoc_tae', color: '#1DA1F2', name: 'Twitter' }
  ]

  return (
    <footer className="bg-card border-t border-border relative overflow-hidden">
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-br from-[#4285F4]/5 to-transparent"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-[#34A853]/5 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
          
          {/* Logo and Description */}
          <div className="lg:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                <img 
                  src={gdgLogo} 
                  alt="GDG Logo" 
                  className="w-12 h-12 object-contain"
                />

              <div>
                <h3 className="text-xl font-bold text-foreground font-google-sans">
                  GDGoC-TAE
                </h3>
                <p className="text-sm text-muted-foreground font-google-sans-mono">
                  Trinity Academy of Engineering
                </p>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed font-google-sans mb-6 max-w-md">
              Google Developer Groups on Campus at Trinity Academy of Engineering. 
              Empowering students to learn, innovate, and build with Google technologies.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-[#4285F4]" />
                <span className="font-google-sans">Trinity Academy of Engineering, Pune</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-[#EA4335]" />
                <span className="font-google-sans">gdgoc.tae@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-[#34A853]" />
                <span className="font-google-sans">+91 98765 43210</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-6 font-google-sans">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-[#4285F4] transition-colors duration-200 font-google-sans"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h4 className="font-bold text-foreground mb-6 font-google-sans">
              Connect With Us
            </h4>
            
            {/* 2x2 Grid of Social Icons */}
            <div className="grid grid-cols-2 gap-4 w-fit">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="flex items-center justify-center w-12 h-12 rounded-xl border border-border hover:border-[#4285F4] transition-all duration-300 hover:scale-110 group bg-card"
                  style={{ '--hover-color': social.color } as any}
                >
                  <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-[#4285F4] transition-colors duration-300" />
                </a>
              ))}
            </div>
            
            {/* Contact Info */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-[#EA4335]" />
                <span className="font-google-sans">gdgoc.tae@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-[#34A353]" />
                <span className="font-google-sans">+91 98765 43210</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-sm text-muted-foreground font-google-sans">
              © 2025 GDGoC-TAE. Made with ❤️ by Trinity Academy students.
            </div>
            
            {/* Google Branding */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground font-google-sans">
                Powered by Google Technologies
              </span>
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-[#4285F4] rounded-full"></div>
                <div className="w-3 h-3 bg-[#EA4335] rounded-full"></div>
                <div className="w-3 h-3 bg-[#FBBC05] rounded-full"></div>
                <div className="w-3 h-3 bg-[#34A853] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}