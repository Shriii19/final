import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0a0b0f] text-white">
      <NavigationHeader />
      
      <main className="pt-[117px]">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-[#0a0b0f] via-[#10121b] to-[#0a0b0f]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Get in <span className="text-primary">Touch</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Have questions about our services? Our team is here to help you 24/7.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-16 bg-[#0a0b0f]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Contact <span className="text-primary">Information</span>
                </h2>
                <p className="text-gray-400 mb-8">
                  Reach out to us through any of these channels. We're always happy to help!
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm border border-primary/30 rounded-lg p-6 hover:border-primary transition-all">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">Email</h3>
                      <p className="text-gray-400">help@voltria.cloud</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm border border-primary/30 rounded-lg p-6 hover:border-primary transition-all">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">Discord</h3>
                      <p className="text-gray-400">Join our community server</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm border border-primary/30 rounded-lg p-6 hover:border-primary transition-all">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">Locations</h3>
                      <p className="text-gray-400">India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white/5 backdrop-blur-sm border border-primary/30 rounded-lg p-8">
                <h2 className="text-3xl font-bold mb-6">
                  Send us a <span className="text-primary">Message</span>
                </h2>
                
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-white/5 border border-primary/30 rounded-md focus:outline-none focus:border-primary transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-white/5 border border-primary/30 rounded-md focus:outline-none focus:border-primary transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 bg-white/5 border border-primary/30 rounded-md focus:outline-none focus:border-primary transition-colors"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full px-4 py-3 bg-white/5 border border-primary/30 rounded-md focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-md font-bold hover:opacity-90 transition-opacity"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Join our Discord community for instant support from our team and other users.
            </p>
            <button className="inline-flex items-center justify-center px-8 py-3 text-sm font-bold bg-white text-primary rounded-md hover:bg-gray-100 transition-colors">
              Join Our Discord
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
