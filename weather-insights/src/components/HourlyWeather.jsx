

import React, { useRef, useState } from "react";
import OneHourCard from "./OneHourCard";
import { HourlyWeather as HourlyWeatherStyle, HourlyWeather__box, HourlyWeather__container1,HourlyWeather__container2, HourlyWeather__label, HourlyWeather__container, HourlyWeather__toleftButton, HourlyWeather__torightButton } from "../styles/styles";
import { FiArrowRight } from "react-icons/fi";

import { FiArrowLeft } from "react-icons/fi";


export default function HourlyWeather({screenWidth}){
    var data = [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]

    var scrollContainerRef = useRef(null)
    var [hoverRightButton, hoverRightButton$] = useState(false);
    var [hoverLeftButton, hoverLeftButton$] = useState(false)

    var scrollLeft = () =>{
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -258, behavior: 'smooth' });
          }
    }
    var scrollRight = () =>{
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 258, behavior: 'smooth' });
          }      
    }
    return(
        <div className="HourlyWeather" style={HourlyWeatherStyle(screenWidth)}>
            <button className="HourlyWeather_toleftButton" style={HourlyWeather__toleftButton(screenWidth,hoverLeftButton)} onMouseEnter={()=>hoverLeftButton$(true)} onMouseLeave={()=>hoverLeftButton$(false)} onClick={scrollLeft}> <FiArrowLeft/> </button>
            <div className="HourlyWeather__box" style={HourlyWeather__box(screenWidth)}>
                <div className="HourlyWeather__container1" style={HourlyWeather__container1(screenWidth)}>
                    <p className="HourlyWeather__label" style={HourlyWeather__label(screenWidth)}> Hourly Weather</p>
                </div>
                <div className="HourlyWeather__container2" style={HourlyWeather__container2(screenWidth)} ref={scrollContainerRef}>
                    {
                        data.map(i=><OneHourCard key={Math.random()} screenWidth={screenWidth}/>)
                    }
                </div>

            </div>
            <button className="HourlyWeather__torightButton" style={HourlyWeather__torightButton(screenWidth, hoverRightButton)} onMouseEnter={()=>hoverRightButton$(true)} onMouseLeave={()=>hoverRightButton$(false)} onClick={scrollRight}><FiArrowRight/></button>
        </div>
    )
}