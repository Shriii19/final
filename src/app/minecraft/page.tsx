import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import { Server, Zap, Shield, Clock, Headset, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MinecraftPage() {
  return (
    <div className="min-h-screen bg-[#0a0b0f] text-white">
      <NavigationHeader />
      
      <main className="pt-[117px]">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/images/mchost.png"
              alt="Minecraft Background"
              fill
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0b0f]/50 via-[#0a0b0f]/70 to-[#0a0b0f]" />
          </div>

          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Minecraft Server <span className="text-primary">Hosting</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Experience lag-free gameplay with our high-performance Minecraft servers. 
                DDoS protected, instant setup, and 24/7 support included.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#plans"
                  className="inline-flex items-center justify-center px-8 py-3 text-sm font-bold bg-gradient-to-r from-primary to-secondary rounded-md hover:opacity-90 transition-opacity"
                >
                  View Plans
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Plan Selection Section */}
        <section id="plans" className="py-16 bg-[#10121b]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Choose Your <span className="text-primary">Hosting Tier</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Select the perfect hosting solution for your Minecraft server. From budget-friendly options to high-performance premium plans.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Budget Plans Card */}
              <Link href="/minecraft/budget" className="group">
                <div className="bg-[#0a0b0f] border border-primary/30 rounded-lg overflow-hidden hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/10 transition-all duration-300 h-full">
                  <div className="p-8">
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-16 h-16 bg-yellow-500/10 border border-yellow-500/30 rounded-full flex items-center justify-center">
                        <Zap className="w-6 h-6 text-yellow-400" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-center text-yellow-400">Budget Hosting</h3>

                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-yellow-400 mb-1">Intel Xeon E5 2682 v4</div>
                      <div className="text-sm text-gray-400">Starting from ₹149/month</div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center">
                        <span className="text-yellow-400 mr-3">✓</span>
                        <span className="text-sm">Perfect for small communities</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-yellow-400 mr-3">✓</span>
                        <span className="text-sm">NVMe SSD Storage</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-yellow-400 mr-3">✓</span>
                        <span className="text-sm">DDoS Protection included</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-yellow-400 mr-3">✓</span>
                        <span className="text-sm">Easy control panel</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-yellow-400 mr-3">✓</span>
                        <span className="text-sm">24/7 support</span>
                      </li>
                    </ul>

                    <div className="text-center">
                      <div className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold rounded-md group-hover:from-yellow-500 group-hover:to-yellow-400 transition-all duration-300">
                        View Budget Plans
                        <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Premium Plans Card */}
              <Link href="/minecraft/premium" className="group">
                <div className="bg-[#0a0b0f] border border-primary/30 rounded-lg overflow-hidden hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300 h-full">
                  <div className="p-8">
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-16 h-16 bg-red-500/10 border border-red-500/30 rounded-full flex items-center justify-center">
                        <Server className="w-6 h-6 text-red-400" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-center text-red-400">Premium Hosting</h3>

                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-red-400 mb-1">AMD Ryzen 7 7700</div>
                      <div className="text-sm text-gray-400">Starting from ₹179/month</div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center">
                        <span className="text-red-400 mr-3">✓</span>
                        <span className="text-sm">High-performance servers</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-red-400 mr-3">✓</span>
                        <span className="text-sm">NVMe SSD Storage</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-red-400 mr-3">✓</span>
                        <span className="text-sm">Pterodactyl control panel</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-red-400 mr-3">✓</span>
                        <span className="text-sm">Advanced DDoS protection</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-red-400 mr-3">✓</span>
                        <span className="text-sm">Priority support</span>
                      </li>
                    </ul>

                    <div className="text-center">
                      <div className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-md group-hover:from-red-500 group-hover:to-red-400 transition-all duration-300">
                        View Premium Plans
                        <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Additional Info */}
            <div className="mt-12 text-center">
              <p className="text-gray-400 mb-4">
                All plans include instant setup, 24/7 uptime guarantee, and free basic support.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-primary" />
                  <span>DDoS Protected</span>
                </div>
                <div className="flex items-center">
                  <Zap className="w-4 h-4 mr-2 text-primary" />
                  <span>Instant Setup</span>
                </div>
                <div className="flex items-center">
                  <Headset className="w-4 h-4 mr-2 text-primary" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 bg-[#0a0b0f]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Choose Our <span className="text-primary">Minecraft Hosting</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm border border-primary rounded-lg p-6 hover:border-secondary hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Instant Setup</h3>
                    <p className="text-gray-400 text-sm">
                      Your server is ready to play within seconds. No waiting, no hassle.
                    </p>
                  </div>
                  <div className="w-12 h-12 border-l border-b border-primary rounded-tr-lg flex items-center justify-center">
                    <Server className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-primary rounded-lg p-6 hover:border-secondary hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">DDoS Protection</h3>
                    <p className="text-gray-400 text-sm">
                      Enterprise-grade protection keeps your server online and secure.
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
                    <h3 className="text-xl font-bold mb-2">High Performance</h3>
                    <p className="text-gray-400 text-sm">
                      Latest hardware ensures smooth gameplay for you and your players.
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
                    <h3 className="text-xl font-bold mb-2">99.9% Uptime</h3>
                    <p className="text-gray-400 text-sm">
                      Reliable infrastructure keeps your server running 24/7.
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
                    <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                    <p className="text-gray-400 text-sm">
                      Expert support team available around the clock to help you.
                    </p>
                  </div>
                  <div className="w-12 h-12 border-l border-b border-primary rounded-tr-lg flex items-center justify-center">
                    <Headset className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-primary rounded-lg p-6 hover:border-secondary hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Full Control</h3>
                    <p className="text-gray-400 text-sm">
                      Complete access to server files, plugins, and configurations.
                    </p>
                  </div>
                  <div className="w-12 h-12 border-l border-b border-primary rounded-tr-lg flex items-center justify-center">
                    <Settings className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Server?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of server owners who trust ValtoriaCloud for their Minecraft hosting needs.
            </p>
            <Link
              href="#plans"
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
