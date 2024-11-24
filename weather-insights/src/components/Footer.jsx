import React, { useEffect, useState } from "react";
import '../styles/styles.css'
import { Footer as FooterStyle, Footer__container1, Footer__text } from "../styles/styles.js";

export default function Footer({screenWidth, screenWidth$}){
    

    useEffect(()=>{
        
    },[])
    
    return(

        <div className="Footer">
            <div className="Footer__container1">
                <a href="https://github.com/bugixtix/weather-insights" target="_blank" className="Footer__text" >
                    @bugixtix 
                </a>
            </div>
        </div>
    )
}