import React from "react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-blue-50/30">
      <div className="flex flex-col items-center gap-4">
        <span className="loading loading-spinner loading-lg text-blue-600"></span>
        <p className="text-sm text-base-content/60 font-medium animate-pulse">
          Loading Dashboard Data...
        </p>
      </div>
    </div>
  );
}