

import React from "react";
import { IoMdSunny } from "react-icons/io";
import drop from '../images/drop_.svg'
import { OneDayForecast as OneDayForecastStyle, OneDayForecast__container1, OneDayForecast__box, OneDayForecast__day, OneDayForecast__date, OneDayForecast__container2, OneDayForecast__temperatureIcon, OneDayForecast__temperature, OneDayForecast__container3, OneDayForecast__temperatureDescription1, OneDayForecast__temperatureDescription2, OneDayForecast__container4, OneDayForecast__humidityIconImg, OneDayForecast__humidityPercentage } from "../styles/styles";

export function OneDayForecast ({screenWidth, index}){

    function isEven(number){
        return number % 2 === 0;
    }

    var indexIsEven = isEven(index);
    console.log(indexIsEven)
    return(

        <div className="OneDayForecast" style={OneDayForecastStyle(screenWidth, indexIsEven)}>
            <div className="OneDayForecast__box" style={OneDayForecast__box(screenWidth)}>
                <div className="OneDayForecast__container1" style={OneDayForecast__container1(screenWidth)}>
                    <p className="OneDayForecast__day" style={OneDayForecast__day(screenWidth)}>
                        Sun.
                    </p>
                    <p className="OneDayForecast__date" style={OneDayForecast__date(screenWidth)}>
                        16.June.2024
                    </p>
                </div>
                <div className="OneDayForecast__container2" style={OneDayForecast__container2(screenWidth)}>
                    <IoMdSunny style={OneDayForecast__temperatureIcon(screenWidth)} />
                    <p className="OneDayForecast__temperature" style={OneDayForecast__temperature(screenWidth)}> 26°</p>
                </div>
                <div className="OneDayForecast__container3" style={OneDayForecast__container3(screenWidth)}>
                    <p className="OneDayForecast__temperatureDescription1" style={OneDayForecast__temperatureDescription1(screenWidth)}>
                        Sunny
                    </p>
                    <p className="OneDayForecast__temperatureDescription2" style={OneDayForecast__temperatureDescription2(screenWidth)}>
                        Sun in the middle of sky, no clouds.
                    </p>
                </div>
                <div className="OneDayForecast__container4" style={OneDayForecast__container4(screenWidth)}>
                    <img src={drop} className="OneDayForecast__humidityIconImg" style={OneDayForecast__humidityIconImg(screenWidth)}/>
                    <p className="OneDayForecast__humidityPercentage" style={OneDayForecast__humidityPercentage(screenWidth)}>1%</p>
                </div>

            </div>
        </div>
    )
}