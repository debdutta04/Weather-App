import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import { useState} from "react";

export default function WeatherApp(){
 const [weatherInfo,setWeatherInfo] = useState({
        city: "Switzerland",
        temp: 25.05,
        humidity: 47,
        tempMin: 25.05,
        tempMax: 25.05,
        weather : "haze",
    });
    let updateInfo =(newInfo) => {
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
        <h2>Weather App</h2>
        <SearchBox updateInfo ={updateInfo}/>
        <InfoBox info={weatherInfo}/>
        </div>
    );
}