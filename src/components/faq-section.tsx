'use client'

import { useState, useEffect, useRef } from 'react'
import { Plus, Minus, HelpCircle, Linkedin } from 'lucide-react'

export function FAQSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)
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

  const faqs = [
    {
      question: "What is GDGoC-TAE?",
      answer: "Google Developer Groups on Campus at Trinity Academy of Engineering (GDGoC-TAE) is a student-led community focused on learning Google technologies, building projects, and fostering innovation among engineering students."
    },
    {
      question: "Who can join GDGoC-TAE?",
      answer: "Any student at Trinity Academy of Engineering can join our community. We welcome students from all departments and years who are interested in technology and development."
    },
    {
      question: "What kind of events do you organize?",
      answer: "We organize workshops, study jams, hackathons, tech talks, coding competitions, and hands-on sessions covering various Google technologies like Android development, Web technologies, Cloud computing, and AI/ML."
    },
    {
      question: "Is there any membership fee?",
      answer: "No, membership is completely free! All our events, workshops, and resources are provided at no cost to Trinity Academy students."
    },
    {
      question: "How can I participate in events?",
      answer: "Keep an eye on our social media channels and campus announcements. You can register for events through our website or by contacting any team member directly."
    },
    {
      question: "Can I become a speaker or organize events?",
      answer: "Absolutely! We encourage students to share their knowledge and organize events. If you have expertise in any technology or want to conduct a workshop, reach out to our team."
    },
    {
      question: "What resources do you provide?",
      answer: "We provide access to Google developer tools, learning materials, project guidance, mentorship opportunities, and connections with industry professionals and Google experts."
    }
  ]

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="faq" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-[#4285F4]/5 to-transparent"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-gradient-to-br from-[#34A853]/5 to-transparent"></div>
        
        {/* Question mark decorations */}
        <div className="absolute top-40 left-10 text-6xl text-[#EA4335]/10 font-google-sans select-none">?</div>
        <div className="absolute bottom-40 right-10 text-6xl text-[#4285F4]/10 font-google-sans select-none">?</div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#4285F4]/10 to-[#FBBC05]/10 px-4 py-2 rounded-full border border-[#4285F4]/20 mb-6">
            <HelpCircle className="w-5 h-5 text-[#4285F4]" />
            <span className="text-sm font-medium text-foreground font-google-sans-mono">FAQ</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-google-sans mb-6">
            Frequently
            <br />
            <span className="bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#34A853] bg-clip-text text-transparent">
              Asked Questions
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-google-sans">
            Got questions? We've got answers! Find everything you need to know 
            about joining and participating in GDGoC-TAE.
          </p>
        </div>
        
        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`mb-4 transition-all duration-1000 delay-${index * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-accent transition-colors duration-200"
                >
                  <span className="font-medium text-foreground font-google-sans pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <Minus className="w-5 h-5 text-[#4285F4]" />
                    ) : (
                      <Plus className="w-5 h-5 text-[#4285F4]" />
                    )}
                  </div>
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${
                  openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <div className="px-6 pb-5">
                    <p className="text-muted-foreground leading-relaxed font-google-sans">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Contact Section */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-[#4285F4]/5 via-[#EA4335]/5 to-[#34A853]/5 border border-border rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4 font-google-sans">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-6 font-google-sans">
              Reach out to our team! We're here to help and answer any questions 
              you might have about GDGoC-TAE.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleContactClick}
                className="bg-gradient-to-r from-[#4285F4] to-[#34A853] hover:from-[#3367D6] hover:to-[#2E7D32] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-google-sans"
              >
                Contact Us
              </button>
              <button
                onClick={() => window.open('https://linkedin.com/in/mayur', '_blank', 'noopener,noreferrer')}
                className="border-2 border-[#0077B5] text-[#0077B5] hover:bg-[#0077B5] hover:text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 font-google-sans flex items-center justify-center space-x-2"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}