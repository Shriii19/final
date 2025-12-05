"use client";

import { Cpu, Zap, Shield, Heart, Settings, BarChart2, Cloud } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon: Icon, title, description, className = '' }: FeatureCardProps) => (
  <div
    className={`bg-white/5 backdrop-blur-sm border border-primary rounded-md group transition-all duration-300 relative cursor-pointer h-full hover-gradient-border hover:bg-gradient-to-br hover:from-primary/10 hover:to-secondary/10 ${className}`}
    style={{
      '--border-color-default': 'rgba(59, 130, 246, 0.2)',
      '--border-color-hover': 'rgba(59, 130, 246, 0.5)',
      borderColor: 'var(--border-color-default)',
    } as React.CSSProperties}
    onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--border-color-hover)'}
    onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color-default)'}
  >
    <div className="flex justify-between items-start h-full">
      <div className="p-4 flex flex-col h-full">
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed group-hover:text-white transition-colors duration-300 flex-grow">
          {description}
        </p>
      </div>
      <div className="w-12 h-12 border-l border-b rounded-tr-md flex items-center justify-center flex-shrink-0" style={{ borderColor: 'inherit' }}>
        <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
      </div>
    </div>
  </div>
);

const AdvancedFeatures = () => {
  const features: Omit<FeatureCardProps, 'className'>[] = [
    {
      icon: Cpu,
      title: "High Performance",
      description: "Powered by latest generation processors for performance",
    },
    {
      icon: Zap,
      title: "Low Latency",
      description: "Optimized network infrastructure for minimal lag and delay",
    },
    {
      icon: Shield,
      title: "Advanced Security",
      description: "Our system is protected by advanced, multi-layered security protocols designed to detect, isolate, and neutralize threats in real time — ensuring your data remains safe around the clock",
    },
    {
      icon: Heart,
      title: "Auto Recovery",
      description: "Automatic server recovery and backup systems",
    },
    {
      icon: Settings,
      title: "Full Control",
      description: "Complete server control panel with advanced configuration options",
    },
    {
      icon: BarChart2,
      title: "Resource Scaling",
      description: "Dynamic resource allocation based on server demands",
    },
    {
      icon: Cloud,
      title: "Global Network",
      description: "Worldwide server locations for optimal connectivity",
    },
  ];

  return (
    <section className="bg-[#0a0b0f] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-orbitron text-white">
            Advanced <span className="text-primary">Features</span>
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            Everything you need for professional game server hosting
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvancedFeatures;