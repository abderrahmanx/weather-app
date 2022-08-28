import React from 'react'
import { FaSun,FaCloud, FaSnowflake, FaCloudRain } from "react-icons/fa";
import './weather.css'
import { WiFog, WiStormShowers, WiThunderstorm} from "react-icons/wi";
import './app.css'


export default function Weathericon({weather,body}) {
     if(weather.weather[0].main=="Clear"){
  body.classList.remove('fog')
  body.classList.remove('snow')
  body.classList.remove('rain')
  body.classList.remove('clouds')
  body.classList.remove('storm')
      return (
   <div>
<FaSun></FaSun>
<p className='sun-p'>{weather.weather[0].main}</p>
   </div >

  )}
  else if(weather.weather[0].main=="Clouds")
  {
  body.classList.add('clouds')
  body.classList.remove('fog')
  body.classList.remove('snow')
  body.classList.remove('rain')
  body.classList.remove('storm')
  return(
    <div className='clouds'>
    <div className="cloud-icon"><FaCloud /></div>
    <p className='clouds-p'>{weather.weather[0].main}</p>
       </div>
  )}
  else if(weather.weather[0].main=="Snow")
  {
    body.classList.add('snow')
   body.classList.remove('fog')
   body.classList.remove('rain')
   body.classList.remove('clouds')
   body.classList.remove('storm')
   return(
 
    <div className='snow'>
    <div className="snow-icon"><FaSnowflake /></div>
    <p className='snow-p'>{weather.weather[0].main}</p>
       </div>
  )}
  else if(weather.weather[0].main=="Rain"){
  body.classList.add('rain')
  body.classList.remove('fog')
  body.classList.remove('snow')
  body.classList.remove('clouds')
  body.classList.remove('storm')
  return(
    <div className='rain'>
    <div className="rain-icon"><FaCloudRain /></div>
    <p className='rain-p'>{weather.weather[0].main}</p>
       </div>
  )
}
  else if(weather.weather[0].main=="Mist"||weather.weather[0].main=="Fog"||weather.weather[0].main=="Haze")
  {
  body.classList.add('fog')
  body.classList.remove('rain')
  body.classList.remove('snow')
  body.classList.remove('clouds')
  body.classList.remove('storm')
  return(
    <div className='fog'>
    <div className="fog-icon"><WiFog /></div>
    <p className='fog-p'>{weather.weather[0].main}</p>
       </div>
  )
}
else if(weather.weather[0].main=='Thunderstorm'){
   body.classList.add('storm')
   body.classList.remove('fog')
   body.classList.remove('snow')
   body.classList.remove('clouds')
   body.classList.remove('rain')
   console.log('llll')
   return(
     <div className='rain'>
     <div className="rain-icon"><WiThunderstorm/></div>
     <p className='storm-p'>{weather.weather[0].main}</p>
        </div>
   )
 }
}
