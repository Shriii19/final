import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import Link from "next/link";
import { ArrowLeft, Cpu, HardDrive, Zap, Shield, Server, Users } from "lucide-react";

export default function MinecraftPremiumPage() {
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
              <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-4 py-2 mb-4">
                <Server className="w-4 h-4 text-red-400" />
                <span className="text-red-400 text-sm font-semibold">VALTORIA CLOUD MINECRAFT SERVER HOSTING (INDIA NODE)</span>
                <Server className="w-4 h-4 text-red-400" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-primary">AMD Ryzen 7 7700</span> Plans
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                High-performance Minecraft servers hosted on powerful Ryzen hardware in India. Low ping, 24/7 uptime, and full control via Pterodactyl panel.
              </p>
            </div>
          </div>
        </section>

        {/* Plans Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Dirt Plan */}
              <div className="bg-[#0a0b0f] border border-primary/30 rounded-lg overflow-hidden hover:border-primary transition-all">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-yellow-600">Dirt Plan</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">₹179</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">2 GB RAM</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">1 CPU Core</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">10 GB NVMe SSD</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">Best for: Private SMP, small friend group</span>
                    </li>
                  </ul>
                  <button className="w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-md font-bold hover:opacity-90 transition-opacity">
                    Order Now
                  </button>
                </div>
              </div>

              {/* Coal Plan */}
              <div className="bg-[#0a0b0f] border border-primary/30 rounded-lg overflow-hidden hover:border-primary transition-all">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-500">Coal Plan</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">₹449</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">4 GB RAM</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">2 CPU Cores</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">20 GB NVMe SSD</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">Best for: Vanilla survival, 10–20 players</span>
                    </li>
                  </ul>
                  <button className="w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-md font-bold hover:opacity-90 transition-opacity">
                    Order Now
                  </button>
                </div>
              </div>

              {/* Iron Plan */}
              <div className="bg-[#0a0b0f] border border-primary/30 rounded-lg overflow-hidden hover:border-primary transition-all">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-400">Iron Plan</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">₹729</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">6 GB RAM</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">2 CPU Cores</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">30 GB NVMe SSD</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">Best for: Medium SMP, mini-games</span>
                    </li>
                  </ul>
                  <button className="w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-md font-bold hover:opacity-90 transition-opacity">
                    Order Now
                  </button>
                </div>
              </div>

              {/* Gold Plan */}
              <div className="bg-[#0a0b0f] border-2 border-primary rounded-lg overflow-hidden relative transform scale-105">
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-secondary text-center py-2 text-sm font-bold">
                  MOST POPULAR
                </div>
                <div className="p-6 pt-12">
                  <h3 className="text-2xl font-bold mb-2 text-yellow-500">Gold Plan</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">₹999</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">8 GB RAM</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">3 CPU Cores</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">40 GB NVMe SSD</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">Best for: Modded (light), 20–30+ players</span>
                    </li>
                  </ul>
                  <button className="w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-md font-bold hover:opacity-90 transition-opacity">
                    Order Now
                  </button>
                </div>
              </div>

              {/* Diamond Plan */}
              <div className="bg-[#0a0b0f] border border-primary/30 rounded-lg overflow-hidden hover:border-primary transition-all">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-blue-400">Diamond Plan</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">₹1,279</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">10 GB RAM</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">4 CPU Cores</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">50 GB NVMe SSD</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">Best for: Public servers, heavier plugins</span>
                    </li>
                  </ul>
                  <button className="w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-md font-bold hover:opacity-90 transition-opacity">
                    Order Now
                  </button>
                </div>
              </div>

              {/* Emerald Plan */}
              <div className="bg-[#0a0b0f] border border-primary/30 rounded-lg overflow-hidden hover:border-primary transition-all">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-green-400">Emerald Plan</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">₹1,549</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">12 GB RAM</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">4 CPU Cores</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">60 GB NVMe SSD</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">Best for: Heavy plugin setups, big SMPs</span>
                    </li>
                  </ul>
                  <button className="w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-md font-bold hover:opacity-90 transition-opacity">
                    Order Now
                  </button>
                </div>
              </div>

              {/* Netherite Plan */}
              <div className="bg-[#0a0b0f] border border-purple-500/50 rounded-lg overflow-hidden hover:border-purple-500 transition-all col-span-1 md:col-span-2 lg:col-span-3 max-w-md mx-auto">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-purple-400">Netherite Plan (MAX)</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">₹2,000</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">16 GB RAM</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">6 CPU Cores</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">80 GB NVMe SSD</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-sm">You get the entire node's power - Best for full network, heavy modpacks</span>
                    </li>
                  </ul>
                  <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-md font-bold hover:opacity-90 transition-opacity">
                    Order Now
                  </button>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white/5 backdrop-blur-sm border border-primary/30 rounded-lg p-8 mt-16">
              <h3 className="text-2xl font-bold mb-6 text-center">WHAT YOU GET</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>Instant setup after payment</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>DDoS protection</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>NVMe SSD Storage</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>SFTP file access</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>Automatic backups (optional)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>Java & Bedrock support</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>Pterodactyl panel</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>Friendly support via Discord/WhatsApp</span>
                  </li>
                </ul>
                <div className="md:col-span-2">
                  <h4 className="text-lg font-semibold mb-3">ADD-ONS (Optional)</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-blue-400 mr-3">➕</span>
                      <span>Dedicated IP (if available)</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-400 mr-3">➕</span>
                      <span>Extra storage</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-400 mr-3">➕</span>
                      <span>Extra backups</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-400 mr-3">➕</span>
                      <span>Basic server setup (plugins/configs) – one-time fee</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Hardware Specs */}
            <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/30 rounded-lg p-8 mt-8">
              <div className="flex items-center justify-center mb-4">
                <Cpu className="w-8 h-8 text-red-400 mr-3" />
                <h3 className="text-2xl font-bold">Hardware Specifications</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <HardDrive className="w-12 h-12 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Storage</h4>
                  <p className="text-sm text-gray-300">NVMe SSD for maximum performance</p>
                </div>
                <div>
                  <Zap className="w-12 h-12 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">CPU</h4>
                  <p className="text-sm text-gray-300">AMD Ryzen 7 7700 processors</p>
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