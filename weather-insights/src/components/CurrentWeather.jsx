

// import React from "react";
import * as React from "react"
import '../styles/media-styles.css'

import Sunny from '../weather-svgs/a_1_sunny.svg'
import VerySunny from '../weather-svgs/a_3_very_sunny.svg'
import ClearNight from '../weather-svgs/a_4_night.svg'
import PartlyCloudy from '../weather-svgs/b_1_partly_cloudy.svg'
import Cloudy from '../weather-svgs/b_2_cloudy.svg'
import VeryCloudy from '../weather-svgs/b_3_very_cloudy.svg'
import CloudyNight from '../weather-svgs/b_4_cloudy_night.svg'
import {ReactComponent as Rainy} from '../weather-svgs/c_1_rainy.svg'
import HeavyRain from '../weather-svgs/c_2_heavy_rain.svg'
import Thunderstorm from '../weather-svgs/c_3_thunderstorm.svg'
import Lightning from '../weather-svgs/c_4_lightning.svg'
import Snow from '../weather-svgs/d_1_snow.svg'
import HeavySnow from '../weather-svgs/d_2_heavy_snow.svg'
import Sleet from '../weather-svgs/d_3_sleet.svg'
import Fog from '../weather-svgs/d_4_fog.svg'
import Windy from '../weather-svgs/f_3_windy.svg'
import VeryWindy from '../weather-svgs/f_4_very_windy.svg'
import Stormy from '../weather-svgs/g_1_stormy.svg'
import VeryStormy from '../weather-svgs/g_2_very_stormy.svg'


import { HourlyWeatherChart } from "./HourlyWeatherChart";

import { wmoCodeInterpretation } from "./WMO-Code";
import { CurrentWeather as CurrentWeatherStyle, CurrentWeather__container1, CurrentWeather__container2, CurrentWeather__description, CurrentWeather__temperature, CurrentWeather__temperatureAndDescription, CurrentWeather__label, CurrentWeather__weatherIcon, CurrentWeather__weatherIconImg,CurrentWeather__box, CurrentWeather__video } from "../styles/styles";
export default function CurrentWeather({screenWidth, labels, data, place, currentWeatherData}){

    return(
        <div className="CurrentWeather">

            <div className="CurrentWeather__boxWrapper">

            <div className="CurrentWeather__box">
                <p className="CurrentWeather__date">
                    {currentWeatherData.date != '' ? (currentWeatherData.day + " " + currentWeatherData.date) : "date"}
                </p>
                <p className="CurrentWeather__label">
                    {currentWeatherData.city != '' ? currentWeatherData.city : 'Musterstadt'}
                </p>
                <div className="CurrentWeather__weatherIcon">
                    <img className="CurrentWeather__weatherIconImg" src={Rainy} />
                </div>
            
            <div className="CurrentWeather__container2" >
                <div className="CurrentWeather__temperatureAndDescription">
                    <p className="CurrentWeather__temperature">
                        {currentWeatherData.temperature != '' ? `${Math.round(currentWeatherData.temperature)}°` : '0°'}
                    </p>
                    <div className="CurrentWeather__description">
                        {currentWeatherData.weatherCode ? wmoCodeInterpretation[currentWeatherData.weatherCode] : "Moderate/heavy snow pellets or small hail shower(s)"}
                        <p className="description__tooltip">{currentWeatherData.weatherCode ? wmoCodeInterpretation[currentWeatherData.weatherCode] : ".Moderate/heavy snow pellets or small hail shower(s)"}</p>
                    </div>
                </div>
            </div>
            </div>
            </div>

            
                <HourlyWeatherChart labels={labels} data={data} place={place}/>
            

        </div>
    )
}