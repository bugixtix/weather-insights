
import React, { useEffect, useState, useCallback } from "react";
import { SearchBar as SearchBarStyle, SearchBar__container1, SearchBar__inputField, SearchBar__searchButton, SearchBar__container2, SearchBar__locationButton } from "../styles/styles";
import locationSVG from '../weather-svgs/locationSVG.svg'
import currentLocationSVG from '../weather-svgs/location1SVG.svg'
import {fetchWeatherApi} from 'openmeteo'

export default function SearchBar({screenWidth, isLocation, isLocation$, showAlert$, showAlert, messageAlert$, currentWeatherData$, currentWeatherData, hourlyForecastData, hourlyForecastData$}){
    
    const [inputFocused, inputFocused$] = useState(false)
    const [searchButtonHovered, searchButtonHovered$] = useState(false);
    const [locationButtonHovered, locationButtonHovered$] = useState(false);
    var [coordinates, coordinates$] = useState({latitude:'',longitude:''});
    var [query, query$] = useState('');
    var [fetchWeatherTrigger, fetchWeatherTrigger$] = useState(false)
    var [suggestions, suggestions$] = useState([{properties:{address_line1:"Latakia", country:"Syria", state:"West", lon:"00", lat:"00",city:'Latakia',offset_DST:'00:00'}}])
    var myApiKey = "82a70ed9830646a88601463d8bee58d4";
    var [showUl, showUl$] = useState(false)

    var [city, city$] = useState('')

    var [weatherData, weatherData$] = useState([])

    var timeOffset = '00:00'
    
    const suggestionsCache = []

    var lastCall = 0 ;

    const throttleDelay = 1000; // 1 Second
    
    

    // EVENT TO HANDLE INPUT CHANGE IN INPUT FIELD 
    var handleInputChange = async (e) => {
        var value = e.target.value;
        query$(e.target.value);

        // NOTE !!
        if(value.length > 2){
            
            debouncedFetchSuggestions(query)

            console.log("somethin")
            showUl$(true);

        }else{showUl$(false)}
    }

    // EVENT LIST ITEM CLICK
    var listItem__click = (item) =>{
        //
        console.log(item)
        //
        var address = item.properties.city ? item.properties.city : item.properties.address_line1;
        var _coordinates_ = {latitude: item.properties.lat, longitude: item.properties.lon}
        //
        query$(address);
        //
        timeOffset = item.properties.timezone.offset_DST
        //
        console.log("timeoffset:::" + timeOffset)
        console.log(_coordinates_)
        //
        currentWeatherData$(prev=>({...prev, city:address}))
        //
        FetchWeatherData(_coordinates_, timeOffset)
        //

        //
        showUl$(false);
    }

    // EVENT LOCATION BUTTON CLICK 
    var locationButton__click = () =>{
        isLocation$(true)
        showUl$(false)
        GetUsersCoordinates();
        //
    }

    // FUNCTION TO GET USER'S CURRENT COORDINATES
    const GetUsersCoordinates = () => {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(showPosition, showError);
            } else {
              console.log("Geolocation is not supported by this browser.");
              messageAlert$("Geolocation is not supported by this browser.");
              showAlert$(true);
            }
    };
        
    // FUNCTION TO SET USER'S COORDINATES IF AVALIABLE
    const showPosition = (position) => {
            console.log("Latitude: " + position.coords.latitude);
            console.log("Longitude: " + position.coords.longitude);
            coordinates$({latitude:position.coords.latitude , longitude:position.coords.longitude})
            // CALL TO HANDLE WEATHER
            // GetWeather();
    };
        
    // FUNCTION TO HANDLE ERROR OCCURED AFTER USER'S COORDINATES WAS REQUESTED
    const showError = (error) => {
    switch(error.code) {
        case error.PERMISSION_DENIED:
        console.log("User denied the request for Geolocation.");
        messageAlert$("Please make sure to let the browser to access your location!")
        showAlert$(true);
        break;
        case error.POSITION_UNAVAILABLE:
        console.log("Location information is unavailable.");
        messageAlert$("Your browser provides no information about your current location, please type the desired address in the field.")
        showAlert$(true);
        break;
        case error.TIMEOUT:
        console.log("The request to get user location timed out.");
        messageAlert$("Something went wrong, the browser takes longer time than expected...");
        showAlert$(true);
        break;
        case error.UNKNOWN_ERROR:
        console.log("An unknown error occurred.");
        messageAlert$("An unknown error occured, please type the desired address in the field.")
        showAlert$(true);
        break;
        default:
        console.log("An unknown error occurred.");
        messageAlert$("An unknown error occured, please type the desired address in the field.");
        showAlert$(true);
    }
    };
    //

    // opencage api ---------------------------------------
    async function getCoordinatesFromAddress(address){
    
        const apiKey = '8ebee78b743f4f86993afce72e781803'
        const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(address)}&key=${apiKey}`;
    
        try{
          const response = await fetch(apiUrl);
          const data = await response.json();
          if(data.results.length > 0){
            const {lat, lng} = data.results[0].geometry;
            console.log(data)
            coordinates$({latitude: lat, longitude: lng});
          }else{
            throw new Error('No Results Found');
          }
        }catch(_error_){
          console.error('Error Fetching Data: ' + _error_);
        }
      }
    // ------------------------------------------------------

    //meteo api----------------------------------------------
    const FetchWeatherData = async (_coordinates_,_timeOffset_) =>{
        var latitude = _coordinates_.latitude;
        var longitude = _coordinates_.longitude;
        
        if(longitude == '' || latitude == ''){
            return
        }
        try{
            const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,is_day,rain,showers,snowfall&minutely_15=temperature_2m,rain,snowfall,snowfall_height,freezing_level_height,weather_code&time_mode=time_interval&timezone=auto&models=best_match`);
            if(!response.ok){throw new Error('Network response was not ok')}
            const data = await response.json();
            console.log(data)

            const now = new Date();
            const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000); // UTC time in millieseconds
            const offsetHours = parseInt(_timeOffset_.split(":")[0]);
            const offsetMinutes = parseInt(_timeOffset_.split(":")[1]);

            const localTime = new Date(utcTime + (offsetHours * 3600000) + (offsetMinutes * 60000));

            const localMinutes = localTime.getMinutes();
            const roundedMinutes = Math.floor(localMinutes / 15) * 15;
            localTime.setMinutes(roundedMinutes);
            localTime.setSeconds(0);
            localTime.setMilliseconds(0);

            const currentTimeString = formatLocalTime(data.current.time);

            const timeIndex = data.minutely_15.time.findIndex(time=> time === currentTimeString) ;
            // console.log(timeOffset)
            // console.log(localTime)
            // console.log(timeIndex)
            // console.log(currentTimeString)
            
            const datePart = currentTimeString.split('T')[0];
            const timePart = currentTimeString.split('T')[1];

            if(timeIndex !== -1){
                const currentTemperature = data.minutely_15.temperature_2m[timeIndex];
                const currentWeatherCode = data.minutely_15.weather_code[timeIndex];
                const rains = data.current.rain;
                const showers = data.current.showers;
                const snows = data.current.snowfall;
                const is_day = data.current.is_day === 1 ? true : false
                currentWeatherData$(prev=>({
                    ...prev, 
                    temperature: currentTemperature,
                    weatherCode: currentWeatherCode,
                    date: datePart,
                    time:timePart,
                    rain:rains,
                    showers:showers,
                    snow:snows,
                    is_day:is_day
                }))


                
                    var time = []
                    var temp = []
                    var temp_ = ""
                    for(let i = 0;  i < 12; i++){
                        var timeIndexCopy = timeIndex
                        if(data.minutely_15.time[timeIndexCopy].split(':')[1] == '15') {timeIndexCopy = timeIndexCopy-1}
                        if(data.minutely_15.time[timeIndexCopy].split(':')[1] == '30') {timeIndexCopy = timeIndexCopy-2}
                        if(data.minutely_15.time[timeIndexCopy].split(':')[1] == '45') {timeIndexCopy = timeIndexCopy-3}
                        timeIndexCopy = timeIndexCopy+(i*4)
                        var time_ = data.minutely_15.time[timeIndexCopy]
                        time_ = time_.split('T')[1]
                        var temp_ = data.minutely_15.temperature_2m[timeIndexCopy]
                        temp_ = Math.round(temp_)
                        time[i]=(time_)
                        temp[i]=(temp_)
                    }
                    
                    hourlyForecastData$([time, temp])
                  
            }


        }catch(_error_){
            console.log(_error_)
        }
    }
    // ------------------------------------------------------

    // geoapify api -----------------------------------------
    async function fetchSuggestions(value){
                console.log("FETCh")
                fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${value}&apiKey=${myApiKey}`)
                .then(response => response.json())
                .then(data=>{
                
                const filteredData = data.features.filter(item=>item.properties.city!==undefined);
                // suggestions$(filteredData.features)

                suggestions$(data.features)
                
                console.log(data.features)
            })
        
            .catch(error=>{
                messageAlert$("Error fetching data for autocomplete")
                showAlert$(true)
                console.log(error)
            })
        
    }
    // ------------------------------------------------------
    
    // DEBOUNCE FUNCTION FOR GET SUGGESTIONS ----------------
    function debounce (func, delay){
        let debounceTimer;
        return function() {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(()=>func.apply(this, arguments), delay)
        }
    }
    // ------------------------------------------------------
    const debouncedFetchSuggestions = useCallback(debounce(fetchSuggestions, 300), []);
    // ------------------------------------------------------

    // ------------------------------------------------------

    // geoapify api ----------------------------------
    async function FetchToGetCoordinates (value){
        const response = await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${value}&apiKey=${myApiKey}`)
        const data = await response.json();
        if(data.features){
            var longitude = data.features[0].properties.lon;
            var latitude = data.features[0].properties.lat;
            coordinates$({latitude:latitude, longitude:longitude})
        }
        else{
            messageAlert$("Invalid Address was entered!");
            showAlert$(true);
        }
    }
    // -----------------------------------------------
    

    //  CUSTOM FUNCTION TO FORMATE LOCAL TIME
    function formatLocalTime(date) {
        console.log(date)
        date = new Date(date)
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        console.log(hours)
        console.log(date)
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${year}-${month}-${day}T${hours}:${minutes}`;
    }
    // USEEFFECT TO HIDE ALERT COMPONENT AUTOMATICALLY AFTER 5 SECONDS
    useEffect(()=>{
        if(showAlert){
            setTimeout(()=>{showAlert$(false)},5000); 
        } 
    },[showAlert])

    // SHOW COORDINATES EVERYTIME IT CHANGED
    useEffect(()=>{
        var exCoordinates = {
            latitude:"52.52437",
            longitude:"13.41053"
        }
        var timeOffset = '+02:00'
        FetchWeatherData(exCoordinates, timeOffset)   
    },[])
    //

    // useEffect(()=>{console.log("SUGGESTIONS RAN")},[suggestions])

    // FUNCTION TO HANDLE PUTTING VALUES IN UI
    // async function FetchToGetWeather (coordinates) {
    // }


    return(
        <div className="SearchBar" >

            <div className="SearchBar__container1" id="adress-container">

                <input type="text" placeholder="City" className="SearchBar__inputField" id="address-input" value={query} onChange={handleInputChange}/>
                {/* <   img src={locationSVG} className="SearchBar__locationSVG"/> */}

                <ul className={`SearchBar__suggestionsUl ${showUl?'showUl':''}`}>
                    {
                        suggestions.map((item,index)=>(
                            <li className="SearchBar__suggestionsLi" key={index} onClick={()=>listItem__click(item)}> 
                                <p className="SearchBar__liCity">{item.properties.city ? item.properties.city : item.properties.address_line1}</p>
                                <div className="SearchBar__liContainer">
                                    <p className="SearchBar__state">{item.properties.state},</p>
                                    <p className="SearchBar__country"> &nbsp;{item.properties.country}</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>

            </div>

            <div className="SearchBar__container2">
                <button className="SearchBar__locationButton"  onClick={locationButton__click}> Use My Location </button>
            </div>
        </div>
    )
}