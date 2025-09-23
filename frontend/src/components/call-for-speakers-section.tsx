import { Button } from "./ui/button"
import { Mic, Users, Award, Calendar } from "lucide-react"

export function CallForSpeakersSection() {
  const benefits = [
    {
      icon: Mic,
      title: "Share Your Expertise",
      description: "Present your knowledge to a passionate audience of developers and tech enthusiasts.",
      color: "text-blue-500"
    },
    {
      icon: Users,
      title: "Network & Connect",
      description: "Meet fellow speakers, industry leaders, and build valuable professional relationships.",
      color: "text-red-500"
    },
    {
      icon: Award,
      title: "Gain Recognition",
      description: "Establish yourself as a thought leader in your field and boost your professional profile.",
      color: "text-yellow-500"
    },
    {
      icon: Calendar,
      title: "Flexible Topics",
      description: "We welcome talks on various tech topics - from beginner-friendly to advanced concepts.",
      color: "text-green-500"
    }
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-yellow-500/10 to-green-500/10 rounded-full border border-yellow-500/20">
            <Mic className="w-4 h-4 text-yellow-500" />
            <span className="text-yellow-500 text-sm font-medium">Call for Speakers</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Your <span className="bg-gradient-to-r from-yellow-500 to-green-500 bg-clip-text text-transparent">Voice</span> Matters
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Are you passionate about technology and eager to share your knowledge? 
            We're looking for inspiring speakers who can engage, educate, and motivate 
            our community of developers.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div key={index} className="text-center p-6 rounded-2xl bg-card border hover:shadow-lg transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-background border mb-4 ${benefit.color}`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className={`text-lg font-semibold mb-3 ${benefit.color}`}>
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Topics We're Looking For */}
        <div className="bg-gradient-to-r from-blue-500/5 via-red-500/5 to-green-500/5 rounded-3xl p-8 md:p-12 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Topics We're Looking For</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-blue-500">Development</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Web Development</li>
                <li>• Mobile Development</li>
                <li>• Full-Stack Development</li>
                <li>• DevOps & Infrastructure</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-red-500">Emerging Tech</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Machine Learning & AI</li>
                <li>• Cloud Computing</li>
                <li>• Blockchain & Web3</li>
                <li>• IoT & Edge Computing</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-green-500">Best Practices</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Code Quality & Testing</li>
                <li>• Team Collaboration</li>
                <li>• Open Source Contribution</li>
                <li>• Career Development</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-yellow-500 to-green-500 hover:from-yellow-600 hover:to-green-600 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Proposal Submissions are Open
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Deadline: January 15, 2025 | We'll get back to you within 2 weeks
          </p>
        </div>
      </div>
    </section>
  )
}