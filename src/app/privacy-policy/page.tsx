import React from 'react';
import NavigationHeader from '@/components/sections/navigation-header';
import Footer from '@/components/sections/footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#0a0b0f] text-white">
      <NavigationHeader />
      <div className="pt-20">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p style={{fontFamily:"'Orbitron', sans-serif"}} className="text-xl text-gray-300">ValtoriaCloud</p>
          </div>

          <div className="prose prose-lg prose-invert max-w-none">
            <div className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-lg p-8 mb-8">

              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                This Privacy Policy explains how ValtoriaCloud ("we", "our", "us") collects, uses, and protects your information when you use our website or hosting services. By accessing our services, you agree to these terms.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may collect the following types of information:
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">Personal Information</h3>
              <ul className="text-gray-300 leading-relaxed mb-6 ml-6 list-disc">
                <li>Name</li>
                <li>Email address</li>
                <li>Billing address</li>
                <li>Payment details</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">Technical Information</h3>
              <ul className="text-gray-300 leading-relaxed mb-6 ml-6 list-disc">
                <li>IP addresses</li>
                <li>Browser and device details</li>
                <li>Server logs</li>
                <li>Usage and traffic analytics</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">Cookies</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Used for session management, website functionality, and analytics.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Your data is used to:
              </p>
              <ul className="text-gray-300 leading-relaxed mb-8 ml-6 list-disc">
                <li>Process and manage orders</li>
                <li>Improve service reliability and performance</li>
                <li>Send billing notifications and service updates</li>
                <li>Enhance protection against fraud or abuse</li>
                <li>Comply with legal requirements</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">4. Data Protection & Security</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use modern security practices including:
              </p>
              <ul className="text-gray-300 leading-relaxed mb-8 ml-6 list-disc">
                <li>SSL encryption</li>
                <li>Restricted server access</li>
                <li>Firewall protection</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-8">
                Your payment information is processed securely through trusted gateways and is never stored in plain text by us.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">5. Data Sharing</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We <strong>do not sell or rent</strong> personal data.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may share limited data with:
              </p>
              <ul className="text-gray-300 leading-relaxed mb-6 ml-6 list-disc">
                <li>Payment processors</li>
                <li>Infrastructure providers</li>
                <li>Law enforcement (only when required by law)</li>
              </ul>

              <div className="bg-green-600/20 border border-green-500/30 rounded-lg p-4 mb-6">
                <h3 className="text-lg font-semibold text-green-400 mb-2">🔒 Privacy Assurance</h3>
                <p className="text-gray-300 leading-relaxed">
                  ValtoriaCloud <strong>does not access, monitor, or interfere</strong> with your VPS, game server, or hosting contents unless legally required or necessary to resolve technical issues.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-white mb-4">6. Cookies</h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                We use cookies to improve website experience and analyze traffic. Users may disable cookies, but some features may not function properly.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You may request:
              </p>
              <ul className="text-gray-300 leading-relaxed mb-6 ml-6 list-disc">
                <li>Data access</li>
                <li>Data correction</li>
                <li>Data deletion</li>
                <li>Restriction of processing</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-8">
                Contact: <a href="mailto:help@valtoria.cloud" className="text-blue-400 hover:text-blue-300">help@valtoria.cloud</a>
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">8. International Data Transfers</h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                Data may be stored or processed in regions where our datacenter partners operate. We ensure adequate protection across all locations.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">9. GDPR Compliance</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                ValtoriaCloud adheres to GDPR standards:
              </p>
              <ul className="text-gray-300 leading-relaxed mb-8 ml-6 list-disc">
                <li>Lawful and transparent data processing</li>
                <li>User consent where required</li>
                <li>Secure data handling</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">10. Policy Updates</h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                We may update this policy periodically. Significant changes will be posted on the website or notified via email.
              </p>

              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-white mb-4"> Need Help?</h2>
                <p className="text-gray-300 leading-relaxed">
                  Contact us anytime:<br />
                  📧 <a href="mailto:help@valtoria.cloud" className="text-blue-400 hover:text-blue-300">help@valtoria.cloud</a><br />
                  💬 <a href="https://discord.com/invite/3KdcAhfuq4" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Discord</a>
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;