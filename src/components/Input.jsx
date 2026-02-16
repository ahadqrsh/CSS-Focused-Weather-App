import React from "react";
import { useWeather } from "../context/Weather";

const Input = () => {
  const weather = useWeather();

  return (
    <div className="relative flex justify-center">
      <input
        value={weather.searchCity}
        placeholder=" "
        onChange={(e) => weather.setSearchCity(e.target.value)}
        className="peer w-full px-6 pt-6 pb-3 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl text-white placeholder-transparent focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-400/30 transition-all duration-300 hover:bg-white/20"
      />

      <label className="absolute left-6 top-4 text-white/60 transition-all duration-300 
        peer-placeholder-shown:top-5 
        peer-placeholder-shown:text-base 
        peer-placeholder-shown:text-white/40 
        peer-focus:top-1 
        peer-focus:text-sm 
        peer-focus:text-blue-300 
        peer-focus:bg-indigo-900/70 
        peer-focus:px-2 
        peer-focus:rounded-md 
        pointer-events-none">
        Enter city name...
      </label>
    </div>
  );
};

export default Input;
