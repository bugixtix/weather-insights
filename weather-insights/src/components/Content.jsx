import React from "react";
import { Content as ContentStyle, Content__container1, Content__text } from "../styles/styles";
import SearchBar from "./SearchBar";
import CurrentWeather from "./CurrentWeather";
import HourlyWeather from "./HourlyWeather";
import WeatherForecast from "./WeatherForecast";
import testVideo from '../images/testVideo.mp4'
import { Content__video } from "../styles/styles";


export default function Content({screenWidth, screenWidth$}){
    

    return(
        <div className="Content" style={ContentStyle(screenWidth)}>
            <div className="Content__container1" style={Content__container1()}>
                <SearchBar screenWidth={screenWidth}/>
                <CurrentWeather screenWidth={screenWidth}/>
                <HourlyWeather screenWidth={screenWidth}/>
                <WeatherForecast screenWidth={screenWidth}/>
            </div>
            <video autoPlay loop muted className="Content__video" style={Content__video(screenWidth)}>
                <source src={testVideo} type="video/mp4"/>
                Your Browser doesn't support the video tag
            </video>
        </div>
    )
}