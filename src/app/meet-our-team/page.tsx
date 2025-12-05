import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import { Users, Crown, Code, Gamepad2 } from "lucide-react";

export default function MeetOurTeamPage() {
  const teamMembers = [
    {
      name: "DarkDivyam",
      role: "Founder & CEO",
      description: "Visionary leader with a passion for gaming and technology. Founded ValtoriaCloud to provide exceptional hosting solutions.",
      icon: Crown,
      specialties: ["Strategic Planning", "Business Development", "Gaming Industry Expert"]
    },
    {
      name: "Alonozo",
      role: "Co-Founder & CTO",
      description: "Technical genius behind ValtoriaCloud's robust infrastructure. Expert in server architecture and performance optimization.",
      icon: Code,
      specialties: ["Infrastructure Design", "System Architecture", "Performance Optimization"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0b0f] text-white">
      <NavigationHeader />

      <main className="pt-[117px]">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-[#0a0b0f] via-[#10121b] to-[#0a0b0f]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Users className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Meet Our <span className="text-primary">Team</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Get to know the passionate individuals behind ValtoriaCloud who are dedicated to providing you with the best gaming hosting experience.
              </p>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-16 bg-[#0a0b0f]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {teamMembers.map((member, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm border border-primary/30 rounded-lg p-8 hover:border-primary transition-all">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <member.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{member.name}</h3>
                        <p className="text-primary font-semibold">{member.role}</p>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {member.description}
                    </p>

                    <div>
                      <h4 className="text-lg font-semibold mb-3">Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, idx) => (
                          <span key={idx} className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="container mx-auto px-4 text-center">
            <Gamepad2 className="w-16 h-16 mx-auto mb-6 text-white" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Mission
            </h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
              To revolutionize gaming hosting by providing lightning-fast, reliable, and secure servers that enhance the gaming experience for players and communities worldwide.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-sm opacity-90">Constantly pushing boundaries with cutting-edge technology</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Reliability</h3>
                <p className="text-sm opacity-90">99.9% uptime guarantee with enterprise-grade infrastructure</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Community</h3>
                <p className="text-sm opacity-90">Building strong relationships with gamers and developers</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}