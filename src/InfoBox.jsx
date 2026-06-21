import Card from '@mui/material/Card';  //Material UI
import CardContent from '@mui/material/CardContent'; //Material UI
import CardMedia from '@mui/material/CardMedia';  //Material UI
import Typography from '@mui/material/Typography';  //Material UI
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit'; //Material UI --> Material Icons
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';   // Material UI --> Material Icons
import SunnyIcon from '@mui/icons-material/Sunny';    // Material UI --> Material Icons

export default function InfoBox({ info }) {
    const INIT_URL =
      "https://images.unsplash.com/photo-1641970304213-fadcccae478e?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; //Unsplash Image(copy img address)
    let COLD_URL = 
         "https://images.unsplash.com/photo-1674407866481-a39b2239f771?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let HOT_URL = 
         "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let RAIN_URL = 
         "https://images.unsplash.com/photo-1619260584294-8a4e63f5ade5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


    return (
        <div className="InfoBox">
           <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }} className="properCard">         {/* //Material UI */}
              <CardMedia
                sx={{ height: 140 }}
                // image= {INIT_URL}
                image = {info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                title="green iguana"
              />
              <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {info.city} {
                        info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <SunnyIcon/> : <AcUnitIcon/>
                    }
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                      <p>Temperature = {info.temp}&deg;C</p>
                      <p>Humidity = {info.humidity}</p>
                      <p>Min Temp = {info.tempMin}&deg;C</p>
                      <p>Max Temp = {info.tempMax}&deg;C</p>
                      <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
                  </Typography>
              </CardContent>
              
            </Card>
           </div>
        </div>
    );
}
