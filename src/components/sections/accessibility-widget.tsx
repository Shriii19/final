"use client";

import { Accessibility } from "lucide-react";

/**
 * A floating accessibility widget button.
 * It is positioned at the bottom-right of the screen and provides a consistent
 * entry point for accessibility features.
 */
const AccessibilityWidget = () => {
  return (
    <button
      aria-label="Open accessibility menu"
      className="fixed z-50 flex items-center justify-center rounded-full bg-blue-500 text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-110 bottom-6 right-6 h-12 w-12 md:bottom-8 md:right-8 md:h-14 md:w-14"
    >
      <span className="sr-only">Accessibility Menu</span>
      <Accessibility className="h-6 w-6 md:h-7 md:w-7" />
    </button>
  );
};

export default AccessibilityWidget;