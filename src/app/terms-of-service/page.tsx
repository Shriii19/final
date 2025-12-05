import React from 'react';
import Link from 'next/link';
import NavigationHeader from '@/components/sections/navigation-header';
import Footer from '@/components/sections/footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-[#0a0b0f] text-white">
      <NavigationHeader />
      <div className="pt-20">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p style={{fontFamily:"'Orbitron', sans-serif"}} className="text-xl text-gray-300">ValtoriaCloud</p>
          </div>

          <div className="prose prose-lg prose-invert max-w-none">
            <div className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-lg p-8 mb-8">
              <p className="text-gray-300 leading-relaxed mb-8">
                ValtoriaCloud ("we," "our," "us") provides various hosting services. By purchasing or using any ValtoriaCloud service, you agree to the following Terms of Service. For information about our refund policy, please visit our <Link href="/refund-policy" className="text-blue-400 hover:text-blue-300">Refund Policy</Link> page.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Service Usage</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                By using ValtoriaCloud services, you agree to use them responsibly and in compliance with all applicable laws. You are responsible for maintaining the security of your account, files, and configurations.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Service Duration</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                All Minecraft Hosting, VPS Hosting, and Dedicated Node services are valid for 1 month from the purchase date. Services must be renewed monthly to avoid suspension or interruption.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Billing & Payments</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                All payments are billed in advance. Failure to renew on time may result in suspension or termination. Chargebacks or disputes submitted without contacting support may result in immediate account termination.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Downtime & Compensation</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                ValtoriaCloud strives for stable uptime. If unexpected downtime or maintenance occurs, compensation may be provided as additional service days based on impact and duration.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Data Responsibility</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Users are fully responsible for managing their own data, backups, and configurations. ValtoriaCloud is not responsible for data loss caused by customer error, deletions, misconfigurations, or third-party software.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Prohibited Activities</h2>
              <p className="text-gray-300 leading-relaxed mb-4">The following activities are prohibited:</p>
              <ul className="text-gray-300 leading-relaxed mb-6 ml-6 list-disc">
                <li>Illegal activities</li>
                <li>Distribution of harmful or malicious software</li>
                <li>Any form of DDoS attacks</li>
                <li>System resource abuse</li>
                <li>Violations of regional or international laws</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-6">
                Violations may result in immediate suspension or termination without refund.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Suspension & Termination</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Services may be suspended or terminated for non-payment, Terms of Service violations, malicious activity, or other harmful actions. Services terminated due to violations cannot be reinstated.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Policy Modifications</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                ValtoriaCloud may update or modify these terms at any time. Continued use of our services signifies acceptance of the latest version.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Acknowledgement</h2>
              <p className="text-gray-300 leading-relaxed">
                By using any ValtoriaCloud service, you confirm that you have read, understood, and agreed to these Terms of Service. Please also review our <Link href="/refund-policy" className="text-blue-400 hover:text-blue-300">Refund Policy</Link> for information about refunds and cancellations.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;