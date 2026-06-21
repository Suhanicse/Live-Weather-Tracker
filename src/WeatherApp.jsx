import SearchBox from "./SearchBox.jsx"
import InfoBox from "./InfoBox.jsx"
import {useState} from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Hazaribagh",
        feelsLike: 24.84,
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
    <div style={{textAlign: "center"}}>
        <h2 style={{color: "#0EA5E9"}}>Live Weather Tracker</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info = {weatherInfo}/>
    </div>
    );
}