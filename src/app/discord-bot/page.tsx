import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import { Bot, Zap, Shield, Clock, Code, Cpu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DiscordBotPage() {
  return (
    <div className="min-h-screen bg-[#0a0b0f] text-white">
      <NavigationHeader />
      
      <main className="pt-[117px]">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0b0f] via-[#10121b] to-[#0a0b0f]" />
            <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          </div>

          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Discord Bot <span className="text-primary">Hosting</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Keep your Discord bots online 24/7 with our reliable and affordable hosting. 
                Fast deployment, low latency, and automatic restarts included.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#pricing"
                  className="inline-flex items-center justify-center px-8 py-3 text-sm font-bold bg-gradient-to-r from-primary to-secondary rounded-md hover:opacity-90 transition-opacity"
                >
                  View Plans
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 bg-[#0a0b0f]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Host Your Bot <span className="text-primary">With Us</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm border border-primary rounded-lg p-6 hover:border-secondary hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">24/7 Uptime</h3>
                    <p className="text-gray-400 text-sm">
                      Your bot stays online around the clock with automatic restarts.
                    </p>
                  </div>
                  <div className="w-12 h-12 border-l border-b border-primary rounded-tr-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-primary rounded-lg p-6 hover:border-secondary hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Fast Performance</h3>
                    <p className="text-gray-400 text-sm">
                      ECC memory and high-speed processors ensure lightning-fast responses.
                    </p>
                  </div>
                  <div className="w-12 h-12 border-l border-b border-primary rounded-tr-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-primary rounded-lg p-6 hover:border-secondary hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Low Latency</h3>
                    <p className="text-gray-400 text-sm">
                      Optimized network routing keeps your bot responsive at all times.
                    </p>
                  </div>
                  <div className="w-12 h-12 border-l border-b border-primary rounded-tr-lg flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-primary rounded-lg p-6 hover:border-secondary hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Easy Deployment</h3>
                    <p className="text-gray-400 text-sm">
                      Upload your bot and get it running in minutes with our simple interface.
                    </p>
                  </div>
                  <div className="w-12 h-12 border-l border-b border-primary rounded-tr-lg flex items-center justify-center">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-primary rounded-lg p-6 hover:border-secondary hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Advanced Security</h3>
                    <p className="text-gray-400 text-sm">
                      Your bot runs in a secure, isolated environment with DDoS protection.
                    </p>
                  </div>
                  <div className="w-12 h-12 border-l border-b border-primary rounded-tr-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-primary rounded-lg p-6 hover:border-secondary hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Managed Services</h3>
                    <p className="text-gray-400 text-sm">
                      We handle updates, monitoring, and maintenance for you.
                    </p>
                  </div>
                  <div className="w-12 h-12 border-l border-b border-primary rounded-tr-lg flex items-center justify-center">
                    <Bot className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 bg-[#10121b]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Bot <span className="text-primary">Pricing</span>
            </h2>
            <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
              Affordable plans designed for Discord bot developers of all sizes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Basic Plan */}
              <div className="bg-[#0a0b0f] border border-primary/30 rounded-lg overflow-hidden hover:border-primary transition-all">
                <div className="relative h-32">
                  <Image
                    src="/assets/images/dchost.jpg"
                    alt="Bot Hosting"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0f] to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Basic</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">₹50</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">512MB DDR4 RAM</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">2.5GB NVMe SSD</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">2 MySQL Databases</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">1 GBit/s Connection</span>
                    </li>
                  </ul>
                  <button className="w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-md font-bold hover:opacity-90 transition-opacity">
                    Order Now
                  </button>
                </div>
              </div>

              {/* Standard Plan */}
              <div className="bg-[#0a0b0f] border-2 border-primary rounded-lg overflow-hidden relative transform scale-105">
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-secondary text-center py-2 text-sm font-bold">
                  MOST POPULAR
                </div>
                <div className="relative h-32 mt-10">
                  <Image
                    src="/assets/images/dchost.jpg"
                    alt="Bot Hosting"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0f] to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Standard</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">₹100</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">1GB DDR4 RAM</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">5GB NVMe SSD</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">3 MySQL Databases</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">1 GBit/s Connection</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">Priority Support</span>
                    </li>
                  </ul>
                  <button className="w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-md font-bold hover:opacity-90 transition-opacity">
                    Order Now
                  </button>
                </div>
              </div>

              {/* Premium Plan */}
              <div className="bg-[#0a0b0f] border border-primary/30 rounded-lg overflow-hidden hover:border-primary transition-all">
                <div className="relative h-32">
                  <Image
                    src="/assets/images/dchost.jpg"
                    alt="Bot Hosting"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0f] to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Premium</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">₹150</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">2GB DDR4 RAM</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">10GB NVMe SSD</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">5 MySQL Databases</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">1 GBit/s Connection</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">Dedicated Support</span>
                    </li>
                  </ul>
                  <button className="w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-md font-bold hover:opacity-90 transition-opacity">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Host Your Bot?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Get your Discord bot online in minutes with our easy setup process.
            </p>
            <Link
              href="#pricing"
              className="inline-flex items-center justify-center px-8 py-3 text-sm font-bold bg-white text-primary rounded-md hover:bg-gray-100 transition-colors"
            >
              Get Started Now
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
