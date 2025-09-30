"use client";

import { useEffect, useRef, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Users, Linkedin } from "lucide-react";
import mayurImage from '@/assets/leads/mayur.png'

export function TeamSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Core Lead
  const coreLead = {
    id: 1,
    name: "Mayur Patil",
    role: "Core Lead",
    image: mayurImage,
    linkedin: "https://www.linkedin.com/in/mayur-patil-1451ba2b1/"
  }

  const teamLeads = [
    {
      id: 2,
      name: "Sanchit Kumbhar",
      role: "Technical Lead",
      image: mayurImage,
      linkedin: "https://www.linkedin.com/in/sanchit-kumbhar-85b44a289/"
    },
    {
      id: 3,
      name: "Shrajal Upadhyay",
      role: "Management Lead",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHN0dWRlbnQlMjBpbmRpYW58ZW58MHx8fHwxNzU4Mjk0MzU1fDA&ixlib=rb-4.1.0&q=80&w=300",
      linkedin: "https://www.linkedin.com/in/shrajal-upadhyay-8b5329248/"
    },
    {
      id: 4,
      name: "Rajratna Suralkar",
      role: "Media and Outreach Lead",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHN0dWRlbnR8ZW58MHx8fHwxNzU4Mjk0MzU1fDA&ixlib=rb-4.1.0&q=80&w=300",
      linkedin: "https://www.linkedin.com/in/rajratna-b-suralkar-588727287/"
    }
  ]

  // All Team Members organized by department
  const technicalTeam = [
    {
      id: 5,
      name: "Aniket Yelameli",
      role: "Backend Developer",
      image: mayurImage,
      linkedin: "https://www.linkedin.com/in/aniket-yelameli/"
    },
    {
      id: 6,
      name: "Ayaan Khan",
      role: "Frontend Developer",
      image: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHN0dWRlbnR8ZW58MHx8fHwxNzU4Mjk0MzU1fDA&ixlib=rb-4.1.0&q=80&w=300",
      linkedin: "https://www.linkedin.com/in/ayaankhan0717?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      id: 7,
      name: "Adnan Chherawala",
      role: "Mobile Developer",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBzdHVkZW50fGVufDB8fHx8MTc1ODI5NDM1NXww&ixlib=rb-4.1.0&q=80&w=300",
      linkedin: "https://www.linkedin.com/in/adnanchherawala/"
    },
    {
      id: 8,
      name: "Bhargavi Adhav",
      role: "DevOps Engineer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMHN0dWRlbnR8ZW58MHx8fHwxNzU4Mjk0NDIzfDA&ixlib=rb-4.1.0&q=80&w=300",
      linkedin: "https://www.linkedin.com/in/bhargavi-adhav-97645b289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      id: 15,
      name: "Srujan Pote",
      role: "AI/ML Engineer",
      image: "https://images.unsplash.com/photo-1521119989659-a83eee488004?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTc1ODU0NTc2NXww&ixlib=rb-4.1.0&q=80&w=300",
      linkedin: "https://www.linkedin.com/in/srujanpote?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      id: 16,
      name: "Ritika Mohite",
      role: "Cloud Engineer",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbnxlbnwwfHx8fDE3NTg1NDU3NjV8MA&ixlib=rb-4.1.0&q=80&w=300",
      linkedin: "https://www.linkedin.com/in/ritika-mohite-152931289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      id: 17,
      name: "Shaunak Naik",
      role: "QA Engineer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTc1ODU0NTc2NXww&ixlib=rb-4.1.0&q=80&w=300",
      linkedin: "https://www.linkedin.com/in/shaunak-naik-684644375/"
    },
  ]

  const managementTeam = [
    {
      id: 9,
      name: "Aryan Raina",
      image: "https://images.unsplash.com/photo-1557862921-37829c790f19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbnxlbnwwfHx8fDE3NTg1NDU3NjV8MA&ixlib=rb-4.1.0&q=80&w=300",
      linkedin: "https://www.linkedin.com/in/aryan-raina-041570322/"
    },
    {
      id: 10,
      name: "Shruti Ghuge",
      image: "https://images.unsplash.com/photo-1494790108755-2616c6c41b31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHN0dWRlbnR8ZW58MHx8fHwxNzU4Mjk0NDIzfDA&ixlib=rb-4.1.0&q=80&w=300",
      linkedin: "https://www.linkedin.com/in/shruti-ghuge-182977364/"
    },
    {
      id: 11,
      name: "Vaidehi Doke",
      image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBzdHVkZW50fGVufDB8fHx8MTc1ODI5NDQyM3ww&ixlib=rb-4.1.0&q=80&w=300",
      linkedin: "https://www.linkedin.com/in/vaidehi-doke-22062005s/"
    },
    {
      id: 18,
      name: "Piyush Sakhalkar",
      image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTc1ODU0NTc2NXww&ixlib=rb-4.1.0&q=80&w=300",
      linkedin: "https://www.linkedin.com/in/piyush-sakhalkar-363931289/"
    },
    {
      id: 19,
      name: "Eshaan Razdan",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbnxlbnwwfHx8fDE3NTg1NDU3NjV8MA&ixlib=rb-4.1.0&q=80&w=300",
      linkedin: "https://www.linkedin.com/in/eshaan-razdan-625320320/"
    },
    {
      id: 20,
      name: "Sakshi Dube",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTc1ODU0NTc2NXww&ixlib=rb-4.1.0&q=80&w=300",
      linkedin: "https://www.linkedin.com/in/sakshi-dubey-b48477270/"
    },
    {
      id: 21,
      name: "Pavankumar Thakur",
      image: "https://images.unsplash.com/photo-1557862921-37829c790f19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbnxlbnwwfHx8fDE3NTg1NDU3NjV8MA&ixlib=rb-4.1.0&q=80&w=300",
      linkedin: "https://www.linkedin.com/in/pavankumar-thakur-b52757384/"
    },
    {
      id: 22,
      name: "Rohan Doke",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTc1ODU0NTc2NXww&ixlib=rb-4.1.0&q=80&w=300",
      linkedin: "https://www.linkedin.com/in/rohan-doke-9b9a8a359?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      id: 23,
      name: "Sneha Koul",
      image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbnxlbnwwfHx8fDE3NTg1NDU3NjV8MA&ixlib=rb-4.1.0&q=80&w=300",
      linkedin: "https://www.linkedin.com/in/sneha-koul-192737375/"
    },
    {
      id: 24,
      name: "Sanika Kadam",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTc1ODU0NTc2NXww&ixlib=rb-4.1.0&q=80&w=300",
      linkedin: "https://www.linkedin.com/in/sanika-kadam-01ab57356/"
    },
    {
      id: 25,
      name: "Tanvi Chougule",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbnxlbnwwfHx8fDE3NTg1NDU3NjV8MA&ixlib=rb-4.1.0&q=80&w=300",
      linkedin: "https://www.linkedin.com/in/tanvi-chougule-501806330/"
    },
    {
      id: 30,
      name: "Shreya Kalekar",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbnxlbnwwfHx8fDE3NTg1NDU3NjV8MA&ixlib=rb-4.1.0&q=80&w=300",
      linkedin: "https://www.linkedin.com/in/shreya-kalekar-077587384?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
  ]

  const mediaTeam = [
    {
      id: 12,
      name: "Pradnya Pol",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBzdHVkZW50fGVufDB8fHx8MTc1ODI5NDQyM3ww&ixlib=rb-4.1.0&q=80&w=300",
      linkedin: "https://www.linkedin.com/in/pradnya-pol-218448289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      id: 13,
      name: "Kushal Agrawal",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHN0dWRlbnR8ZW58MHx8fHwxNzU4Mjk0NDIzfDA&ixlib=rb-4.1.0&q=80&w=300",
      linkedin: "https://in.linkedin.com/in/kushal-agrawal-258ba9385"
    },
    {
      id: 14,
      name: "Vedant Dandge",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBzdHVkZW50JTIwaW5kaWFufGVufDB8fXx8MTc1ODI5NDM1NXww&ixlib=rb-4.1.0&q=80&w=300",
      linkedin: "https://www.linkedin.com/in/vedant-dandge-481058319"
    },
    {
      id: 26,
      name: "Shubham Sonawane",
      image: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTc1ODU0NTc2NXww&ixlib=rb-4.1.0&q=80&w=300",
      linkedin: "https://linkedin.com/in/nisha-patel"
    },
    {
      id: 27,
      name: "Atharva Guldagad",
      image: "https://images.unsplash.com/photo-1615109398623-88346a601842?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbnxlbnwwfHx8fDE3NTg1NDU3NjV8MA&ixlib=rb-4.1.0&q=80&w=300",
      linkedin: "https://www.linkedin.com/in/atharva-guldagad-b09277331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      id: 28,
      name: "Pratiksha Rajput",
      image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTc1ODU0NTc2NXww&ixlib=rb-4.1.0&q=80&w=300",
      linkedin: "https://www.linkedin.com/in/pratiksha-rajput-5b3544340?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      id: 29,
      name: "Samarth Gavali",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbnxlbnwwfHx8fDE3NTg1NDU3NjV8MA&ixlib=rb-4.1.0&q=80&w=300",
      linkedin: "https://www.linkedin.com/in/samarth-gavali-91676b356?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
  ]


  // Handle card click to open LinkedIn profile
  const handleCardClick = (linkedinUrl: string) => {
    window.open(linkedinUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="team"
      ref={sectionRef}
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#4285F4]/5 to-transparent"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-gradient-to-br from-[#34A853]/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#4285F4]/10 to-[#34A853]/10 px-4 py-2 rounded-full border border-[#4285F4]/20 mb-6">
            <Users className="w-5 h-5 text-[#4285F4]" />
            <span className="text-sm font-medium text-foreground font-google-sans-mono">
              Our Team
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-google-sans mb-6">
            Meet the
            <br />
            <span className="bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#34A853] bg-clip-text text-transparent">
              GDGoC-TAE Team
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-google-sans">
            Passionate students driving innovation and fostering
            technology education at Trinity Academy of
            Engineering.
          </p>
        </div>

        {/* 1. Core Lead Section - Positioned at the very top */}
        <div
          className={`mb-20 transition-all duration-1000 delay-200 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center font-google-sans">
            Core Lead
          </h3>
          <div className="flex justify-center">
            <div
              onClick={() => handleCardClick(coreLead.linkedin)}
              className="relative bg-card border border-border rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300 hover:shadow-xl max-w-sm cursor-pointer group"
            >
              <div className="mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-muted ring-4 ring-[#4285F4]/20">
                  <ImageWithFallback
                    src={coreLead.image}
                    alt={coreLead.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2 font-google-sans">
                {coreLead.name}
              </h4>
              <p className="text-muted-foreground font-google-sans">
                {coreLead.role}
              </p>

              {/* LinkedIn Icon - Top Right */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-[#0077B5] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <Linkedin className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* 2. Team Leads Section - Below Core Lead */}
        <div
          className={`mb-20 transition-all duration-1000 delay-400 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center font-google-sans">
            Team Leads
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {teamLeads.map((lead) => (
              <div
                key={lead.id}
                onClick={() => handleCardClick(lead.linkedin)}
                className="relative bg-card border border-border rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 hover:shadow-lg cursor-pointer group"
              >
                <div className="mb-4">
                  <div className="w-20 h-20 mx-auto rounded-full overflow-hidden bg-muted">
                    <ImageWithFallback
                      src={lead.image}
                      alt={lead.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h4 className="font-bold text-lg text-foreground mb-1 font-google-sans">
                  {lead.name}
                </h4>
                <p className="text-muted-foreground font-google-sans text-sm">
                  {lead.role}
                </p>

                {/* LinkedIn Icon - Top Right */}
                <div className="absolute top-3 right-3 w-7 h-7 bg-[#0077B5] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <Linkedin className="w-3.5 h-3.5 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. All Team Members Section - Combined and Organized by Department */}
        <div
          className={`mb-16 transition-all duration-1000 delay-600 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl font-bold text-foreground mb-12 text-center font-google-sans">
            Our Team Members
          </h3>

          {/* Technical Team - Horizontal Scrollable */}
          <div className="mb-12">
            <h4 className="text-xl font-bold text-foreground mb-6 text-center font-google-sans text-[#4285F4]">
              Technical Team
            </h4>
            <div className="relative">
              {/* Horizontal Scroll Container */}
              <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide px-4">
                {technicalTeam.map((member) => (
                  <div
                    key={member.id}
                    onClick={() =>
                      handleCardClick(member.linkedin)
                    }
                    className="relative bg-card/70 rounded-2xl border border-border p-6 text-center hover:bg-card hover:scale-105 transition-all duration-300 flex-shrink-0 w-[220px] shadow-lg cursor-pointer group"
                  >
                    {/* Circular Photo */}
                    <div className="mb-4">
                      <div className="w-20 h-20 mx-auto rounded-full overflow-hidden bg-muted ring-2 ring-[#4285F4]/30">
                        <ImageWithFallback
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Name and Title */}
                    <div className="space-y-2">
                      <h5 className="font-bold text-foreground font-google-sans text-lg leading-tight">
                        {member.name}
                      </h5>
                      <p className="text-muted-foreground font-google-sans text-sm leading-relaxed">
                        {member.role}
                      </p>
                    </div>

                    {/* LinkedIn Icon - Top Right */}
                    <div className="absolute top-3 right-3 w-7 h-7 bg-[#0077B5] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      <Linkedin className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Scroll Indicators */}
              <div className="absolute top-1/2 left-0 w-6 h-16 bg-gradient-to-r from-background to-transparent pointer-events-none transform -translate-y-1/2"></div>
              <div className="absolute top-1/2 right-0 w-6 h-16 bg-gradient-to-l from-background to-transparent pointer-events-none transform -translate-y-1/2"></div>
            </div>
          </div>

          {/* Management Team - Horizontal Scrollable */}
          <div className="mb-12">
            <h4 className="text-xl font-bold text-foreground mb-6 text-center font-google-sans text-[#34A853]">
              Management Team
            </h4>
            <div className="relative">
              {/* Horizontal Scroll Container */}
              <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide px-4">
                {managementTeam.map((member) => (
                  <div
                    key={member.id}
                    onClick={() =>
                      handleCardClick(member.linkedin)
                    }
                    className="relative bg-card/70 rounded-2xl border border-border p-6 text-center hover:bg-card hover:scale-105 transition-all duration-300 flex-shrink-0 w-[220px] shadow-lg cursor-pointer group"
                  >
                    {/* Circular Photo */}
                    <div className="mb-4">
                      <div className="w-20 h-20 mx-auto rounded-full overflow-hidden bg-muted ring-2 ring-[#34A853]/30">
                        <ImageWithFallback
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Name and Title */}
                    <div className="space-y-2">
                      <h5 className="font-bold text-foreground font-google-sans text-lg leading-tight">
                        {member.name}
                      </h5>
                      <p className="text-muted-foreground font-google-sans text-sm leading-relaxed">
                        {member.role}
                      </p>
                    </div>

                    {/* LinkedIn Icon - Top Right */}
                    <div className="absolute top-3 right-3 w-7 h-7 bg-[#0077B5] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      <Linkedin className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Scroll Indicators */}
              <div className="absolute top-1/2 left-0 w-6 h-16 bg-gradient-to-r from-background to-transparent pointer-events-none transform -translate-y-1/2"></div>
              <div className="absolute top-1/2 right-0 w-6 h-16 bg-gradient-to-l from-background to-transparent pointer-events-none transform -translate-y-1/2"></div>
            </div>
          </div>

          {/* Media and Outreach Team - Horizontal Scrollable */}
          <div className="mb-12">
            <h4 className="text-xl font-bold text-foreground mb-6 text-center font-google-sans text-[#EA4335]">
              Media and Outreach Team
            </h4>
            <div className="relative">
              {/* Horizontal Scroll Container */}
              <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide px-4">
                {mediaTeam.map((member) => (
                  <div
                    key={member.id}
                    onClick={() =>
                      handleCardClick(member.linkedin)
                    }
                    className="relative bg-card/70 rounded-2xl border border-border p-6 text-center hover:bg-card hover:scale-105 transition-all duration-300 flex-shrink-0 w-[220px] shadow-lg cursor-pointer group"
                  >
                    {/* Circular Photo */}
                    <div className="mb-4">
                      <div className="w-20 h-20 mx-auto rounded-full overflow-hidden bg-muted ring-2 ring-[#EA4335]/30">
                        <ImageWithFallback
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Name and Title */}
                    <div className="space-y-2">
                      <h5 className="font-bold text-foreground font-google-sans text-lg leading-tight">
                        {member.name}
                      </h5>
                      <p className="text-muted-foreground font-google-sans text-sm leading-relaxed">
                        {member.role}
                      </p>
                    </div>

                    {/* LinkedIn Icon - Top Right */}
                    <div className="absolute top-3 right-3 w-7 h-7 bg-[#0077B5] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      <Linkedin className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Scroll Indicators */}
              <div className="absolute top-1/2 left-0 w-6 h-16 bg-gradient-to-r from-background to-transparent pointer-events-none transform -translate-y-1/2"></div>
              <div className="absolute top-1/2 right-0 w-6 h-16 bg-gradient-to-l from-background to-transparent pointer-events-none transform -translate-y-1/2"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}