import React from "react";
import { useWeather } from "../context/Weather";

const Card = () => {
  const weather = useWeather();

  if (!weather.data || !weather.data.location) {
    return (
      <div className="mt-8 text-center text-white/70 backdrop-blur-sm bg-white/10 p-6 rounded-2xl border border-white/20 shadow-xl animate-pulse">
        <p className="text-lg">🔍 Search for a city to see weather info</p>
      </div>
    );
  }

  const { location, current } = weather.data;

  return (
    <div className="group relative mt-8 w-80 sm:w-96 mx-auto perspective">
      <div className="relative transform-gpu transition-all duration-500 group-hover:rotate-y-6 group-hover:scale-105 group-hover:shadow-2xl bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
        
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-white drop-shadow-lg">
            {location.name}
          </h2>
          <h3 className="text-blue-200 text-sm mb-4 tracking-wide">
            {location.region}, {location.country}
          </h3>

          <div className="flex flex-col items-center mt-4">
            <img
              src={current.condition.icon}
              alt="Weather Icon"
              className="w-24 h-24 drop-shadow-2xl animate-float filter brightness-110"
            />
            <h2 className="text-5xl font-light text-white mt-2 drop-shadow-lg">
              {current.temp_c}°<span className="text-2xl align-top">C</span>
            </h2>
            <p className="text-blue-200 uppercase tracking-wider text-sm font-medium">
              {current.condition.text}
            </p>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-2 text-sm text-white/80">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 text-center">
              <span className="block text-xs text-blue-300">Wind</span>
              <span className="font-bold">{current.wind_kph} kph</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 text-center">
              <span className="block text-xs text-blue-300">Humidity</span>
              <span className="font-bold">{current.humidity}%</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 text-center">
              <span className="block text-xs text-blue-300">Feels like</span>
              <span className="font-bold">{current.feelslike_c}°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;