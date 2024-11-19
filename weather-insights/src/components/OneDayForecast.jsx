

import React from "react";
import { IoMdSunny } from "react-icons/io";
// import drop from '../images/drop_.svg'
import { OneDayForecast as OneDayForecastStyle, OneDayForecast__container1, OneDayForecast__box, OneDayForecast__day, OneDayForecast__date, OneDayForecast__container2, OneDayForecast__temperatureIcon, OneDayForecast__temperature, OneDayForecast__container3, OneDayForecast__temperatureDescription1, OneDayForecast__temperatureDescription2, OneDayForecast__container4, OneDayForecast__humidityIconImg, OneDayForecast__humidityPercentage } from "../styles/styles";
// import sunnySVG from '../weather-svgs/a_1_sunny.svg'

export function OneDayForecast ({screenWidth, index, day}){

    return(

        <div className="OneDayForecast">
            <div className="OneDayForecast__box" >
                    <div className="OneDayForecast__day">{day}</div>
                    <img src={""} className="OneDayForecast__img"/>
                    <div className="OneDayForecast__temperatureContainer">
                        <p className="OneDayForecast__highestTemperature"> 26°</p>
                          &nbsp;/&nbsp;
                        <p className="OneDayForecast__lowestTemperature"> 26°</p>
                    </div>
        
            </div>
        </div>
    )
}