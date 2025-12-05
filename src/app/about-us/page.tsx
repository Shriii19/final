import React from 'react';
import NavigationHeader from '@/components/sections/navigation-header';
import Footer from '@/components/sections/footer';
import { Shield, Zap, Users, Globe, Award, Heart } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#0a0b0f] text-white">
      <NavigationHeader />
      <div className="pt-20">
        <div className="max-w-6xl mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              About ValtoriaCloud
            </h1>
            <p style={{fontFamily:"'Orbitron', sans-serif"}} className="text-xl text-gray-300 mb-8">Powering the Future of Gaming</p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              ValtoriaCloud is India's premier game server hosting provider, dedicated to delivering
              high-performance, reliable hosting solutions for gamers, developers, and communities worldwide.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-lg p-8">
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 text-blue-500 mr-3" />
                <h2 className="text-2xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To provide unparalleled gaming experiences through cutting-edge technology,
                exceptional customer service, and unwavering commitment to reliability.
                We believe every gamer deserves a seamless, lag-free experience that brings
                their gaming visions to life.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-lg p-8">
              <div className="flex items-center mb-4">
                <Globe className="w-8 h-8 text-purple-500 mr-3" />
                <h2 className="text-2xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To be the global leader in game server hosting, setting the standard for
                performance, security, and innovation. We envision a world where geographical
                boundaries don't limit gaming experiences, and every player has access to
                world-class hosting infrastructure.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Why Choose ValtoriaCloud?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Enterprise Security</h3>
                <p className="text-gray-400">
                  Advanced DDoS protection, SSL encryption, and multi-layer security
                  to keep your servers safe from threats.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-purple-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Lightning Fast</h3>
                <p className="text-gray-400">
                  Ultra-low latency infrastructure with global data centers
                  ensuring optimal performance for players worldwide.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">24/7 Support</h3>
                <p className="text-gray-400">
                  Round-the-clock expert support through Discord, email, and our
                  comprehensive knowledge base.
                </p>
              </div>
            </div>
          </div>

          {/* Our Story */}
          <div className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-lg p-8 mb-16">
            <div className="flex items-center mb-6">
              <Award className="w-8 h-8 text-yellow-500 mr-3" />
              <h2 className="text-3xl font-bold text-white">Our Story</h2>
            </div>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Founded in India with a passion for gaming, ValtoriaCloud emerged from the
                recognition that gamers deserve better hosting solutions. What started as a
                small operation has grown into a comprehensive hosting platform serving
                thousands of gaming communities.
              </p>
              <p>
                Our journey began with Minecraft hosting, but we've expanded to offer a full
                suite of services including VPS hosting, Discord bots, and dedicated servers.
                Each service is built with the same commitment to quality, performance, and
                customer satisfaction that defined our early days.
              </p>
              <p>
                Today, ValtoriaCloud stands as a testament to what dedicated service and
                technological innovation can achieve. We're not just a hosting provider –
                we're your gaming partner, committed to your success.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-lg p-6 text-center">
                <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Customer First</h3>
                <p className="text-gray-400 text-sm">
                  Every decision we make prioritizes our customers' needs and experiences.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-lg p-6 text-center">
                <Shield className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Reliability</h3>
                <p className="text-gray-400 text-sm">
                  We deliver on our promises with consistent, dependable service.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-lg p-6 text-center">
                <Zap className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Innovation</h3>
                <p className="text-gray-400 text-sm">
                  We continuously evolve our technology to provide cutting-edge solutions.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-lg p-6 text-center">
                <Users className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Community</h3>
                <p className="text-gray-400 text-sm">
                  We build lasting relationships and foster vibrant gaming communities.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Experience ValtoriaCloud?</h2>
            <p className="text-gray-300 mb-6">
              Join thousands of satisfied customers who trust us with their gaming infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://store.valtoria.cloud"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
              >
                Get Started Today
              </a>
              <a
                href="https://discord.gg/3KdcAhfuq4"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-blue-500 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300"
              >
                Join Our Community
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;