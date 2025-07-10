import React from "react";

type TopBannerProps = {
  message: string |null;
};

export function TopBanner({ message }: TopBannerProps) {
  return (
      <div
      className="
        fixed top-4 left-1/2 transform -translate-x-1/2
        bg-white border-2 border-red-600
        rounded-md
        px-6 py-3
        max-w-md w-full
        text-center
        text-red-700 font-semibold
        shadow-lg z-50
      "
      role="alert"
      aria-live="assertive"
    >
      {message}
    </div>
  );
}
