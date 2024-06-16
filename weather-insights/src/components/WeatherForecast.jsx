

import React from "react";
import { WeatherForecast as WeatherForecastStyle, WeatherForecast__box, WeatherForecast__container1, WeatherForecast__label, WeatherForecast__container2 } from "../styles/styles";
import { OneDayForecast } from "./OneDayForecast";

export default function WeatherForecast({screenWidth}){


    return(
        <div className="WeatherForecast" style={WeatherForecastStyle(screenWidth)}>
            <div className="WeatherForecast__box" style={WeatherForecast__box(screenWidth)}>

                <div className="WeatherForecast__container1" style={WeatherForecast__container1(screenWidth)}>
                    <p className="WeatherForecast__label" style={WeatherForecast__label(screenWidth)}> Seven Days Forecast</p>
                </div>

                <div className="WeatherForecast__container2" style={WeatherForecast__container2(screenWidth)}>
                    <OneDayForecast screenWidth={screenWidth} index={1}/>
                    <OneDayForecast screenWidth={screenWidth} index={2}/>
                    <OneDayForecast screenWidth={screenWidth} index={3}/>
                    <OneDayForecast screenWidth={screenWidth} index={4}/>
                    <OneDayForecast screenWidth={screenWidth} index={5}/>
                    <OneDayForecast screenWidth={screenWidth} index={6}/>
                    <OneDayForecast screenWidth={screenWidth} index={7}/>
                </div>

            </div>
        </div>
    )
}