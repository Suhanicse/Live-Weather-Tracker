import { useState } from "react";
import TextField from '@mui/material/TextField';  //from "Material UI"
import Button from '@mui/material/Button';     //from "Material UI"
import "./SearchBox.css";

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    // API_URL = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "9cf4af0ea3a779a94a81f3c58e91ec60";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);  //&units=metric --- temperature give in degree Celsius
            let jsonResponse = await response.json();
             console.log(jsonResponse);
            let result = {
              city: city,
              temp: jsonResponse.main.temp,
              tempMin: jsonResponse.main.temp_min,
              tempMax: jsonResponse.main.temp_max,
              humidity: jsonResponse.main.humidity,
              feelsLike: jsonResponse.main.feels_like,
              weather: jsonResponse.weather[0].description
            }
            console.log(result);
            return result;
        } catch(err) {
            throw err;
        }
        
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
        setError(false);
    };

    let handleSubmit = async (evt) => {
        try {
           evt.preventDefault();
           console.log(city);
           setCity("");
           let newInfo = await getWeatherInfo();
           updateInfo(newInfo);
        } catch(err) {
            setError(true);
        }

    }

    return(
        <div className="SearchBox">
            
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="city" 
                    label="City Name" 
                    variant="outlined" 
                    value={city} 
                    onChange={handleChange}
                    required
                />
                <br></br><br></br>
                <Button variant="contained" type="Submit">Search</Button>
                {error && <p style={{color: "red"}}>No such place exists in our API!</p>}
            </form>
        </div>
    )
}