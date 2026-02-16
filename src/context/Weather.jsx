import { createContext, useContext, useState } from "react";
import { getWeatherData } from "../api/index";

const WeatherContext=createContext();


 export const useWeather=()=>{
    return useContext(WeatherContext);
}  


export const WeatherProvider=(props)=>{
    const[data,setData]=useState();
    const[searchCity,setSearchCity]=useState();
    const fetchData=async()=>{
        const response=await getWeatherData(searchCity);
        setData(response);
    }
    return <WeatherContext.Provider value={{searchCity,data,setSearchCity,fetchData,setData}}>
        {props.children}
    </WeatherContext.Provider>
}
