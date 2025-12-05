import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import Link from "next/link";
import { ArrowLeft, Cpu, HardDrive, Zap, Shield, Server, Users } from "lucide-react";

export default function MinecraftBudgetPage() {
  return (
    <div className="min-h-screen bg-[#10121b] text-white">
      <NavigationHeader />

      <main className="pt-[117px]">
        {/* Header */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#10121b]/50 via-[#10121b]/70 to-[#10121b]" />
          </div>

          <div className="container relative z-10 mx-auto px-4">
            <Link href="/minecraft" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Minecraft Hosting
            </Link>

            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-2 mb-4">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="text-yellow-400 text-sm font-semibold">BUDGET MINECRAFT HOSTING (INDIA)</span>
                <Zap className="w-4 h-4 text-yellow-400" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-primary">Intel Xeon E5 2682 v4</span> Plans
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Lag-free Minecraft servers with SSD storage, DDoS protection and easy panel access. Perfect for friends, SMPs, and small communities.
              </p>
            </div>
          </div>
        </section>

        {/* Plans Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* DIRT Plan */}
              <div className="bg-[#0a0b0f] border border-primary/30 rounded-lg overflow-hidden hover:border-primary transition-all">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-yellow-400">DIRT</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">₹149</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">2 GB RAM</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">10 GB NVMe SSD</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">1 vCore (fair use)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">Recommended: up to ~2-3 players</span>
                    </li>
                  </ul>
                  <button className="w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-md font-bold hover:opacity-90 transition-opacity">
                    Order Now
                  </button>
                </div>
              </div>

              {/* IRON Plan */}
              <div className="bg-[#0a0b0f] border border-primary/30 rounded-lg overflow-hidden hover:border-primary transition-all">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-300">IRON</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">₹279</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">4 GB RAM</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">25 GB NVMe SSD</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">2 vCores (burst)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">Recommended: up to ~6 players</span>
                    </li>
                  </ul>
                  <button className="w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-md font-bold hover:opacity-90 transition-opacity">
                    Order Now
                  </button>
                </div>
              </div>

              {/* GOLD Plan */}
              <div className="bg-[#0a0b0f] border-2 border-primary rounded-lg overflow-hidden relative transform scale-105">
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-secondary text-center py-2 text-sm font-bold">
                  POPULAR
                </div>
                <div className="p-6 pt-12">
                  <h3 className="text-2xl font-bold mb-2 text-yellow-500">GOLD</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">₹349</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">6 GB RAM</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">35 GB NVMe SSD</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">2 vCores (burst)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">Recommended: up to ~8 players</span>
                    </li>
                  </ul>
                  <button className="w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-md font-bold hover:opacity-90 transition-opacity">
                    Order Now
                  </button>
                </div>
              </div>

              {/* DIAMOND Plan */}
              <div className="bg-[#0a0b0f] border border-primary/30 rounded-lg overflow-hidden hover:border-primary transition-all">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-blue-400">DIAMOND</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">₹449</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">8 GB RAM</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">45 GB NVMe SSD</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">3 vCores (burst)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">Recommended: up to ~10 players</span>
                    </li>
                  </ul>
                  <button className="w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-md font-bold hover:opacity-90 transition-opacity">
                    Order Now
                  </button>
                </div>
              </div>

              {/* NETHERITE Plan */}
              <div className="bg-[#0a0b0f] border border-primary/30 rounded-lg overflow-hidden hover:border-primary transition-all">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-purple-400">NETHERITE</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">₹549</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">12 GB RAM</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">50 GB NVMe SSD</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">4 vCores (burst)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">Recommended: up to ~12 players</span>
                    </li>
                  </ul>
                  <button className="w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-md font-bold hover:opacity-90 transition-opacity">
                    Order Now
                  </button>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white/5 backdrop-blur-sm border border-primary/30 rounded-lg p-8 mt-16">
              <h3 className="text-2xl font-bold mb-6 text-center">WHAT YOU GET</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-primary mr-3">✓</span>
                    <span>Java & Bedrock support</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-3">✓</span>
                    <span>India location – low ping</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-3">✓</span>
                    <span>DDoS protection</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-3">✓</span>
                    <span>24/7 online – auto restart on crash</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-primary mr-3">✓</span>
                    <span>Easy control panel (start/stop, console, file manager)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-3">✓</span>
                    <span>Full SFTP/FTP access</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-3">✓</span>
                    <span>One-click popular jars (Paper, Purpur, Spigot, etc.)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-3">✓</span>
                    <span>Free basic setup help</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Hardware Specs */}
            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-lg p-8 mt-8">
              <div className="flex items-center justify-center mb-4">
                <Cpu className="w-8 h-8 text-yellow-400 mr-3" />
                <h3 className="text-2xl font-bold">Hardware Specifications</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <HardDrive className="w-12 h-12 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Storage</h4>
                  <p className="text-sm text-gray-300">NVMe SSD for lightning-fast performance</p>
                </div>
                <div>
                  <Zap className="w-12 h-12 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">CPU</h4>
                  <p className="text-sm text-gray-300">Intel Xeon E5 2682 v4 processors</p>
                </div>
                <div>
                  <Shield className="w-12 h-12 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Protection</h4>
                  <p className="text-sm text-gray-300">Advanced DDoS protection included</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}