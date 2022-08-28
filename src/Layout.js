import React,{useEffect,useState} from 'react'
import { FaSearch } from "react-icons/fa";
import Weathericon from './Weathericon';


const api={
  key:"7ee31b71c989b26f3ca42829ecf65a6e",
  base: "https://api.openweathermap.org/data/2.5/"
}
  var ispm=false;

export default function Layout({body}) {


const[weather,setWeather]=useState({})
const[query,setQuery]=useState('')
const[time,settime]=useState(``)

const dateBuilder = (timezone) => {

  const nowInLocalTime = Date.now()+1000  *(timezone-3600) ;
  const millitime = new Date(nowInLocalTime);
  let hours = millitime.toLocaleString("en-US", {hour: "numeric"}); 
  let minutes = millitime.toLocaleString("en-US", {minute: "numeric"});
if(minutes.length<2)
{
minutes=0+minutes
}
 settime(` ${hours}:${minutes}`);
   
 
 
}
useEffect(()=>{
   if(time.includes("PM")&&ispm===true){
   settime(time.toString().replace(/ PM/g,'')+"PM")
ispm=false

 }
 if(time.includes("AM")&&ispm===true){
  settime(time.toString().replace(/ AM/g,'')+"PM")
ispm=false

}

},[time])

useEffect(()=>{
console.log("rrrr")
},[Date.now()])

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result)
      dateBuilder(result.timezone)
          console.log(result.timezone)
          ispm=true;
          console.log(result.weather[0].main)
    if(typeof result.main=="undefined")
 {
  body.classList.remove('fog')
  body.classList.remove('snow')
  body.classList.remove('rain')
  body.classList.remove('clouds')
  body.classList.remove('storm')
 }
        });
 
  }
  }
    
function setdate(date)
{
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


let day=days[date.getDay()]
let month=months[date.getMonth()]
let monthdate=date.getDate()
let year=date.getFullYear()


return `${day}, ${month} ${monthdate}, ${year}`



}



  return (
    
    <>
    <div className="search-bar">
<input
type="text"
placeholder="Search..."
onChange={e=>setQuery(e.target.value)}
onKeyPress={search}

value={query}
>
</input>
<span>
<FaSearch/>
</span>
</div>
    

{(typeof weather.main!="undefined")?(


<div className='weather-infos'>
<div className='wither-description'>
<h4 className="location-name">
{weather.name},{weather.sys.country}
</h4>
<h2>{Math.round(weather.main.temp)}c°</h2>
<div className='date-infos'>
<span>{setdate(new Date())}</span>
<h1 className='time'>{time.toString().trim()} </h1>
</div>
</div>
<div className='weather-icon'>
   <Weathericon weather={weather} body={body} />  


</div>

</div>

 ):('')
 }
 {
 (typeof weather.main=="undefined")?(
 
<div className='enter'>
<h1>Enter a City</h1>
</div>

 ):('')}
  
   </>
   
  )
}
