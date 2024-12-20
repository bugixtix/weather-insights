import React from "react";

import { OneHourCard as OneHourCardStyle, OneHourCard__box, OneHourCard__hour, OneHourCard__hourText, OneHourCard__icon, OneHourCard__iconImg, OneHourCard__temperature, OneHourCard__temperatureText, OneHourCard__humidityIconAndPercentage, OneHourCard__humidityIconImg, OneHourCard__humidityPercentage,  } from "../styles/styles";
export default function OneHourCard({screenWidth}){
 
    return(
        <div className="OneHourCard" >
            <div className="OneHourCard__box">
                <div className="OneHourCard__hour">
                    <p className="OneHourCard__hourText">8 PM</p>
                </div>
                <div className="OneHourCard__icon" >
                    <img className="OneHourCard__iconImg" src={""}/>
                </div>
                <div className="OneHourCard__temperature" >
                    <p className="OneHourCard__temperatureText">
                        23°
                    </p>
                </div>
            </div>
        </div>
    )
}