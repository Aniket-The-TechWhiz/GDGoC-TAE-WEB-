export function SponsorsSection() {
  const sponsors = [
    { name: "Google", logo: "G", color: "bg-[#4285F4]" },
    { name: "Microsoft", logo: "M", color: "bg-[#EA4335]" },
    { name: "Meta", logo: "f", color: "bg-[#FBBC05]" },
    { name: "Amazon", logo: "A", color: "bg-[#34A853]" },
    { name: "Netflix", logo: "N", color: "bg-[#4285F4]" },
    { name: "Spotify", logo: "S", color: "bg-[#EA4335]" },
    { name: "Uber", logo: "U", color: "bg-[#FBBC05]" },
    { name: "GitHub", logo: "G", color: "bg-[#34A853]" }
  ]

  return (
    <section id="sponsors" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-800">
            Our <span className="text-[#4285F4]">Sponsors</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Thanks to our amazing sponsors who make this event possible and support the developer community.
          </p>
        </div>

        {/* Sponsor Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className={`w-24 h-24 md:w-32 md:h-32 ${sponsor.color} rounded-2xl flex items-center justify-center text-white text-2xl md:text-3xl font-bold shadow-lg group-hover:scale-105 group-hover:shadow-xl transition-all duration-300 mx-auto`}>
                {sponsor.logo}
              </div>
              <p className="text-center mt-3 text-gray-600 font-medium">{sponsor.name}</p>
            </div>
          ))}
        </div>

        {/* Previous Sponsors Section */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-8 text-gray-700">Previous Event Sponsors</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 opacity-60">
            {[
              { name: "Intel", logo: "I" },
              { name: "Adobe", logo: "A" },
              { name: "IBM", logo: "I" },
              { name: "Oracle", logo: "O" },
              { name: "Tesla", logo: "T" },
              { name: "Zoom", logo: "Z" }
            ].map((sponsor, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-300 rounded-xl flex items-center justify-center text-white text-lg font-bold mx-auto">
                  {sponsor.logo}
                </div>
                <p className="text-sm mt-2 text-gray-500">{sponsor.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Become a Sponsor CTA */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-white rounded-3xl shadow-lg border">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Become a Sponsor</h3>
            <p className="text-gray-600 mb-6 max-w-md">
              Partner with us to reach thousands of passionate developers and showcase your brand 
              to the tech community.
            </p>
            <button className="bg-[#4285F4] hover:bg-[#3367D6] text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300">
              Sponsorship Information
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}