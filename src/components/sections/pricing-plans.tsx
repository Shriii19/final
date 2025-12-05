"use client";

import Image from "next/image";
import { Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const pricingPlansData = [
  {
    image: "/assets/images/mchost.png",
    title: "Minecraft Hosting",
    description: "High-performance game hosting for all popular games",
    price: "149.00",
    features: ["Instant deployment", "DDoS protection", "24/7 support", "Custom configurations", "Mod support"],
    buttonText: "Order now",
    buttonType: "primary" as const,
  },
  {
    image: "/assets/images/dchost.jpg",
    title: "Bot Hosting",
    description: "Professional bot hosting with high-performance servers and 24/7 support",
    price: "50.00",
    features: ["ECC Memory", "Fast Performance", "Low Latency", "Advanced security", "Managed services"],
    buttonText: "Order Now",
    buttonType: "primary" as const,
  },
  {
    image: "/assets/images/vpshost.jpg",
    title: "VPS Hosting",
    description: "Scalable virtual private servers for your applications",
    price: "400.00",
    features: ["Full root access", "SSD storage", "99.9% uptime", "Multiple OS options", "Backup included"],
    buttonText: "Order Now",
    buttonType: "primary" as const,
  },
];

const PricingPlans = () => {
  return (
    <section className="bg-bg-primary py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="relative mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-text-primary md:text-4xl">
            Our <span className="text-primary">Plans</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
            Choose the perfect plan for your needs. All plans include our core features with no hidden fees.
          </p>
          <div className="absolute right-0 top-0 hidden md:block">
            <Select defaultValue="inr">
              <SelectTrigger className="w-[110px] border-border bg-input text-foreground">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="inr">₹ INR</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pricingPlansData.map((plan, index) => (
            <div key={index} className="flex flex-col overflow-hidden rounded-lg border border-border bg-card">
              <div className="relative h-48">
                <Image
                  src={plan.image}
                  alt={`${plan.title} background`}
                  layout="fill"
                  objectFit="cover"
                  className="opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>
              <div className="flex flex-grow flex-col p-6">
                <h3 className="font-display text-xl font-bold text-text-primary">{plan.title}</h3>
                <p className="mt-1 text-sm text-text-muted">{plan.description}</p>
                
                <div className="mt-6">
                  <p className="text-sm text-text-muted">Starting at</p>
                  <p className="mt-1 text-4xl font-bold text-text-primary">
                    ₹{plan.price}
                    <span className="text-base font-normal text-text-muted">/month</span>
                  </p>
                </div>
                
                <ul className="mt-6 flex-grow space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  {plan.buttonType === 'primary' ? (
                    <a href={
                      plan.title === 'Minecraft Hosting' ? '/minecraft#plans' :
                      plan.title === 'Bot Hosting' ? '/discord-bot#pricing' :
                      '#'
                    } className="block">
                      <Button className="w-full bg-primary py-6 text-base font-bold text-primary-foreground hover:bg-secondary">
                        {plan.buttonText}
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  ) : (
                    <a href="/vps#cloudvps" className="group flex items-center justify-center font-semibold text-text-primary transition-colors hover:text-primary">
                      {plan.buttonText}
                      <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-text-secondary">
            Looking for something specific?{' '}
            <a href="/contact" className="font-semibold text-primary transition-colors hover:underline">
              Reach out to our team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;