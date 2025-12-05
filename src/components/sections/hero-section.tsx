import React from 'react';
import Image from 'next/image';
import { ArrowRight, Server, Shield, Clock, Headset } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
    <div className="bg-white/5 backdrop-blur-sm border border-[rgba(59,130,246,0.2)] rounded-md hover:border-[rgba(59,130,246,0.5)] hover:bg-[linear-gradient(135deg,rgba(59,130,246,0.1)_0%,rgba(37,99,235,0.1)_100%)] group transition-all duration-300 relative cursor-pointer">
        <div className="flex justify-between items-start">
            <div className="flex-1 p-4">
                <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-gray-300 text-sm leading-tight group-hover:text-white transition-colors">{description}</p>
            </div>
            <div className="w-12 h-12 border-l border-b border-[rgba(59,130,246,0.2)] rounded-tr-lg flex items-center justify-center flex-shrink-0 group-hover:border-[rgba(59,130,246,0.5)] transition-colors duration-300">
                <Icon className="w-6 h-6 text-primary" />
            </div>
        </div>
    </div>
);

const features = [
    { icon: Shield, title: "DDoS Protection", description: "Advanced security measures to protect your servers" },
    { icon: Clock, title: "99.9% Uptime", description: "Guaranteed reliability with minimal downtime" },
    { icon: Server, title: "Instant Setup", description: "Your server ready in under 60 seconds" },
    { icon: Headset, title: "24/7 Support", description: "Round-the-clock expert assistance available" },
];

const HeroSection = () => {
    return (
        <div className="dark:bg-[#0a0b0f] relative overflow-hidden">
            <div className="absolute inset-0 w-full h-full">
                 <Image
                    src="/assets/images/mchost.png"
                    alt="Minecraft game banner"
                    fill
                    className="object-cover object-center opacity-35"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0b0f]/25 via-[#0a0b0f]/3 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0f] via-[#0a0b0f]/60 to-[#0a0b0f]/15"></div>
            </div>

            <div className="absolute top-0 right-0 z-0 pointer-events-none w-screen h-screen overflow-hidden">
                <div className="absolute right-[-10%] top-[-5%] w-[700px] h-[700px] bg-primary/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="relative z-10">
                <section className="flex items-center px-4 sm:px-6 lg:px-8 pt-32 sm:pt-52 pb-16">
                    <div className="max-w-7xl mx-auto w-full">
                        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                            <div className="text-left">
                                <div className="mb-8">
                                    <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-orbitron">
                                        <span>Host your own</span>
                                        <span className="block text-secondary">Game Server</span>
                                    </h1>
                                    <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                                        Premium game server hosting with enterprise-grade infrastructure, advanced security, and dedicated support for gamers worldwide.
                                    </p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4 items-start mb-8">
                                    <a href="https://store.valtoria.cloud/" className="group bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-bold text-base transition-all duration-300 flex items-center gap-2 font-orbitron no-underline">
                                        <span>Get started</span>
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {features.map((feature, index) => <FeatureCard key={index} {...feature} />)}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default HeroSection;