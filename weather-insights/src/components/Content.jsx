import React, { useEffect, useState } from "react";
import { Content as ContentStyle, Content__container1, Content__text } from "../styles/styles";
import SearchBar from "./SearchBar";
import CurrentWeather from "./CurrentWeather";
import HourlyWeather from "./HourlyWeather";
import WeatherForecast from "./WeatherForecast";
import '../styles/styles.css'
import '../styles/media-styles.css'
import { Content__video } from "../styles/styles";
import { HourlyWeatherChart } from "./HourlyWeatherChart";


export default function Content({screenWidth, screenWidth$, isLocation, isLocation$, cloud, showAlert$, showAlert, messageAlert$, currentWeatherData, currentWeatherData$, _7daysForecast, _7daysForecast$}){
    
    var labels = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00','06:00', '07:00','08:00','09:00','10:00', '11:00','12:00'];
    var data = ['13','12','11','9','9','11','14','15','15','18','19','21','23'];
    var [hourlyForecastData, hourlyForecastData$] = useState([labels, data])
    var [sevenDaysData, sevenDaysData$] = useState([])
    
    // var data = ['1','2','3']
    var place = 'Berlin';

    useEffect(()=>{
        // console.log(hourlyForecastData)
    },[hourlyForecastData])
    return(
        <div className="Content">
            <div className="Content__container1">
                <SearchBar 
                    screenWidth={screenWidth} 
                    isLocation={isLocation} isLocation$={isLocation$} 
                    showAlert$={showAlert$} showAlert={showAlert} 
                    messageAlert$={messageAlert$} 
                    currentWeatherData$={currentWeatherData$} currentWeatherData={currentWeatherData} 
                    hourlyForecastData={hourlyForecastData} hourlyForecastData$={hourlyForecastData$}
                    _7daysForecast={_7daysForecast} _7daysForecast$={_7daysForecast$}
                />
                <CurrentWeather 
                    screenWidth={screenWidth} 
                    place={place} 
                    currentWeatherData={currentWeatherData} 
                    hourlyForecastData={hourlyForecastData}
                />
                <WeatherForecast 
                    _7daysForecast={_7daysForecast}
                    screenWidth={screenWidth}/>
            </div>
        </div>
    )
}