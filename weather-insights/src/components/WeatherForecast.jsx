

import React, { useEffect, useState } from "react";
import { WeatherForecast as WeatherForecastStyle, WeatherForecast__box, WeatherForecast__container1, WeatherForecast__label, WeatherForecast__container2 } from "../styles/styles";
import { OneDayForecast } from "./OneDayForecast";

export default function WeatherForecast({screenWidth, _7daysForecast}){

    var weekDays = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wedenesday', 'Thursday','Friday']
    // var dayShort = ['Sat', 'Sun', 'Mon','Tue', 'Wed','Thu', 'Fri']

    useEffect(()=>{
        if(_7daysForecast){
            console.log(_7daysForecast)
        }
    },[_7daysForecast])
    function run(){
        console.log(_7daysForecast)
    }
    return(
        <div className="WeatherForecast">
            <div className="WeatherForecast__box">

                <div className="WeatherForecast__container1" >
                    <p className="WeatherForecast__label"> Seven Days Forecast</p>
                </div>

                <div className="WeatherForecast__container2">
                    {_7daysForecast.day_name.map((oneDay,index) => (<OneDayForecast index={index} key={index} day={oneDay} _7daysForecast={_7daysForecast}/> ))}
                </div>

            </div>
        </div>
    )
}