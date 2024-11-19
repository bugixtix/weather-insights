import React from "react";
import { Content as ContentStyle, Content__container1, Content__text } from "../styles/styles";
import SearchBar from "./SearchBar";
import CurrentWeather from "./CurrentWeather";
import HourlyWeather from "./HourlyWeather";
import WeatherForecast from "./WeatherForecast";
import '../styles/styles.css'
import '../styles/media-styles.css'
import { Content__video } from "../styles/styles";
import { HourlyWeatherChart } from "./HourlyWeatherChart";


export default function Content({screenWidth, screenWidth$, isLocation, isLocation$, cloud, showAlert$, showAlert, messageAlert$, currentWeatherData, currentWeatherData$}){
    
    var labels = ['0 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM','6 AM', '7 AM','8 AM','9 AM','10 AM', '11 AM','12 PM'];
    var data = ['13','12','11','9','9','11','14','15','15','18','19','21','23'];
    // var data = ['1','2','3']
    var place = 'Leipzig';

    return(
        <div className="Content">
            <div className="Content__container1">
                <SearchBar screenWidth={screenWidth} isLocation={isLocation} isLocation$={isLocation$} showAlert$={showAlert$} showAlert={showAlert} messageAlert$={messageAlert$} currentWeatherData$={currentWeatherData$} currentWeatherData={currentWeatherData}/>
                <CurrentWeather screenWidth={screenWidth} labels={labels} data={data} place={place} currentWeatherData={currentWeatherData}/>
                {/* <HourlyWeather screenWidth={screenWidth}/>
                <WeatherForecast screenWidth={screenWidth}/> */}
            </div>
        </div>
    )
}