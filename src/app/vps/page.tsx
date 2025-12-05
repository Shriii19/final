import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import { Server, Shield, Zap, HardDrive, Globe, Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function VPSPage() {
  return (
    <div className="min-h-screen bg-[#0a0b0f] text-white">
      <NavigationHeader />
      
      <main className="pt-[117px]">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0a0b0f] via-[#10121b] to-[#0a0b0f]" />

          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Virtual Private <span className="text-primary">Servers</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                High-performance VPS hosting with full root access, SSD storage, and 99.9% uptime guarantee. 
                Hosted in India for optimal performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#cloudvps"
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
              Why Choose Our <span className="text-primary">VPS Hosting</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm border border-primary rounded-lg p-6 hover:border-secondary hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Full Root Access</h3>
                    <p className="text-gray-400 text-sm">
                      Complete control over your server with unrestricted root access.
                    </p>
                  </div>
                  <div className="w-12 h-12 border-l border-b border-primary rounded-tr-lg flex items-center justify-center">
                    <Lock className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-primary rounded-lg p-6 hover:border-secondary hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">SSD Storage</h3>
                    <p className="text-gray-400 text-sm">
                      Lightning-fast NVMe SSD drives for maximum performance.
                    </p>
                  </div>
                  <div className="w-12 h-12 border-l border-b border-primary rounded-tr-lg flex items-center justify-center">
                    <HardDrive className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-primary rounded-lg p-6 hover:border-secondary hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">India Location</h3>
                    <p className="text-gray-400 text-sm">
                      Hosted in India for optimal performance and low latency.
                    </p>
                  </div>
                  <div className="w-12 h-12 border-l border-b border-primary rounded-tr-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-primary rounded-lg p-6 hover:border-secondary hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">DDoS Protection</h3>
                    <p className="text-gray-400 text-sm">
                      Enterprise-grade protection against DDoS attacks included.
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
                      High-performance processors for optimal speed.
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
                      Guaranteed uptime with redundant infrastructure and monitoring.
                    </p>
                  </div>
                  <div className="w-12 h-12 border-l border-b border-primary rounded-tr-lg flex items-center justify-center">
                    <Server className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VPS Plans */}
        <section id="cloudvps" className="py-16 bg-[#10121b]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Cloud <span className="text-primary">VPS Plans</span>
            </h2>
            <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
              High-performance cloud VPS hosting powered by enterprise-grade Intel Xeon 2699 v4 processors.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {/* Cloud Basic */}
              <div className="bg-[#0a0b0f] border border-primary/20 rounded-lg p-6 hover:border-primary/40 transition-all">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Cloud Basic</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">₹400</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-400">CPU:</span>
                    <span className="text-white font-medium">2 vCores – 3.8 GHz Turbo</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">RAM:</span>
                    <span className="text-white font-medium">4 GB DDR4 ECC</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Storage:</span>
                    <span className="text-white font-medium">40 GB NVMe SSD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Bandwidth:</span>
                    <span className="text-white font-medium">Unmetered (5 Gbps)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">DDoS Protection:</span>
                    <span className="text-white font-medium">Advanced</span>
                  </div>
                </div>
                <p className="text-sm text-primary mb-4">Enterprise-grade Intel Xeon 2699 v4 performance</p>
                <button className="w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-md font-bold hover:opacity-90 transition-opacity">
                  Order Now
                </button>
              </div>

              {/* Cloud Advanced */}
              <div className="bg-[#0a0b0f] border border-primary/20 rounded-lg p-6 hover:border-primary/40 transition-all">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Cloud Advanced</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">₹700</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-400">CPU:</span>
                    <span className="text-white font-medium">4 vCores – 3.8 GHz Turbo</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">RAM:</span>
                    <span className="text-white font-medium">8 GB DDR4 ECC</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Storage:</span>
                    <span className="text-white font-medium">80 GB NVMe SSD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Bandwidth:</span>
                    <span className="text-white font-medium">Unmetered (5 Gbps)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">DDoS Protection:</span>
                    <span className="text-white font-medium">Advanced</span>
                  </div>
                </div>
                <p className="text-sm text-primary mb-4">Enterprise-grade Intel Xeon 2699 v4 performance</p>
                <button className="w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-md font-bold hover:opacity-90 transition-opacity">
                  Order Now
                </button>
              </div>

              {/* Cloud Pro */}
              <div className="bg-[#0a0b0f] border border-primary/20 rounded-lg p-6 hover:border-primary/40 transition-all">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Cloud Pro</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">₹950</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-400">CPU:</span>
                    <span className="text-white font-medium">6 vCores – 3.8 GHz Turbo</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">RAM:</span>
                    <span className="text-white font-medium">12 GB DDR4 ECC</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Storage:</span>
                    <span className="text-white font-medium">100 GB NVMe SSD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Bandwidth:</span>
                    <span className="text-white font-medium">Unmetered (5 Gbps)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">DDoS Protection:</span>
                    <span className="text-white font-medium">Advanced</span>
                  </div>
                </div>
                <p className="text-sm text-primary mb-4">Enterprise-grade Intel Xeon 2699 v4 performance</p>
                <button className="w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-md font-bold hover:opacity-90 transition-opacity">
                  Order Now
                </button>
              </div>

              {/* Cloud Ultra */}
              <div className="bg-[#0a0b0f] border border-primary/20 rounded-lg p-6 hover:border-primary/40 transition-all">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Cloud Ultra</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">₹1,200</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-400">CPU:</span>
                    <span className="text-white font-medium">8 vCores – 3.8 GHz Turbo</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">RAM:</span>
                    <span className="text-white font-medium">16 GB DDR4 ECC</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Storage:</span>
                    <span className="text-white font-medium">150 GB NVMe SSD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Bandwidth:</span>
                    <span className="text-white font-medium">Unmetered (5 Gbps)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">DDoS Protection:</span>
                    <span className="text-white font-medium">Advanced</span>
                  </div>
                </div>
                <p className="text-sm text-primary mb-4">Enterprise-grade Intel Xeon 2699 v4 performance</p>
                <button className="w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-md font-bold hover:opacity-90 transition-opacity">
                  Order Now
                </button>
              </div>

              {/* Cloud Super */}
              <div className="bg-[#0a0b0f] border border-primary/20 rounded-lg p-6 hover:border-primary/40 transition-all">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Cloud Super</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">₹2,000</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-400">CPU:</span>
                    <span className="text-white font-medium">12 vCores – 3.8 GHz Turbo</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">RAM:</span>
                    <span className="text-white font-medium">32 GB DDR4 ECC</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Storage:</span>
                    <span className="text-white font-medium">200 GB NVMe SSD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Bandwidth:</span>
                    <span className="text-white font-medium">Unmetered (5 Gbps)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">DDoS Protection:</span>
                    <span className="text-white font-medium">Advanced</span>
                  </div>
                </div>
                <p className="text-sm text-primary mb-4">Enterprise-grade Intel Xeon 2699 v4 performance</p>
                <button className="w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-md font-bold hover:opacity-90 transition-opacity">
                  Order Now
                </button>
              </div>

              {/* Cloud Extreme */}
              <div className="bg-[#0a0b0f] border border-primary/20 rounded-lg p-6 hover:border-primary/40 transition-all relative">
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded">
                  MOST POPULAR
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Cloud Extreme</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">₹2,600</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-400">CPU:</span>
                    <span className="text-white font-medium">14 vCores – 3.8 GHz Turbo</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">RAM:</span>
                    <span className="text-white font-medium">64 GB DDR4 ECC</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Storage:</span>
                    <span className="text-white font-medium">300 GB NVMe SSD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Bandwidth:</span>
                    <span className="text-white font-medium">Unmetered (5 Gbps)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">DDoS Protection:</span>
                    <span className="text-white font-medium">Advanced</span>
                  </div>
                </div>
                <p className="text-sm text-primary mb-4">Enterprise-grade Intel Xeon 2699 v4 performance</p>
                <button className="w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-md font-bold hover:opacity-90 transition-opacity">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Operating Systems Section */}
        <section className="py-16 bg-[#0a0b0f]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Choose Your <span className="text-primary">Operating System</span>
            </h2>
            <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
              You can pick from the following operating systems for your VPS:
            </p>

            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {/* Ubuntu */}
              <div className="bg-[#10121b] border border-primary/20 rounded-lg p-6 text-center hover:border-primary/40 transition-all">
                <div className="mb-4">
                  <Image
                    src="/assets/os/ubuntu.avif"
                    alt="Ubuntu Logo"
                    width={80}
                    height={80}
                    className="mx-auto mb-4"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Ubuntu</h3>
                <p className="text-gray-400 text-sm">
                  Popular Linux distribution known for its stability and ease of use.
                </p>
              </div>

              {/* Debian */}
              <div className="bg-[#10121b] border border-primary/20 rounded-lg p-6 text-center hover:border-primary/40 transition-all">
                <div className="mb-4">
                  <Image
                    src="/assets/os/debian.avif"
                    alt="Debian Logo"
                    width={80}
                    height={80}
                    className="mx-auto mb-4"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Debian</h3>
                <p className="text-gray-400 text-sm">
                  Universal operating system known for its reliability and security.
                </p>
              </div>

              {/* Windows */}
              <div className="bg-[#10121b] border border-primary/20 rounded-lg p-6 text-center hover:border-primary/40 transition-all">
                <div className="mb-4">
                  <Image
                    src="/assets/os/windows.avif"
                    alt="Windows Logo"
                    width={80}
                    height={80}
                    className="mx-auto mb-4"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Windows</h3>
                <p className="text-gray-400 text-sm">
                  Microsoft's flagship operating system, perfect for Windows-based applications.
                </p>
              </div>
            </div>

            {/* Mobile Horizontal Scroll */}
            <div className="md:hidden">
              <div className="flex gap-6 overflow-x-auto pb-4 px-2">
                {/* Ubuntu */}
                <div className="flex-shrink-0 w-64 bg-[#10121b] border border-primary/20 rounded-lg p-6 text-center hover:border-primary/40 transition-all">
                  <div className="mb-4">
                    <Image
                      src="/assets/os/ubuntu.avif"
                      alt="Ubuntu Logo"
                      width={80}
                      height={80}
                      className="mx-auto mb-4"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Ubuntu</h3>
                  <p className="text-gray-400 text-sm">
                    Popular Linux distribution known for its stability and ease of use.
                  </p>
                </div>

                {/* Debian */}
                <div className="flex-shrink-0 w-64 bg-[#10121b] border border-primary/20 rounded-lg p-6 text-center hover:border-primary/40 transition-all">
                  <div className="mb-4">
                    <Image
                      src="/assets/os/debian.avif"
                      alt="Debian Logo"
                      width={80}
                      height={80}
                      className="mx-auto mb-4"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Debian</h3>
                  <p className="text-gray-400 text-sm">
                    Universal operating system known for its reliability and security.
                  </p>
                </div>

                {/* Windows */}
                <div className="flex-shrink-0 w-64 bg-[#10121b] border border-primary/20 rounded-lg p-6 text-center hover:border-primary/40 transition-all">
                  <div className="mb-4">
                    <Image
                      src="/assets/os/windows.avif"
                      alt="Windows Logo"
                      width={80}
                      height={80}
                      className="mx-auto mb-4"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Windows</h3>
                  <p className="text-gray-400 text-sm">
                    Microsoft's flagship operating system, perfect for Windows-based applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need a Custom VPS Solution?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Our team can create a tailored VPS configuration that perfectly matches your requirements.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 text-sm font-bold bg-white text-primary rounded-md hover:bg-gray-100 transition-colors"
            >
              Contact Sales Team
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
