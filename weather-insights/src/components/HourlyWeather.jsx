

import React, { useRef, useState } from "react";
import OneHourCard from "./OneHourCard";
import { HourlyWeather as HourlyWeatherStyle, HourlyWeather__box, HourlyWeather__container1,HourlyWeather__container2, HourlyWeather__label, HourlyWeather__container, HourlyWeather__toleftButton, HourlyWeather__torightButton } from "../styles/styles";
import { FiArrowRight } from "react-icons/fi";

import { FiArrowLeft } from "react-icons/fi";


export default function HourlyWeather({screenWidth,cloud}){
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
        <div className="HourlyWeather">
            {/* <button className="HourlyWeather_toleftButton" onMouseEnter={()=>hoverLeftButton$(true)} onMouseLeave={()=>hoverLeftButton$(false)} onClick={scrollLeft}> <FiArrowLeft/> </button> */}
            <div className="HourlyWeather__box">
                <div className="HourlyWeather__container1" >
                    <p className="HourlyWeather__label"> Hourly Weather</p>
                </div>
                <div className="HourlyWeather__container2" ref={scrollContainerRef}>
                    {
                        data.map(i=><OneHourCard key={Math.random()} screenWidth={screenWidth} cloud={cloud}/>)
                    }
                </div>

            </div>
            
        </div>
    )
}