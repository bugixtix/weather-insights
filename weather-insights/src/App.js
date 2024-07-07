import './App.css';
import './styles/styles.js'
import './styles/media-styles.css'
import './styles/alert.css'
import Navbar from './components/Navbar.jsx';
import Content from './components/Content.jsx';
import Footer from './components/Footer.jsx';
import React, {useState, useEffect} from 'react';
import debounce from 'lodash.debounce'
import cloud from './images/sun_.svg'
import Alert from './components/Alert.jsx';

function App() {

  var [screenWidth, screenWidth$] = useState(1440)
  var [widthChanged, widthChanged] = useState(0)
  var [pageStarts, pageStarts$] = useState(false)
  var [isLocation, isLocation$] = useState(false)
  var [showAlert, showAlert$] = useState(false)
  var [messageAlert, messageAlert$] = useState('test')

  var [currentWeatherData, currentWeatherData$] = useState({
    city:"",
    temperature:"",
    weatherCode:"",
    date:"",
    time:"",
    day:"", 
    rain:false,
    snow:false,
    is_day:false,
  })

  
  async function getCoordinates(address){
    
    const apiKey = '8ebee78b743f4f86993afce72e781803'
    const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(address)}&key=${apiKey}`;

    try{
      const response = await fetch(apiUrl);
      const data = await response.json();
      if(data.results.length > 0){
        const {lat, lng} = data.results[0].geometry;
        return{latitude: lat, longitude: lng};
      }else{
        throw new Error('No Results Found');
      }
    }catch(_error_){
      console.error('Error Fetching Data: ' + _error_);
    }
  }

  const handleResize = debounce(()=>{
    screenWidth$(window.innerWidth)
  },400);

  useEffect(()=>{
    const address = 'Weißenfels';
    //
    // getCoordinates(address).then(coord=>{
    //   console.log(`Latitude: ${coord.latitude}, Longitude: ${coord.longitude}`)
    // })

    // screenWidth$(window.innerWidth)
    window.addEventListener('resize',handleResize);
    return ()=>window.removeEventListener('resize',handleResize)
  },[])
  useEffect(()=>{
    console.log(currentWeatherData)
  },[currentWeatherData])
  
  return (
    <div className="App">

      <Alert message={messageAlert} showAlert$={showAlert$} showAlert={showAlert}/>
      
      <Navbar 
      screenWidth={screenWidth} screenWidth$={screenWidth$}
      pageStarts={pageStarts}
      
      />

      <Content 
      screenWidth={screenWidth} screenWidth$={screenWidth$} 
      isLocation={isLocation} isLocation$={isLocation$} 
      cloud={cloud}
      showAlert$={showAlert$} showAlert={showAlert}
      messageAlert$={messageAlert$}
      currentWeatherData$={currentWeatherData$} currentWeatherData={currentWeatherData}
      />

      <Footer screenWidth={screenWidth} screenWidth$={screenWidth$}/>

    </div>
  );
}
// Scroller hidden or transparent!

export default App;
