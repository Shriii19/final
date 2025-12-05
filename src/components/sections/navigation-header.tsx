"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
    Gamepad2, 
    Cloud, 
    Bot, 
    SignalHigh, 
    User, 
    ChevronRight, 
    Menu, 
    X,
    MessageSquare
} from 'lucide-react';

const companyLinks = [
  { href: "/meet-our-team", title: "Meet Our Team", description: "Founder DarkDivyam & Alonozo" },
  { href: "/about-us", title: "About Us", description: "Learn more about ValtoriaCloud" },
  { href: "/partners", title: "Partners", description: "View our partners and grow together." },
];

const clientSpaceLinks = [
  { href: "https://store.valtoria.cloud/", title: "Billing Panel", description: "Billing, invoices & payments", external: true },
  { href: "https://panel.valtoria.cloud/", title: "Game Panel", description: "Manage your game servers", external: true },
  { href: "#", title: "VPS Panel", description: "Coming soon", external: false },
];

const DropdownItem = ({ href, title, description, external }: { href: string; title: string, description: string, external?: boolean }) => {
    const Component = external ? 'a' : Link;
    const props = external ? { href, target: '_blank', rel: 'noopener noreferrer' } : { href };

    return (
        <Component
            {...props}
            // @ts-ignore
            className="block p-3 rounded-lg border border-[var(--color-border-primary)] hover:border-secondary hover:bg-primary/10 transition-colors"
        >
            <h3 className="text-sm font-semibold text-white mb-1">{title}</h3>
            <p className="text-xs text-gray-300">{description}</p>
        </Component>
    );
};


const NavigationHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const NavLink = ({ href, children, external, mobile, onClick }: { href: string; children: React.ReactNode, external?: boolean, mobile?: boolean, onClick?: () => void }) => {
      const Component = external ? 'a' : Link;
      const props = external ? { href, target: '_blank', rel: 'noopener noreferrer' } : { href };

      const baseClasses = mobile
        ? "flex items-center space-x-2 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition-colors"
        : "px-4 py-6 text-sm font-medium relative text-slate-200 hover:text-primary transition-colors flex items-center space-x-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center";

      return (
        <Component
            {...props}
            onClick={onClick}
            // @ts-ignore
            className={baseClasses}
        >
            {children}
        </Component>
      )
    };

    return (
        <nav className="fixed -mt-1 left-0 right-0 z-50 bg-[#10121b]/20 backdrop-blur-xs border-b border-[#272a32]/10 transition-all duration-300 top-[52px]">
            <div className="max-w-7xl mx-auto px-4 sm:px-0">
                <div className="flex items-center h-[65px]">
                    <div className="flex-shrink-0 flex items-center mr-6">
                        <Link href="/" className="flex items-center space-x-3" aria-label="Go to homepage">
                            <Image 
                                alt="ValtoriaCloud Logo" 
                                width={48} 
                                height={48} 
                                className="h-8 sm:h-10 md:h-12 w-auto" 
                                src="/assets/logo.png"
                            />
                            <span className="text-base sm:text-lg md:text-xl font-bold text-white font-['Orbitron']">
                                Valtoria<span className="text-primary">Cloud</span>
                            </span>
                        </Link>
                    </div>

                    <div className="hidden md:flex md:items-center h-full">
                        <NavLink href="/minecraft"><Gamepad2 className="w-4 h-4" /><span>Minecraft</span></NavLink>
                        <NavLink href="/vps"><Cloud className="w-4 h-4" /><span>VPS</span></NavLink>
                        <NavLink href="/discord-bot"><Bot className="w-4 h-4" /><span>Discord Bot</span></NavLink>
                        <NavLink href="/contact"><MessageSquare className="w-4 h-4" /><span>Contact</span></NavLink>
                        
                        <div className="relative group h-full flex items-center">
                            <a href="#" className="px-4 h-full text-sm font-medium relative text-slate-200 hover:text-primary transition-colors flex items-center space-x-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center">
                                <Menu className="w-4 h-4" />
                                <span>More</span>
                            </a>
                            <div className="absolute rounded-b-xl top-full left-0 w-[280px] bg-black/90 border-t-2 border-primary mt-0 shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 z-50 p-4">
                                <div className="space-y-2">
                                    {companyLinks.map(link => <DropdownItem key={link.href} {...link} />)}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:flex md:items-center md:space-x-4 ml-auto">
                        <a href="https://discord.gg/3KdcAhfuq4" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Visit our Discord page">
                            <MessageSquare className="w-5 h-5" />
                        </a>
                        <a href="https://status.valtoria.cloud/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Visit our Status page">
                            <SignalHigh className="w-5 h-5" />
                        </a>

                        <div className="relative group">
                            <button className="hidden sm:flex items-center space-x-2 border border-primary text-primary px-3 sm:px-4 py-2 rounded-lg font-['Orbitron'] text-xs sm:text-sm font-medium transition-all duration-300 hover:bg-primary/10">
                                <User className="w-4 h-4" />
                                <span>CLIENT SPACE</span>
                                <ChevronRight className="w-4 h-4 ml-1 transform rotate-90 opacity-70 group-hover:opacity-100 transition" />
                            </button>
                            <div className="absolute top-full right-0 w-[280px] bg-black/90 border-t-2 border-primary rounded-b-xl shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 z-50 p-4">
                                <div className="space-y-2">
                                    {clientSpaceLinks.map((link: any) => <DropdownItem key={link.href} {...link} />)}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center md:hidden ml-auto">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-blue-400 hover:text-white transition-colors" aria-label="Toggle navigation menu">
                            <span className="sr-only">Open main menu</span>
                            <Menu className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} />
                            <X className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} />
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu would be rendered here based on isMenuOpen state */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0b0f]/95 backdrop-blur-sm border-t border-gray-800">
                    <div className="px-4 py-6 space-y-4">
                        <div className="space-y-2">
                            <NavLink href="/minecraft" mobile onClick={() => setIsMenuOpen(false)}>
                                <Gamepad2 className="w-4 h-4" />
                                <span>Minecraft</span>
                            </NavLink>
                            <NavLink href="/vps" mobile onClick={() => setIsMenuOpen(false)}>
                                <Cloud className="w-4 h-4" />
                                <span>VPS</span>
                            </NavLink>
                            <NavLink href="/discord-bot" mobile onClick={() => setIsMenuOpen(false)}>
                                <Bot className="w-4 h-4" />
                                <span>Discord Bot</span>
                            </NavLink>
                            <NavLink href="/contact" mobile onClick={() => setIsMenuOpen(false)}>
                                <MessageSquare className="w-4 h-4" />
                                <span>Contact</span>
                            </NavLink>
                        </div>

                        <div className="border-t border-gray-800 pt-4">
                            <h3 className="text-sm font-semibold text-white mb-3">More</h3>
                            <div className="space-y-2">
                                {companyLinks.map(link => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                                    >
                                        {link.title}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="border-t border-gray-800 pt-4">
                            <h3 className="text-sm font-semibold text-white mb-3">Client Space</h3>
                            <div className="space-y-2">
                                {clientSpaceLinks.map((link: any) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        target={link.href !== "#" ? "_blank" : undefined}
                                        rel={link.href !== "#" ? "noopener noreferrer" : undefined}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                                    >
                                        {link.title}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="border-t border-gray-800 pt-4 flex space-x-4">
                            <a href="https://discord.gg/3KdcAhfuq4" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                                <MessageSquare className="w-5 h-5" />
                            </a>
                            <a href="https://status.valtoria.cloud/" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                                <SignalHigh className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavigationHeader;