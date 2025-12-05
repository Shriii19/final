"use client";

import { useState } from "react";
import Image from "next/image";
import { Zap, Server, Settings, Heart } from "lucide-react";

// Helper for conditional class names
const cn = (...classes: (string | undefined | null | false)[]) =>
  classes.filter(Boolean).join(" ");

const featureData = [
  {
    icon: Zap,
    iconBg: "bg-blue-600/10",
    iconColor: "text-blue-400",
    title: "Main Dashboard",
    description:
      "Easily view your server status, player count, resource usage, and quick controls—all in one place for efficient management.",
    image:
      "/assets/panelfeatures/mainpanel.png",
  },
  {
    icon: Server,
    iconBg: "bg-blue-600/10",
    iconColor: "text-blue-400",
    title: "Server Dashboard",
    description:
      "Access detailed settings for your Minecraft server including world selection, server type, RAM allocation, and live console access.",
    image:
      "/assets/panelfeatures/panel.png",
  },
  {
    icon: Settings,
    iconBg: "bg-blue-600/10",
    iconColor: "text-blue-400",
    title: "One-Click Plugin Installer",
    description:
      "Install Minecraft plugins like EssentialsX, LuckPerms, or WorldEdit instantly—no uploads or config needed.",
    image:
      "/assets/panelfeatures/plugininstaller.png",
  },
  {
    icon: Heart,
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-400",
    title: "Version Changer",
    description:
      "Easily switch between different Minecraft server versions or software types like Paper, Forge, Fabric, and more with just a few clicks.",
    image:
      "/assets/panelfeatures/versionchanger.png",
  },
];

export default function PlatformShowcase() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-primary/20">
            Our Panel
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Experience Our <span className="text-primary">Platform</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover the powerful features that make our platform the perfect
            choice for your needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-4">
            {featureData.map((feature, index) => (
              <div
                key={index}
                className={cn(
                  "flex gap-6 items-start p-6 rounded-2xl border cursor-pointer transition-all duration-300",
                  activeFeature === index
                    ? "bg-input border-primary"
                    : "border-transparent hover:bg-input"
                )}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div
                  className={cn(
                    "flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center",
                    feature.iconBg
                  )}
                >
                  <feature.icon
                    className={cn("w-6 h-6", feature.iconColor)}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative lg:sticky lg:top-28">
            <div className="relative w-full aspect-[1.54] bg-black/20 rounded-xl border border-border shadow-2xl shadow-primary/10">
              {featureData.map((feature, index) => (
                <Image
                  key={feature.image}
                  src={feature.image}
                  alt={`${feature.title} screenshot`}
                  fill
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className={cn(
                    "object-contain object-top w-full h-full p-2 rounded-lg transition-opacity duration-300 ease-in-out",
                    activeFeature === index ? "opacity-100" : "opacity-0"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}