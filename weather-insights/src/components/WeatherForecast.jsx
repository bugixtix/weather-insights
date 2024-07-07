

import React from "react";
import { WeatherForecast as WeatherForecastStyle, WeatherForecast__box, WeatherForecast__container1, WeatherForecast__label, WeatherForecast__container2 } from "../styles/styles";
import { OneDayForecast } from "./OneDayForecast";

export default function WeatherForecast({screenWidth}){

    var dayLong = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wedenesday', 'Thursday','Friday']
    var dayShort = ['Sat', 'Sun', 'Mon','Tue', 'Wed','Thu', 'Fri']

    return(
        <div className="WeatherForecast">
            <div className="WeatherForecast__box">

                <div className="WeatherForecast__container1" >
                    <p className="WeatherForecast__label"> Seven Days Forecast</p>
                </div>

                <div className="WeatherForecast__container2">
                    {window.innerWidth > 1024 ? dayLong.map((oneDay,index) => (<OneDayForecast index={index} key={index} day={oneDay}/> )) : dayShort.map((oneDay, index)=>(<OneDayForecast index={index} key={index} day={oneDay}/>))}
                </div>

            </div>
        </div>
    )
}