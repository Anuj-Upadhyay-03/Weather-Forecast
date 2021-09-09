import React,{useState,useEffect} from 'react';
import './weatherdisplay.css';
const CallApi = () => {
    const [data, setdata] = useState(null);
const [search, setsearch] = useState("Mumbai")
const [sky, setsky] = useState(null);
const [wind, setwind] = useState(null);
useEffect(() => {
    const fetchApi = async() =>{
        const url =`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=4e7fa739785a440e6ca8e2e9b4748236`;
        const response = await fetch(url);
        const resJson = await response.json();
        setdata(resJson.main);
        setsky(resJson.weather);
        setwind(resJson.wind);
        console.log(resJson.wind);
        console.log(resJson.weather);
       };
       fetchApi();
},[search])
  
    return (<>
                <div id="cover">
                        <div class="tb">
                        <div class="td"><input type="text" placeholder="Search" onChange={(event) =>{setsearch(event.target.value)}} required/></div>
                        <div class="td" id="s-cover">
                            <button type="submit">
                            <div id="s-circle"></div>
                            <span></span>
                            </button>
                        </div>
                        </div>
                    {/* </form> */}
                </div>

    {/* <input type="text" className="buttonlocation" onChange={(event) =>{setsearch(event.target.value)}}></input> */}
        
{!(data && sky && wind)?( <div className="container"><h1 className="errormsg">No place with this name exists.</h1></div>):(

        <div className="container">
            <div className="weather-side">
            <div className="weather-gradient"></div>
            <div className="date-container">
                <h2 className="date-dayname">{search}</h2>
                {/* <span className="date-day">15 Jan 2019</span><i className="location-icon" data-feather="map-pin"></i><span className="location">{search}</span> */}
            </div>
            <div className="weather-container"><i className="weather-icon" data-feather="sun"></i>
                <h1 className="weather-temp"> {data.temp}°C</h1>
                {/*  */}
                <h3 className="weather-desc">{sky[0].main}</h3>
                {/*  */}
            </div>
            </div>
            <div className="info-side">
            <div className="today-info-container">
                <div className="today-info">
                <div className="precipitation"> <span className="title">HUMIDITY</span><span className="value">{data.humidity}</span>
                    <div className="clear"></div>
                </div>
                <div className="wind"> <span className="title">WIND</span><span className="value">{wind.speed} km/h</span>
                    <div className="clear"></div>
                </div>
                </div>
            </div>
            <div className="week-container">
                <ul className="week-list">
                <li className="active"><i className="day-icon" data-feather="sun"></i><span className="day-name">Tue</span><span className="day-temp">29°C</span></li>
                <li><i className="day-icon" data-feather="cloud"></i><span className="day-name">Wed</span><span className="day-temp">21°C</span></li>
                <li><i className="day-icon" data-feather="cloud-snow"></i><span className="day-name">Thu</span><span className="day-temp">08°C</span></li>
                <li><i className="day-icon" data-feather="cloud-rain"></i><span className="day-name">Fry</span><span className="day-temp">19°C</span></li>
                <div className="clear"></div>
                </ul>
            </div>
            <div className="location-container">
           
                {/* <button className="location-button"> <i data-feather="map-pin"></i><span>Change location</span></button> */}
            </div>
            </div>
        </div>
    
    )
}
    </>
    )
}

export default CallApi;