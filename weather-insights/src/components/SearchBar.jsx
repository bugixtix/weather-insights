
import React, { useState } from "react";
import { SearchBar as SearchBarStyle, SearchBar__container1, SearchBar__inputField, SearchBar__searchButton, SearchBar__container2, SearchBar__locationButton } from "../styles/styles";

export default function SearchBar({screenWidth}){

    const [inputFocused, inputFocused$] = useState(false)
    const [searchButtonHovered, searchButtonHovered$] = useState(false);
    const [locationButtonHovered, locationButtonHovered$] = useState(false);



    return(
        <div className="SearchBar" style={SearchBarStyle(screenWidth)}>

            <div className="SearchBar__container1" style={SearchBar__container1(screenWidth)}>
                <input type="text" placeholder="Enter something" className="SearchBar__inputField" style={SearchBar__inputField(screenWidth, inputFocused)} onFocus={()=>inputFocused$(true)} onBlur={()=>inputFocused$(false)} />
                <button className="SearchBar__searchButton" style={SearchBar__searchButton(screenWidth, searchButtonHovered)} onMouseEnter={()=>searchButtonHovered$(true)} onMouseLeave={()=>searchButtonHovered$(false)}> Get Weather</button>
            </div>

            <div className="SearchBar__container2" style={SearchBar__container2(screenWidth)}>
                <button className="SearchBar__locationButton" style={SearchBar__locationButton(screenWidth, locationButtonHovered)} onMouseEnter={()=>locationButtonHovered$(true)} onMouseLeave={()=>locationButtonHovered$(false)}> Use my current Location</button>
            </div>
        </div>
    )
}