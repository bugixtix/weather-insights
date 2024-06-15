import './App.css';
import Navbar from './components/Navbar.jsx';
import Content from './components/Content.jsx';
import Footer from './components/Footer.jsx';
import React, {useState, useEffect} from 'react';
function App() {

  var [screenWidth, screenWidth$] = useState(1440)
  var [pageStarts, pageStarts$] = useState(false)

  useEffect(()=>{
    screenWidth$(window.innerWidth)
  },[])
  
  window.addEventListener('resize',()=>{
    screenWidth$(window.innerWidth)
  })
  return (
    <div className="App">

      <Navbar 
      screenWidth={screenWidth} screenWidth$={screenWidth$}
      pageStarts={pageStarts}
      />

      <Content screenWidth={screenWidth} screenWidth$={screenWidth$}/>

      <Footer screenWidth={screenWidth} screenWidth$={screenWidth$}/>

    </div>
  );
}

export default App;
