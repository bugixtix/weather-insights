import React, { useEffect, useState } from "react";
import '../styles/styles.css'
import { Footer as FooterStyle, Footer__container1, Footer__text } from "../styles/styles.js";

export default function Footer({screenWidth, screenWidth$}){
    

    useEffect(()=>{
        
    },[])
    function openGithub(){
        window.location.assign("https://github.com/bugixtix/weather-insights")
    }
    return(

        <div className="Footer">
            <div className="Footer__container1">
                <p className="Footer__text" onClick={openGithub}>
                    © Ixtix Bug
                </p>
            </div>
        </div>
    )
}