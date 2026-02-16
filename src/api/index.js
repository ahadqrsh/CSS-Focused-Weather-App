const baseURL='https://api.weatherapi.com/v1/current.json?key=704f96ec35904a268b470152252910'
export const getWeatherData=async (city)=>{
    const response=await fetch(`${baseURL}&q=${city}`)
    return await response.json();
}