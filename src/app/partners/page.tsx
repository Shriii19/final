import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import { Handshake, Award, Users, TrendingUp } from "lucide-react";
import Image from "next/image";

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-[#0a0b0f] text-white">
      <NavigationHeader />
      
      <main className="pt-[117px]">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-[#0a0b0f] via-[#10121b] to-[#0a0b0f]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our <span className="text-primary">Partners</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                We collaborate with industry leaders to provide the best hosting experience for our customers.
              </p>
            </div>
          </div>
        </section>

        {/* Partner Benefits */}
        <section className="py-16 bg-[#0a0b0f]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Partnership <span className="text-primary">Benefits</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm border border-primary rounded-lg p-6 text-center hover:border-secondary hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5 transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Collaboration</h3>
                <p className="text-gray-400 text-sm">
                  Work together on innovative solutions
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-primary rounded-lg p-6 text-center hover:border-secondary hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5 transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Recognition</h3>
                <p className="text-gray-400 text-sm">
                  Featured across our platforms
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-primary rounded-lg p-6 text-center hover:border-secondary hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5 transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Community</h3>
                <p className="text-gray-400 text-sm">
                  Access to our growing user base
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-primary rounded-lg p-6 text-center hover:border-secondary hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5 transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Growth</h3>
                <p className="text-gray-400 text-sm">
                  Mutual growth opportunities
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Programs */}
        <section className="py-16 bg-[#10121b]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Partnership <span className="text-primary">Programs</span>
            </h2>
            <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
              Choose the partnership program that best fits your business model and start growing with ValtoriaCloud.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm border border-primary/20 rounded-lg p-8 hover:border-primary/40 transition-all">
                <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Technology Partners</h3>
                <p className="text-gray-400 mb-6">
                  Integrate your hardware or software solutions with our platform. Perfect for infrastructure providers, security companies, and development tools.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span>
                    Hardware/software integrations
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span>
                    Co-marketing opportunities
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span>
                    Technical support resources
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-primary/20 rounded-lg p-8 hover:border-primary/40 transition-all">
                <div className="w-16 h-16 bg-green-600/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Affiliate Partners</h3>
                <p className="text-gray-400 mb-6">
                  Earn commissions by referring customers to ValtoriaCloud. Share your referral link and get paid for every successful signup.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span>
                    Competitive referral commissions
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span>
                    Real-time tracking dashboard
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span>
                    Marketing materials provided
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-primary/20 rounded-lg p-8 hover:border-primary/40 transition-all">
                <div className="w-16 h-16 bg-purple-600/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Reseller Partners</h3>
                <p className="text-gray-400 mb-6">
                  Resell ValtoriaCloud services under your own branding. Perfect for agencies, system integrators, and managed service providers.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span>
                    White-label solutions available
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span>
                    Volume discounts and margins
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span>
                    Dedicated account management
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-primary/20 rounded-lg p-8 hover:border-primary/40 transition-all">
                <div className="w-16 h-16 bg-orange-600/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Content Partners</h3>
                <p className="text-gray-400 mb-6">
                  Create content about gaming, hosting, and technology. Perfect for bloggers, YouTubers, streamers, and content creators.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span>
                    Free hosting credits
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span>
                    Exclusive content access
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span>
                    Cross-promotion opportunities
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Become a Partner CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Become a Partner
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Interested in partnering with ValtoriaCloud? Let's discuss how we can work together.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 text-sm font-bold bg-white text-primary rounded-md hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
