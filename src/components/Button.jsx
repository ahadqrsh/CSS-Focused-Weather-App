import React from "react";
import { useWeather } from "../context/Weather";

const Button = () => {
  const weather = useWeather();

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={weather.fetchData}
        className="relative px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] hover:scale-105 active:scale-95 group"
      >
        {/* Animated background shimmer */}
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        
        {/* Ripple effect on click (CSS only) */}
        <span className="absolute inset-0 bg-white/20 scale-0 group-active:scale-100 rounded-full transition-transform duration-500" />
        
        <span className="relative z-10 flex items-center gap-2">
          <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          Search
        </span>
      </button>
    </div>
  );
};

export default Button;