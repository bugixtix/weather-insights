

// import React from "react";
import * as React from "react"
import { useEffect, useState } from "react"
import '../styles/media-styles.css'
import {RiCelsiusLine as Celsius} from 'react-icons/ri'

import clear_day from '../weather-svgs/clear-day.svg'
import clear_night from '../weather-svgs/clear-night.svg'
import partly_cloudy_day from '../weather-svgs/partly-cloudy-day.svg'
import partly_cloudy_night from '../weather-svgs/partly-cloudy-night.svg'
import cloudy from '../weather-svgs/cloudy.svg'
import overcast from '../weather-svgs/overcast.svg'
import fog from '../weather-svgs/fog.svg'
import drizzle from '../weather-svgs/drizzle.svg'
import raindrop from '../weather-svgs/raindrop.svg'
import rain from '../weather-svgs/rain.svg'
import sleet from '../weather-svgs/sleet.svg'
import snowflake from '../weather-svgs/snowflake.svg'
import snow from '../weather-svgs/snow.svg'
import thunderstorms from '../weather-svgs/thunderstorms.svg'
import { WMOCodeToSVG, WMOCodeDetailed } from "./WMO-Code"


import { HourlyWeatherChart } from "./HourlyWeatherChart";

import { wmoCodeInterpretation, WMOCodeText } from "./WMO-Code";

import { CurrentWeather as CurrentWeatherStyle, CurrentWeather__container1, CurrentWeather__container2, CurrentWeather__description, CurrentWeather__temperature, CurrentWeather__temperatureAndDescription, CurrentWeather__label, CurrentWeather__weatherIcon, CurrentWeather__weatherIconImg,CurrentWeather__box, CurrentWeather__video } from "../styles/styles";

export default function CurrentWeather({screenWidth, place, currentWeatherData, hourlyForecastData}){

    var [currentWeatherSvg, setCurrentWeatherSvg] = useState(snow)
    var [screenWidth, screenWidth$] = useState(window.innerWidth)


    useEffect(()=>{
        screenWidth$(window.innerWidth)
    },[])
    var currentWeatherText = "Current Weather"
    var comprehensiveDescription = "Comprehensive description comes hier"

    
    useEffect(()=>{
        if(currentWeatherData==undefined){
        }else{
            console.log(currentWeatherData.weatherCode)
            var convertedCode = currentWeatherData.isday==1 ? Number(currentWeatherData.weatherCode) : Number(currentWeatherData.weatherCode) + 100
            setCurrentWeatherSvg(WMOCodeToSVG[convertedCode])
        }
        
    },[currentWeatherData])

    const currentDate = new Date().toDateString()
    
    return(
        <div className="CurrentWeather">

            <div className="CurrentWeather__box">
            <div className="CurrentWeather__boxCon">
                <div className="CurrentWeather__dateNlabel">
                    <p className="CurrentWeather__date">
                        {screenWidth > 1000 ? currentWeatherText : ''}
                        {screenWidth > 1000 ? <br></br> : ''} 
                        {currentWeatherData.date != '' ? currentWeatherData.time : currentDate}
                    </p>
                    <p className="CurrentWeather__label">
                        {currentWeatherData.city != '' ? currentWeatherData.city : 'Berlin'}
                    </p>
                </div>
                
                <div className="CurrentWeather__iconTextTempCon">

                <div className="CurrentWeather__weatherIcon">
                    <img className="CurrentWeather__weatherIconImg" src={currentWeatherSvg} />
                </div>
                
                <div className="CurrentWeather__tempNiconNdesc">

                <div className="CurrentWeather__tempNicon">
                    <p className="CurrentWeather__temperature">
                        {currentWeatherData.temperature != '' ? `${Math.round(currentWeatherData.temperature)}` : 'Not Available'}
                    </p>
                    <Celsius className="CurrentWeather__tempIcon"/> 
                
                </div>
                <div className="CurrentWeather__description">
                    <p className="CurrentWeather__descText">
                        {currentWeatherData.weatherCode >= 0 ? WMOCodeText[currentWeatherData.weatherCode] : "Weather Description is Not Available"}
                    </p>
                </div>
                </div>

                </div>

                <div className="CurrentWeather__compDescCon">
                    <p className="CurrentWeather__compDesc"> {currentWeatherData.weatherCode >= 0 ? WMOCodeDetailed[currentWeatherData.weatherCode] : "Weather Description is Not Available"}
                    </p>
                </div>
                
                </div>
            </div>

            
                <HourlyWeatherChart place={currentWeatherData.city} hourlyForecastData={hourlyForecastData}/>
            

        </div>
    )
}