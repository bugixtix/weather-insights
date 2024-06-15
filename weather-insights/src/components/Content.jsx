import React from "react";
import { Content as ContentStyle, Content__container1, Content__text } from "../styles/styles";
import SearchBar from "./SearchBar";
import CurrentWeather from "./CurrentWeather";
import HourlyWeather from "./HourlyWeather";


export default function Content({screenWidth, screenWidth$}){
    

    return(
        <div className="Content" style={ContentStyle(screenWidth)}>
            <div className="Content__container1" style={Content__container1()}>
                <SearchBar screenWidth={screenWidth}/>
                <CurrentWeather screenWidth={screenWidth}/>
                <HourlyWeather screenWidth={screenWidth}/>
            </div>
        </div>
    )
}