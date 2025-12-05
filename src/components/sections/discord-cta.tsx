import Image from 'next/image';
import Link from 'next/link';
import { Users } from 'lucide-react';

const DiscordWatermark = ({ className }: { className?: string }) => (
  <div className={`absolute pointer-events-none ${className}`}>
    <Users className="h-full w-full text-white/5" strokeWidth={0.5} />
  </div>
);

const DiscordCta = () => {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-700">
          {/* Decorative Watermarks */}
          <DiscordWatermark className="left-[-2rem] top-[-2rem] h-32 w-32" />
          <DiscordWatermark className="right-[-3rem] top-[1rem] h-48 w-48 rotate-12" />
          <DiscordWatermark className="bottom-[-2rem] left-1/3 h-24 w-24 -rotate-12" />
          <DiscordWatermark className="bottom-[-1rem] right-[5rem] hidden h-20 w-20 rotate-6 lg:block" />

          <div className="relative z-10 flex flex-col items-center justify-between gap-x-12 gap-y-8 px-8 py-16 md:flex-row">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="font-orbitron text-4xl font-bold text-white sm:text-5xl">
                Join Our Discord
              </h2>
              <p className="mt-4 text-lg text-blue-100">
                Connect with our community of gamers and developers
              </p>
              <p className="mt-2 text-blue-200">
                Get instant support, share experiences, and stay updated with the
                latest news
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="https://discord.gg/3KdcAhfuq4"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-transform duration-300 ease-in-out hover:scale-105"
              >
                <Image
                  src="/assets/images/joinus-22.png"
                  alt="Join Us On Discord"
                  width={192}
                  height={156}
                  className="h-auto w-40 md:w-48"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscordCta;