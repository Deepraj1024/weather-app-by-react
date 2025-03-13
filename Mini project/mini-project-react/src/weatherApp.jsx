import { useState } from "react";
import InfoBox from "./infoBox";
import Searchbox from "./searchbox";
export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        City: "Delhi",
        feelslike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze", 
    });

let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
}
    return (
        <div style={{ textAlign: "centre" }}>
            <h1 style={{color: "lightblue" }}>Weather App</h1>
            <Searchbox updateInfo = {updateInfo}/>
            <InfoBox info = {weatherInfo}/>
        </div>
    );
}; 