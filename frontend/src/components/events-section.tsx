'use client'

import { useState, useEffect, useRef } from 'react'
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react'

interface Event {
  _id: string;
  title: string;
  type: string; // This will be used as the category
  status: 'Upcoming' | 'Past Event';
  date: string;
  time: string;
  location: string;
  url?: string;
}

export function EventsSection() {
  const [activeFilter, setActiveFilter] = useState("All Events")
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const [events, setEvents] = useState<Event[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
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

  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch('http://localhost:5000/api/events');
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        
        // Sort events: Upcoming first, then Past.
        // Upcoming events are sorted by date ascending (soonest first).
        // Past events are sorted by date descending (most recent first).
        const sortedData = data.sort((a: Event, b: Event) => {
          const dateA = new Date(a.date).getTime();
          const dateB = new Date(b.date).getTime();

          if (a.status === 'Upcoming' && b.status === 'Past Event') {
            return -1; // a (Upcoming) comes before b (Past)
          }
          if (a.status === 'Past Event' && b.status === 'Upcoming') {
            return 1; // b (Upcoming) comes before a (Past)
          }

          if (a.status === 'Upcoming') {
            return dateA - dateB; // Sort upcoming events chronologically
          }

          return dateB - dateA; // Sort past events reverse-chronologically
        });

        setEvents(sortedData);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'conference':
        return '#4285F4';
      case 'workshop':
        return '#EA4335';
      case 'study-jam':
        return '#FBBC05';
      case 'bootcamp':
        return '#9C27B0';
      case 'tech talk':
        return '#FF5722';
      default:
        return '#34A853';
    }
  };

  const filters = ["All Events", "Upcoming", "Past Events"]

  const filteredEvents = events.filter(event => {
    if (activeFilter === "All Events") return true
    if (activeFilter === "Upcoming") return event.status === "Upcoming"
    if (activeFilter === "Past Events") return event.status === "Past Event"
    return true
  })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    })
  }

  const handleProposeEventClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="events" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-gradient-to-br from-[#4285F4]/5 to-transparent"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-[#34A853]/5 to-transparent"></div>
        
        {/* Calendar grid pattern */}
        <div className="absolute top-40 right-40 w-24 h-24 grid grid-cols-3 gap-1 opacity-10">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="bg-[#FBBC05] rounded-sm"></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#4285F4]/10 to-[#FBBC05]/10 px-4 py-2 rounded-full border border-[#4285F4]/20 mb-6">
            <Calendar className="w-5 h-5 text-[#4285F4]" />
            <span className="text-sm font-medium text-foreground font-google-sans-mono">Events & Workshops</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-google-sans mb-6">
            Join Our
            <br />
            <span className="bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#34A853] bg-clip-text text-transparent">
              Amazing Events
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-google-sans">
            From workshops to hackathons, study jams to tech talks - discover learning 
            opportunities at Trinity Academy that will accelerate your developer journey.
          </p>
        </div>
        
        {/* Filter Bar */}
        <div className={`flex justify-center mb-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex bg-card rounded-full p-1 shadow-lg border border-border">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 font-google-sans ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-[#4285F4] to-[#34A853] text-white shadow-md'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        
        {/* Events Horizontal Scroll */}
        <div className={`transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="relative">
            {isLoading && <div className="text-center text-muted-foreground">Loading events...</div>}
            {error && <div className="text-center text-red-500">Error: {error}</div>}
            {!isLoading && !error && (
              <>
            {/* Horizontal Scroll Container */}
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide px-4">
              {filteredEvents.map((event, index) => (
                <div
                  key={event._id}
                  className="group bg-card border border-border rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex-shrink-0 w-[320px]"
                >
                  
                  {/* Event content */}
                  <div className="p-6 space-y-4">
                    
                    {/* Header with status and category */}
                    <div className="flex items-center justify-between mb-4">
                      <span 
                        className="px-3 py-1 rounded-full text-white text-sm font-medium font-google-sans-mono"
                        style={{ backgroundColor: getCategoryColor(event.type) }}
                      >
                        {event.type}
                      </span>
                      <span 
                        className={`px-3 py-1 rounded-full text-white text-sm font-medium font-google-sans-mono ${
                          event.status === 'Upcoming' ? 'bg-[#34A853]' : 'bg-[#6B7280]'
                        }`}
                      >
                        {event.status}
                      </span>
                    </div>
                    
                    {/* Event Title */}
                    <h3 className="text-xl font-bold text-foreground font-google-sans group-hover:text-[#4285F4] transition-colors duration-300 mb-4">
                      {event.title}
                    </h3>
                    
                    {/* Event details */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 text-[#4285F4]" />
                        <span className="font-google-sans">
                          {formatDate(event.date)}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 text-[#EA4335]" />
                        <span className="font-google-sans">{event.time}</span>
                      </div>
                      
                      <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 text-[#FBBC05]" />
                        <span className="font-google-sans">{event.location}</span>
                      </div>
                    </div>
                    
                    {/* Action button */}
                    <div className="pt-4">
                      <button 
                        onClick={() => {
                          if (event.url) {
                            window.open(event.url, '_blank', 'noopener,noreferrer');
                          }
                        }}
                        className={`w-full py-3 px-4 rounded-full font-medium transition-all duration-300 font-google-sans ${
                          event.status === 'Upcoming' && event.url
                            ? 'bg-gradient-to-r from-[#4285F4] to-[#34A853] hover:from-[#3367D6] hover:to-[#2E7D32] text-white hover:shadow-lg group-hover:scale-105'
                            : 'bg-muted text-muted-foreground cursor-not-allowed'
                        }`}
                        disabled={event.status === 'Past Event' || !event.url}
                      >
                        {event.status === 'Upcoming' ? (
                          event.url ? (
                          <span className="flex items-center justify-center space-x-2">
                            <span>Register Now</span>
                            <ExternalLink className="w-4 h-4" />
                          </span>) : ('Registration Closed')
                        ) : (
                          'Event Completed'
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Scroll Indicators */}
            <div className="absolute top-1/2 left-0 w-8 h-24 bg-gradient-to-r from-background to-transparent pointer-events-none transform -translate-y-1/2"></div>
            <div className="absolute top-1/2 right-0 w-8 h-24 bg-gradient-to-l from-background to-transparent pointer-events-none transform -translate-y-1/2"></div>

            {/* Empty state - moved inside the conditional block */}
            {filteredEvents.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">📅</div>
                <h3 className="text-xl font-semibold text-foreground mb-2 font-google-sans">No events found</h3>
                <p className="text-muted-foreground font-google-sans">Check back later for upcoming events in this category.</p>
              </div>
            )}
            </>
            )}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-[#4285F4]/5 via-[#EA4335]/5 to-[#34A853]/5 border border-border rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4 font-google-sans">
              Want to Host an Event?
            </h3>
            <p className="text-muted-foreground mb-6 font-google-sans">
              Have an idea for a workshop or want to organize a study jam? 
              Let's make it happen together!
            </p>
            <button
              onClick={handleProposeEventClick}
              className="bg-gradient-to-r from-[#FBBC05] to-[#EA4335] hover:from-[#F9AB00] hover:to-[#D23E30] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-google-sans"
            >
              Propose an Event
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}