import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import { CheckCircle2, AlertCircle, Clock } from "lucide-react";

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-[#0a0b0f] text-white">
      <NavigationHeader />
      
      <main className="pt-[117px]">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-[#0a0b0f] via-[#10121b] to-[#0a0b0f]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Network <span className="text-primary">Status</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Real-time status of all our services and infrastructure across global locations.
              </p>
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500 text-green-500 px-6 py-3 rounded-full">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-bold">All Systems Operational</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Status */}
        <section className="py-16 bg-[#0a0b0f]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">
                Service <span className="text-primary">Status</span>
              </h2>
              
              <div className="space-y-4">
                <div className="bg-white/5 backdrop-blur-sm border border-primary/30 rounded-lg p-6 hover:border-primary transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                      <div>
                        <h3 className="text-lg font-bold">Game Panel</h3>
                        <p className="text-sm text-gray-400">panel.valtoria.cloud</p>
                      </div>
                    </div>
                    <span className="text-green-500 font-semibold">Operational</span>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-primary/30 rounded-lg p-6 hover:border-primary transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                      <div>
                        <h3 className="text-lg font-bold">Billing Panel</h3>
                        <p className="text-sm text-gray-400">billing.valtoria.cloud</p>
                      </div>
                    </div>
                    <span className="text-green-500 font-semibold">Operational</span>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-primary/30 rounded-lg p-6 hover:border-primary transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                      <div>
                        <h3 className="text-lg font-bold">VPS Panel</h3>
                        <p className="text-sm text-gray-400">vps.valtoria.cloud</p>
                      </div>
                    </div>
                    <span className="text-green-500 font-semibold">Operational</span>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-primary/30 rounded-lg p-6 hover:border-primary transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                      <div>
                        <h3 className="text-lg font-bold">Website</h3>
                        <p className="text-sm text-gray-400">valtoria.cloud</p>
                      </div>
                    </div>
                    <span className="text-green-500 font-semibold">Operational</span>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-primary/30 rounded-lg p-6 hover:border-primary transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                      <div>
                        <h3 className="text-lg font-bold">API</h3>
                        <p className="text-sm text-gray-400">api.valtoria.cloud</p>
                      </div>
                    </div>
                    <span className="text-green-500 font-semibold">Operational</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Status */}
        <section className="py-16 bg-[#10121b]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">
                Location <span className="text-primary">Status</span>
              </h2>
              
              <div className="space-y-4">
                <div className="bg-white/5 backdrop-blur-sm border border-primary/30 rounded-lg p-6 hover:border-primary transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                      <div>
                        <h3 className="text-lg font-bold">India (Mumbai)</h3>
                        <p className="text-sm text-gray-400">High-performance processors</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-green-500 font-semibold block">Operational</span>
                      <span className="text-sm text-gray-400">Latency: 12ms</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-primary/30 rounded-lg p-6 hover:border-primary transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                      <div>
                        <h3 className="text-lg font-bold">United States (Dallas)</h3>
                        <p className="text-sm text-gray-400">Ampere Altra CPU</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-green-500 font-semibold block">Operational</span>
                      <span className="text-sm text-gray-400">Latency: 45ms</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Uptime Stats */}
        <section className="py-16 bg-[#0a0b0f]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">
                Uptime <span className="text-primary">Statistics</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/5 backdrop-blur-sm border border-primary/30 rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">99.99%</div>
                  <div className="text-gray-400">Last 30 Days</div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-primary/30 rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">99.98%</div>
                  <div className="text-gray-400">Last 90 Days</div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-primary/30 rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">99.97%</div>
                  <div className="text-gray-400">Last Year</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support CTA */}
        <section className="py-16 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Having Issues?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              If you're experiencing problems not shown here, please contact our support team.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 text-sm font-bold bg-white text-primary rounded-md hover:bg-gray-100 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
