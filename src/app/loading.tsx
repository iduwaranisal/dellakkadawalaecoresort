import React from "react";

export default function Loading() {
  return (
    <div className="min-h-svh flex flex-col items-center justify-center bg-[#071F1A] text-[#F5F1E6] gap-4">
      <div className="relative flex items-center justify-center">
        <div className="w-16 h-16 rounded-full border-2 border-white/10 border-t-[#C9A84C] animate-spin" />
        <span className="absolute w-3 h-3 rounded-full bg-[#C9A84C] animate-ping" />
      </div>
      <div className="text-center space-y-1">
        <p className="font-serif text-xl tracking-wide text-[#F5F1E6]">
          Dellakkadawala
        </p>
        <p className="text-[10px] uppercase tracking-[0.25em] text-[#C9A84C]">
          Loading Peace Beside the River...
        </p>
      </div>
    </div>
  );
}

