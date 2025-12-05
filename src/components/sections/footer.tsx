import Image from 'next/image';
import Link from 'next/link';
import { Mail, MessageSquare } from 'lucide-react';


const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-[#0a0b0f] to-yellow-950/20 border-t border-yellow-500/20">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="xl:grid xl:grid-cols-5 xl:gap-12">
                    <div className="space-y-8 xl:col-span-1">
                        <Link href="/" className="flex items-center space-x-3">
                            <Image
                                src="/assets/logo.png"
                                alt="ValtoriaCloud Logo"
                                width={40}
                                height={40}
                                className="h-10 w-10"
                            />
                            <span style={{fontFamily:"'Orbitron', sans-serif"}} className="text-xl font-bold text-white">ValtoriaCloud</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-6">
                            Experience next-generation game server hosting with ValtoriaCloud. Featuring NVMe SSD storage, DDoS protection, instant deployment, and advanced monitoring. Built for serious gamers who demand reliability and performance.
                        </p>
                    </div>
                    <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-4 xl:mt-0 md:grid-cols-4">
                        <div>
                            <h3 className="text-base font-semibold text-yellow-400">Quick Links</h3>
                            <ul className="mt-4 space-y-4">
                                <li><a href="https://panel.valtoria.cloud/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-yellow-400 transition-colors">Game Panel</a></li>
                                <li><a href="https://store.valtoria.cloud/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-yellow-400 transition-colors">Billing Panel</a></li>
                                <li><a href="https://status.valtoria.cloud/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-yellow-400 transition-colors">Network Status</a></li>
                                <li><a href="https://www.trustpilot.com/review/valtoria.cloud/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-yellow-400 transition-colors">Trustpilot</a></li>
                                <li><Link href="/partners" className="text-sm text-gray-400 hover:text-yellow-400 transition-colors">Partner with us</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-base font-semibold text-yellow-400">Legal</h3>
                            <ul className="mt-4 space-y-4">
                                <li><Link href="/terms-of-service" className="text-sm text-gray-400 hover:text-yellow-400 transition-colors">Terms of Service</Link></li>
                                <li><Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-yellow-400 transition-colors">Privacy Policy</Link></li>
                                <li><Link href="/refund-policy" className="text-sm text-gray-400 hover:text-yellow-400 transition-colors">Refund Policy</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-base font-semibold text-yellow-400">Contact Us</h3>
                            <ul className="mt-4 space-y-4">
                                <li className="flex items-center">
                                    <Mail className="h-5 w-5 mr-3 flex-shrink-0 text-yellow-500" />
                                    <a href="mailto:help@voltria.cloud" className="text-sm text-gray-400 hover:text-yellow-400 transition-colors">help@voltria.cloud</a>
                                </li>
                                <li className="flex items-center">
                                    <MessageSquare className="h-5 w-5 mr-3 flex-shrink-0 text-yellow-500" />
                                    <a href="https://discord.gg/3KdcAhfuq4" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-yellow-400 transition-colors">Discord</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-yellow-500/20 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm">
                    <p className="text-gray-500">&copy; 2025 ValtoriaCloud. All Rights Reserved.</p>
                    <div className="flex items-center mt-4 sm:mt-0">
                        <div className="relative flex h-2 w-2 mr-2">
                             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                             <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                        </div>
                        <span className="text-gray-400">All systems operational</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;