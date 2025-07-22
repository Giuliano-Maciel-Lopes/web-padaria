import React from "react";

type TopBannerProps = {
  message: string | null;
};

export function TopBanner({ message }: TopBannerProps) {
  if (!message) return null;

  return (
    <div
      className="
        fixed top-4 left-1/2 transform -translate-x-1/2
        bg-green-100 border border-green-500
        text-green-800
        rounded-md px-6 py-3
        max-w-md w-full
        text-center font-medium
        shadow-md z-50
        animate-fadeIn
      "
      aria-live="polite"
    >
      {message}
    </div>
  );
}
