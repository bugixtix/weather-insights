import React, { useEffect, useState } from "react";
import '../styles/styles.css'
import {Nav, Nav__container1, Nav__text} from '../styles/styles.js'
export default function Navbar({screenWidth, pageStarts}){

    useEffect(()=>{
    },[])
    return(
        <div className="Nav" >
            <div className="Nav__container1" >
                <p className="Nav__text">
                    Weather-insights
                </p>
            </div>
        </div>
    )
}