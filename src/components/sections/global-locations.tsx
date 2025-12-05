import Image from "next/image";
import { Server, Zap, Shield, HardDrive, Network, Cpu } from "lucide-react";

const GlobalLocations = () => {
  const infrastructure = [
    {
      icon: Server,
      title: "Enterprise Data Center",
      description: "Tier-3 certified facility with redundant power, cooling, and network infrastructure",
      specs: ["99.9% uptime SLA", "24/7 security monitoring", "Redundant power systems"]
    },
    {
      icon: Cpu,
      title: "Latest Hardware",
      description: "Powered by Intel Xeon E5 2682 v4 and AMD Ryzen 7 7700 processors",
      specs: ["High-performance CPUs", "NVMe SSD storage", "DDR4/DDR5 RAM"]
    },
    {
      icon: Network,
      title: "Network Excellence",
      description: "Multi-gigabit connectivity with optimized routing for gaming traffic",
      specs: ["Low latency (<10ms)", "High bandwidth", "Gaming-optimized routing"]
    },
    {
      icon: Shield,
      title: "Advanced Security",
      description: "Enterprise-grade DDoS protection and security measures",
      specs: ["DDoS mitigation", "Firewall protection", "Regular security audits"]
    },
    {
      icon: HardDrive,
      title: "NVMe Storage",
      description: "Lightning-fast NVMe SSD storage for instant server deployment",
      specs: ["NVMe SSD technology", "Instant file access", "High IOPS performance"]
    },
    {
      icon: Zap,
      title: "Instant Deployment",
      description: "Automated provisioning system for immediate server setup",
      specs: ["< 5 minute setup", "Automated backups", "One-click management"]
    }
  ];

  return (
    <section className="bg-bg-primary py-16 sm:py-24">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Our Infrastructure
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary font-display">
            India <span className="text-primary">Data Center</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-text-secondary max-w-3xl mx-auto">
            Experience world-class gaming infrastructure powered by cutting-edge technology and enterprise-grade reliability, all hosted in India's premier data center facility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {infrastructure.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-primary/20 rounded-lg p-6 hover:border-primary/30 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/5 border border-primary/20 rounded-lg flex items-center justify-center mr-4">
                    <IconComponent className="w-6 h-6 text-primary/80" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{item.description}</p>
                <ul className="space-y-2">
                  {item.specs.map((spec, specIndex) => (
                    <li key={specIndex} className="flex items-center text-sm text-gray-300">
                      <span className="text-primary mr-2">✓</span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default GlobalLocations;