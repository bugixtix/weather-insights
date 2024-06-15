import React, { useEffect, useState } from "react";

import { Footer as FooterStyle, Footer__container1, Footer__text } from "../styles/styles.js";

export default function Footer({screenWidth, screenWidth$}){
    

    useEffect(()=>{
        
    },[])
    return(

        <div className="Footer" style={FooterStyle(screenWidth)}>
            <div className="Footer__container1" style={Footer__container1(screenWidth)}>
                <p className="Footer__text" style={Footer__text(screenWidth)}>
                    Footer is here
                </p>
            </div>
        </div>
    )
}