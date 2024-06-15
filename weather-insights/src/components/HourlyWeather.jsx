

import React from "react";
import OneHourCard from "./OneHourCard";
import { HourlyWeather as HourlyWeatherStyle, HourlyWeather__box, HourlyWeather__container1,HourlyWeather__container2, HourlyWeather__label, HourlyWeather__container } from "../styles/styles";

export default function HourlyWeather({screenWidth}){


    return(
        <div className="HourlyWeather" style={HourlyWeatherStyle(screenWidth)}>
            <div className="HourlyWeather__box" style={HourlyWeather__box(screenWidth)}>
                <div className="HourlyWeather__container1" style={HourlyWeather__container1(screenWidth)}>
                    <p className="HourlyWeather__label" style={HourlyWeather__label(screenWidth)}> Hourly Weather</p>
                </div>
                <div className="HourlyWeather__container2" style={HourlyWeather__container2(screenWidth)}>
                    <OneHourCard screenWidth={screenWidth}/>
                </div>

            </div>
        </div>
    )
}