
import React, { useEffect } from "react";
import '../styles/alert.css'

export default function Alert ({message, showAlert, showAlert$}){

    useEffect(()=>{console.log(showAlert)},[showAlert])

    return(

        <div className={`Alert ${showAlert?'__show':''}`}>

            <div className="Alert__box">
                <p className="Alert__message">
                    {message}
                </p>
            </div>

        </div>
    )
}