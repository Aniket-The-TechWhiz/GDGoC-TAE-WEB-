'use client'

import { useEffect, useRef, useState } from 'react'
import { Mail, MapPin, Send, Linkedin, Instagram, User, MessageCircle, Twitter } from 'lucide-react'

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitMessage(null); // Clear previous messages

    try {
      const response = await fetch('http://localhost:5000/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitMessage("Thank you! Your message has been sent successfully.");
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear the form
      } else {
        const errorData = await response.json();
        setSubmitMessage(`Failed to send message: ${errorData.message}`);
      }
    } catch (error) {
      setSubmitMessage("An unexpected error occurred. Please try again later.");
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email",
      value: "gdgoc.tae@gmail.com",
      link: "mailto:gdgoc.tae@gmail.com",
      color: "#EA4335"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Trinity Academy of Engineering",
      value: "Pune, Maharashtra, India",
      link: "https://www.google.com/maps/place/Trinity+Academy+of+Engineering/@18.4207309,73.9030732,17.55z/data=!4m14!1m7!3m6!1s0x3bc2c058396c3aa3:0xda785dfcd808849f!2sTrinity+Academy+of+Engineering!8m2!3d18.420721!4d73.9048223!16s%2Fg%2F11g6nky23n!3m5!1s0x3bc2c058396c3aa3:0xda785dfcd808849f!8m2!3d18.420721!4d73.9048223!16s%2Fg%2F11g6nky23n?entry=ttu&g_ep=EgoyMDI1MDkyMy4wIKXMDSoASAFQAw%3D%3D",
      color: "#4285F4"
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/gdsc-tae/",
      color: "#0077B5",
      description: "Connect with us professionally"
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://www.instagram.com/gdgoc_tae/",
      color: "#E4405F",
      description: "Follow our journey"
    },
    {
      icon: MessageCircle,
      name: "WhatsApp",
      url: "https://chat.whatsapp.com/Hy5cXWkn5fa1f5xUwaowh0",
      color: "#25D366",
      description: "Chat with us directly"
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://x.com/gdgoc_tae",
      color: "#1DA1F2",
      description: "Get the latest updates"
    }
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-gradient-to-br from-[#4285F4]/5 to-transparent"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-[#34A853]/5 to-transparent"></div>
        
        {/* Email decorations */}
        <div className="absolute top-40 right-40 text-4xl text-[#EA4335]/10 select-none">📧</div>
        <div className="absolute bottom-40 left-40 text-4xl text-[#4285F4]/10 select-none">💬</div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#4285F4]/10 to-[#EA4335]/10 px-4 py-2 rounded-full border border-[#4285F4]/20 mb-6">
            <Mail className="w-5 h-5 text-[#4285F4]" />
            <span className="text-sm font-medium text-foreground font-google-sans-mono">Get in Touch</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-google-sans mb-6">
            Contact
            <br />
            <span className="bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#34A853] bg-clip-text text-transparent">
              GDGoC-TAE
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-google-sans">
            Have questions about our community? Want to collaborate or sponsor an event? 
            We'd love to hear from you!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <a
                    key={index}
                    href={info.link}
                    className="block bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="flex items-start space-x-4">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: info.color }}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground mb-1 font-google-sans group-hover:text-[#4285F4] transition-colors duration-300">
                          {info.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2 font-google-sans">
                          {info.description}
                        </p>
                        <p className="font-medium text-foreground font-google-sans-mono">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>
            
            {/* Social Media */}
            <div className="bg-gradient-to-r from-[#4285F4]/5 via-[#EA4335]/5 to-[#34A853]/5 border border-border rounded-2xl p-6">
              <h3 className="font-bold text-foreground mb-4 font-google-sans">
                Connect With Us
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={index}
                      href={social.url}
                      className="flex items-center space-x-4 p-3 rounded-xl hover:bg-background/50 transition-all duration-300 group"
                    >
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: social.color }}
                      >
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground font-google-sans group-hover:text-[#4285F4] transition-colors duration-300">
                          {social.name}
                        </p>
                        <p className="text-sm text-muted-foreground font-google-sans">
                          {social.description}
                        </p>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>
            

          </div>
          
          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="bg-card border border-border rounded-3xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-[#4285F4] to-[#34A853] rounded-xl flex items-center justify-center">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground font-google-sans">
                  Send us a Message
                </h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2 font-google-sans">
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 pl-12 bg-input border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#4285F4] focus:border-transparent transition-all duration-200 font-google-sans"
                      placeholder="Enter your full name"
                    />
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2 font-google-sans">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 pl-12 bg-input border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#4285F4] focus:border-transparent transition-all duration-200 font-google-sans"
                      placeholder="Enter your email address"
                    />
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2 font-google-sans">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#4285F4] focus:border-transparent transition-all duration-200 font-google-sans"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2 font-google-sans">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#4285F4] focus:border-transparent transition-all duration-200 resize-none font-google-sans"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#4285F4] to-[#34A853] hover:from-[#3367D6] hover:to-[#2E7D32] text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-google-sans flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
                {submitMessage && (
                  <p className="text-center mt-4 text-sm" style={{ color: submitMessage.includes("Failed") || submitMessage.includes("error") ? "#EA4335" : "#34A853" }}>
                    {submitMessage}
                  </p>
                )}
              </form>
              
              <p className="text-sm text-muted-foreground text-center mt-6 font-google-sans">
                We'll get back to you within 24 hours!
              </p>
            </div>
            

          </div>
        </div>
        

      </div>
    </section>
  )
}