

import React from "react";
import { IoMdSunny } from "react-icons/io";
import clear_day from '../weather-svgs/clear-day.svg'
import { OneDayForecast as OneDayForecastStyle, OneDayForecast__container1, OneDayForecast__box, OneDayForecast__day, OneDayForecast__date, OneDayForecast__container2, OneDayForecast__temperatureIcon, OneDayForecast__temperature, OneDayForecast__container3, OneDayForecast__temperatureDescription1, OneDayForecast__temperatureDescription2, OneDayForecast__container4, OneDayForecast__humidityIconImg, OneDayForecast__humidityPercentage } from "../styles/styles";

import { WMOCodeToSVG } from "./WMO-Code";
// import sunnySVG from '../weather-svgs/a_1_sunny.svg'

export function OneDayForecast ({screenWidth, index, day, _7daysForecast}){

    console.log(index)
    return(

        <div className="OneDayForecast">
            <div className="OneDayForecast__box" >
                    <div className="OneDayForecast__day">{day}</div>
                    {/* <div></div> */}
                    <img src={WMOCodeToSVG[_7daysForecast.weather_code[index.toString()]]} className="OneDayForecast__img"/>
                    <div className="OneDayForecast__temperatureContainer">
                        <p className="OneDayForecast__highestTemperature"> {_7daysForecast.high_low[index.toString()][0]}°</p>
                          &nbsp;/&nbsp;
                        <p className="OneDayForecast__lowestTemperature"> {_7daysForecast.high_low[index.toString()][1]}°</p>
                    </div>
        
            </div>
        </div>
    )
}