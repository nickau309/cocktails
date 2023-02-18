import React from "react";

export default function Loading() {
  return (
    <div className="grid flex-auto place-items-center">
      <div className="flex gap-6 overflow-hidden">
        <div className="h-24 w-12 animate-load bg-lime-800 [animation-delay:-0.32s]"></div>
        <div className="h-24 w-12 animate-load bg-lime-800 [animation-delay:-0.16s]"></div>
        <div className="h-24 w-12 animate-load bg-lime-800"></div>
      </div>
    </div>
  );
}
