import React, { useEffect, useState } from "react";

import {Nav, Nav__container1, Nav__text} from '../styles/styles.js'
export default function Navbar({screenWidth, pageStarts}){

    // var [state, state$] = useState(false)
    useEffect(()=>{
    },[])
    return(
        <div className="Nav" style={Nav(screenWidth)}>
            <div className="Nav__container1" style={Nav__container1(screenWidth)}>
                <p className="Nav__text" style={Nav__text(screenWidth)}>
                    Nav is here
                </p>
            </div>
        </div>
    )
}