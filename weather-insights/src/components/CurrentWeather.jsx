

import React from "react";
import  sun_ from '../images/sun_.svg'
import { CurrentWeather as CurrentWeatherStyle, CurrentWeather__container1, CurrentWeather__container2, CurrentWeather__description, CurrentWeather__temperature, CurrentWeather__temperatureAndDescription, CurrentWeather__label, CurrentWeather__weatherIcon, CurrentWeather__weatherIconImg,CurrentWeather__box, CurrentWeather__video } from "../styles/styles";
import testVideo from "../images/testVideo.mp4"
export default function CurrentWeather({screenWidth}){

    return(
        <div className="CurrentWeather" style={CurrentWeatherStyle(screenWidth)}>

            <div className="CurrentWeather__box" style={CurrentWeather__box(screenWidth)}>

                <p className="CurrentWeather__label" style={CurrentWeather__label(screenWidth)}>
                    Leipzig
                </p>
            {/* <div className="CurrentWeather__container1" style={CurrentWeather__container1(screenWidth)}>
            </div> */}
            <div className="CurrentWeather__container2" style={CurrentWeather__container2(screenWidth)}>
                <div className="CurrentWeather__weatherIcon" style={CurrentWeather__weatherIcon(screenWidth)}>
                    <img className="CurrentWeather__weatherIconImg" src={sun_} style={CurrentWeather__weatherIconImg(screenWidth)}/>
                </div>
                <div className="CurrentWeather__temperatureAndDescription" style={CurrentWeather__temperatureAndDescription(screenWidth)}>
                    <p className="CurrentWeather__temperature" style={CurrentWeather__temperature(screenWidth)}>
                        23°
                    </p>
                    <p className="CurrentWeather__description" style={CurrentWeather__description(screenWidth)}>
                        Sunny
                    </p>
                </div>
            </div>

            {/* <video autoPlay loop muted className="CurrentWeather__video" style={CurrentWeather__video(screenWidth)}>
                <source src={testVideo} type="video/mp4"/>
                Your Browser doesn't support the video tag
            </video> */}

            </div>

        </div>
    )
}