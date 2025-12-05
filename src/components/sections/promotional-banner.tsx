"use client";

import { useState } from "react";
import { X, Check } from "lucide-react";

const PromotionalBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("25%OFF");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = "25%OFF";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="relative bg-amber-200 text-black text-sm py-3 px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="flex items-center justify-between">
          <div className="flex-1 flex items-center justify-center space-x-2 sm:space-x-3">
            <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-black text-xs font-bold">%</span>
            </div>
            <span className="text-xs sm:text-sm md:text-base text-black font-medium text-center">
              Limited Time Offer: Save 20% on Game Server Hosting
            </span>
            <button 
              onClick={copyToClipboard}
              className="bg-black/20 hover:bg-black/30 px-1.5 sm:px-2 md:px-3 py-1 rounded text-xs font-bold transition-colors cursor-pointer whitespace-nowrap flex-shrink-0 text-black border border-black/30 hover:border-black/50 flex items-center gap-1"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3" />
                  Copied!
                </>
              ) : (
                "25%OFF"
              )}
            </button>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-black hover:text-black/90 transition-colors flex-shrink-0"
            aria-label="Close banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromotionalBanner;