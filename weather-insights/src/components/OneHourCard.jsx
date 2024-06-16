import React from "react";
import drop from '../images/drop_.svg'
import cloud from '../images/sun-behind-large-cloud.svg'
import { OneHourCard as OneHourCardStyle, OneHourCard__box, OneHourCard__hour, OneHourCard__hourText, OneHourCard__icon, OneHourCard__iconImg, OneHourCard__temperature, OneHourCard__temperatureText, OneHourCard__humidityIconAndPercentage, OneHourCard__humidityIconImg, OneHourCard__humidityPercentage,  } from "../styles/styles";
export default function OneHourCard({screenWidth}){

    return(
        <div className="OneHourCard" style={OneHourCardStyle(screenWidth)}>
            <div className="OneHourCard__box" style={OneHourCard__box(screenWidth)}>
                <div className="OneHourCard__hour" style={OneHourCard__hour(screenWidth)}>
                    <p className="OneHourCard__hourText" style={OneHourCard__hourText(screenWidth)}>8 PM</p>
                </div>
                <div className="OneHourCard__icon" style={OneHourCard__icon(screenWidth)}>
                    <img className="OneHourCard__iconImg" style={OneHourCard__iconImg(screenWidth)} src={cloud}/>
                </div>
                <div className="OneHourCard__temperature" style={OneHourCard__temperature(screenWidth)}>
                    <p className="OneHourCard__temperatureText" style={OneHourCard__temperatureText(screenWidth)}>
                        23°
                    </p>
                </div>
                <div className="OneHourCard__humidityIconAndPercentage" style={OneHourCard__humidityIconAndPercentage(screenWidth)}>
                    <img className="OneHourCard__humidityIconImg" style={OneHourCard__humidityIconImg(screenWidth)}src={drop}/>
                    <p className="OneHourCard__percentage" style={OneHourCard__humidityPercentage(screenWidth)}>15%</p>
                </div>

            </div>
        </div>
    )
}