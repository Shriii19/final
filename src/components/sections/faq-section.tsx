"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Does ValtoriaCloud provide DDoS protection?",
    answer:
      "Yes. All hosting services come with built-in network-level DDoS protection to ensure stability and uptime. Additional protection options may be available depending on service tier and region.",
  },
  {
    question: "Can I upgrade or downgrade my service later?",
    answer:
      "Yes! You can upgrade resources (RAM, CPU, storage) anytime",
  },
  {
    question: "What types of hosting services does ValtoriaCloud offer?",
    answer:
      "ValtoriaCloud provides a wide range of services including Web Hosting, Minecraft Hosting, VPS Hosting, and Dedicated Server solutions",
  },
  {
    question: "How can I manage my server?",
    answer:
      "All game servers come with a control panel that you can use for managing your resources, changing config, etc.",
  },
  {
    question: "Do ValtoriaCloud plans come with customer support?",
    answer:
      "Absolutely! ValtoriaCloud provides 24/7 customer support to assist with any technical issues, inquiries, or setup guidance you might need.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="mt-4 text-lg text-text-muted">
            Find answers to common questions about our game server hosting services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg data-[state=open]:border-border-secondary"
              >
                <AccordionTrigger className="w-full flex items-center justify-between p-6 text-left hover:no-underline [&[data-state=open]>svg]:text-primary">
                   <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
                      <span className="font-display text-sm font-bold text-primary">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <span className="text-lg font-semibold text-text-primary">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-20 pr-6 pb-2 pt-0">
                  <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;