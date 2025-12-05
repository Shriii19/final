import React from 'react';
import NavigationHeader from '@/components/sections/navigation-header';
import Footer from '@/components/sections/footer';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-[#0a0b0f] text-white">
      <NavigationHeader />
      <div className="pt-20">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Refund & Cancellation Policy
            </h1>
            <p style={{fontFamily:"'Orbitron', sans-serif"}} className="text-xl text-gray-300">ValtoriaCloud</p>
          </div>

          <div className="prose prose-lg prose-invert max-w-none">
            <div className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-lg p-8 mb-8">

              <h2 className="text-2xl font-bold text-white mb-4">1. General Policy Overview</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                This Refund & Cancellation Policy outlines the conditions under which ValtoriaCloud ("we", "our", "us") may provide refunds or accept cancellation requests. By purchasing and using our services, customers ("you", "your") agree to the terms listed below.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                ValtoriaCloud aims to provide fair, transparent, and reliable policies for all hosting clients while maintaining compliance with datacenter and service provider requirements.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">2. VPS, RDP, and Domain Services — <em>No Refund Policy</em></h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Because VPS, RDP, and Domains are provisioned instantly and consume non-reversible resources, <strong>no refunds are issued</strong> for:
              </p>
              <ul className="text-gray-300 leading-relaxed mb-4 ml-6 list-disc">
                <li>VPS Hosting</li>
                <li>RDP Services</li>
                <li>Domain Registrations or Renewals</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-4">
                Refunds will <strong>not</strong> be issued for:
              </p>
              <ul className="text-gray-300 leading-relaxed mb-4 ml-6 list-disc">
                <li>Misuse, misconfiguration, or user error</li>
                <li>Performance expectations</li>
                <li>Change of mind after activation</li>
                <li>Any service considered "used" once delivered</li>
              </ul>
              <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-400 mb-6">
                <strong>Note:</strong> These services are automatically marked as <em>activated</em> immediately after successful payment.
              </blockquote>

              <h2 className="text-2xl font-bold text-white mb-4">3. Minecraft Hosting — 48-Hour Conditional Refund</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                ValtoriaCloud provides a <strong>48-hour refund window</strong> <em>only</em> for Minecraft hosting under the following conditions:
              </p>

              <h3 className="text-xl font-semibold text-green-400 mb-3">✔️ Eligible for Refund (within 48 hours)</h3>
              <ul className="text-gray-300 leading-relaxed mb-4 ml-6 list-disc">
                <li>Server does not start due to an issue on our side</li>
                <li>Persistent downtime caused by our infrastructure</li>
                <li>Hardware or network failure</li>
              </ul>

              <h3 className="text-xl font-semibold text-red-400 mb-3">❌ Not Eligible for Refund</h3>
              <ul className="text-gray-300 leading-relaxed mb-4 ml-6 list-disc">
                <li>Plugin or mod issues</li>
                <li>User configuration mistakes</li>
                <li>Poor performance caused by third-party plugins or oversizing</li>
                <li>Change of mind</li>
                <li>Issues caused by user modifications</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-6">
                After 48 hours, <strong>no refunds</strong> will be processed under any circumstances.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">4. Dedicated Servers</h2>
              <ul className="text-gray-300 leading-relaxed mb-6 ml-6 list-disc">
                <li><strong>Refunds allowed only if the service has not been delivered or activated.</strong></li>
                <li>Once provisioned, <strong>no refund</strong> is possible due to resource allocation and licensing costs.</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">5. Service Suspension, Abuse, or Policy Violations</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If a service is suspended or terminated due to a violation of ValtoriaCloud's Terms of Service, <strong>no refunds</strong> will be issued.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Violations include but are not limited to:
              </p>
              <ul className="text-gray-300 leading-relaxed mb-6 ml-6 list-disc">
                <li>Use of DDoS tools, botnets, or stress-testing utilities</li>
                <li>Hosting illegal content (malware, phishing, fraud, scams)</li>
                <li>Network abuse or excessive resource misuse</li>
                <li>Unauthorized access attempts or password sharing</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-6">
                We reserve the right to blacklist accounts engaging in abusive or fraudulent activity.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">6. Chargebacks & Payment Disputes</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Filing a false chargeback or dispute may result in:
              </p>
              <ul className="text-gray-300 leading-relaxed mb-6 ml-6 list-disc">
                <li>Immediate account termination</li>
                <li>Permanent blacklist from ValtoriaCloud services</li>
                <li>Suspension of active services</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-6">
                If you experience a billing issue, <strong>contact support first</strong>. Most issues can be resolved quickly without involving banks or payment processors.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">7. How to Request a Refund (If Eligible)</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                All refund requests must be submitted through a support ticket.
              </p>

              <h3 className="text-lg font-semibold text-white mb-3">Steps:</h3>
              <ol className="text-gray-300 leading-relaxed mb-4 ml-6 list-decimal">
                <li>Open a support ticket with your order ID and issue details.</li>
                <li>Our team will review eligibility.</li>
                <li>Approved refunds are processed within <strong>3–5 business days</strong> (provider-dependent).</li>
              </ol>

              <h3 className="text-lg font-semibold text-white mb-3">Contact:</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                📧 <a href="mailto:help@valtoria.cloud" className="text-blue-400 hover:text-blue-300">help@valtoria.cloud</a><br />
                💬 Discord (if your client has one)
              </p>

              <p className="text-gray-300 leading-relaxed mb-4">
                You may be asked to provide:
              </p>
              <ul className="text-gray-300 leading-relaxed mb-6 ml-6 list-disc">
                <li>Error logs</li>
                <li>Screenshots</li>
                <li>Technical details of the issue</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-6">
                Refunds are always processed back to the <strong>original payment method</strong>.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">8. Cancellations</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You may cancel a service at any time via the client panel.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                However:
              </p>
              <ul className="text-gray-300 leading-relaxed mb-6 ml-6 list-disc">
                <li>Cancellation <strong>does not</strong> guarantee a refund.</li>
                <li>If the service is eligible for a refund, it will be processed after cancellation request review.</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">9. Important Notes</h2>
              <ul className="text-gray-300 leading-relaxed mb-6 ml-6 list-disc">
                <li>Refund requests lacking sufficient details may be rejected.</li>
                <li>Payment gateway processing time may vary (3–7 business days).</li>
                <li>Promotional, discounted, or free-trial services are <strong>non-refundable</strong> unless specified.</li>
              </ul>

              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-lg p-6 mb-6">
                <h2 className="text-2xl font-bold text-white mb-4"> Summary</h2>

                <h3 className="text-xl font-semibold text-green-400 mb-3">Refunds are only available for:</h3>
                <ul className="text-gray-300 leading-relaxed mb-4 ml-6 list-disc">
                  <li>Minecraft Hosting (within 48 hours, technical issues only)</li>
                  <li>Dedicated servers <em>before activation</em></li>
                </ul>

                <h3 className="text-xl font-semibold text-red-400 mb-3">Refunds are NOT available for:</h3>
                <ul className="text-gray-300 leading-relaxed mb-6 ml-6 list-disc">
                  <li>VPS / RDP</li>
                  <li>Domains</li>
                  <li>Abuse/suspension cases</li>
                  <li>User mistakes</li>
                  <li>After service activation</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RefundPolicy;