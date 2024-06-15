


export const Nav =(screenWidth)=> {
    return {
        display:'flex',
        flexDirection:'row',
        width:'100%' ,
        textAlign:'center',
        position:'relative',
        borderBottom:'1px solid black',
        padding: screenWidth > 1000 ? '0px 80px' : screenWidth > 400 && screenWidth <= 1000 ? '0px 40px' : '0px 8px',
        backgroundColor:'#ededed99',
        transition:'all ease-in-out 800ms'
    } 
}
export const Nav__container1 = (screenWidth)=>{
    return {
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
    }
}
export const Nav__text = (screenWidth)=>{
    return {
        fontSize:'18px',
        color:'blue',
        padding:'8px 0px'
    }
}


export const Footer = (screenWidth)=>{
    return{
        display:'flex',
        flexDirection:'row',
        width:'100%' ,
        textAlign:'center',
        position:'relative',
        bottom:0,
        borderTop:'1px solid black',
        padding: screenWidth > 1000 ? '0px 80px' : screenWidth > 400 && screenWidth <= 1000 ? '0px 40px' : '0px 8px',
        backgroundColor:'#ededed99',

    }
}
export const Footer__container1 = (screenWidth)=>{
    return{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',       
    }
}
export const Footer__text = (screenWidth)=>{
    return{
        fontSize:'18px',
        color:'blue',
        padding:'8px 0px'
    }
}

export const Content = (screenWidth)=>{
    return{
        width:'100%',
        display:'flex',
        flexWrap:'wrap',
        flex:'1',
    }
}
export const Content__container1 = (screenWidth)=>{
    return{
        width:'100%',
    }
}
export const Content__text = (screenWidth)=>{
    return{
        fontSize:'18px',
        color:'blue',
        padding:'8px 0px'
    }
}

export const SearchBar = (screenWidth)=>{
    return{
        width:'100%',
        height: screenWidth > 1000 ? '50px' : 'auto',
        display:'flex',
        flexDirection:  screenWidth > 1000 ? 'row' : screenWidth > 450 && screenWidth <= 1000 ? 'column' : 'column',
        
        alignItems:'center',
        
        backgroundColor:'#cdcdcd',
        padding: screenWidth > 1000 ? '0px 80px' : screenWidth > 450 && screenWidth <= 1000 ? '0px 40px' : '0px 8px',
    }
}

export const SearchBar__container1 = (screenWidth)=>{
    return{
        flexWrap:screenWidth > 1000 ? 'nowrap' : screenWidth > 450 && screenWidth <= 1000 ? 'nowrap' : 'wrap',
        flex: screenWidth> 1000 ? 3 : 1,
        display:'flex',
        flexDirection:'row',
        width: screenWidth>1000 ? 'auto' :screenWidth > 400 && screenWidth <= 450 ? '100%' : '100%',
        alignItems:'center', justifyContent:'center'
    }
}
export const SearchBar__inputField = (screenWidth,focus)=>{
    return{
        flexWrap:'wrap',
        flex:screenWidth > 1000 ? 3 : 2,
        // padding:'6px 4px',
        cursor:'pointer',
        border: focus ? '2px solid #111111' : '2px solid #dddddd',

        borderRadius:'2px',
        fontSize:'14px',
        outline:'none',
        transition:'all ease 600ms',
        padding:'7px 4px',
        margin:screenWidth >1000 ? '0px 20px 0px 0px' : '0px 8px 0px 0px'
    }
}
export const SearchBar__searchButton = (screenWidth, hover)=>{
    return{
        flex:1,
        padding:'6px 4px',
        margin:screenWidth > 1000 ? '0px 20px 0px 0px' : screenWidth > 450 && screenWidth <= 1000 ? '4px 0px' :' 4px 0px',
        cursor:'pointer',
        borderRadius:'2px',
        backgroundColor:hover?'#dddddd':'#ffffff',
        fontSize:'14px',
        fontFamily:'Segoe UI',
        fontWeight:'400',
        color:'blue',
        border:hover?'2px solid #111111':'2px solid #dddddd',
        transition:'all ease 600ms',

    }
}
export const SearchBar__container2 = (screenWidth)=>{
    return{
        display:'flex',
        flex: 1 ,
        flexDirection:'row',
        alignItems:'center',
        width:screenWidth > 1000 ? 'auto' : screenWidth > 450 && screenWidth <= 1000 ? '100%' : '100%',
    }
}
export const SearchBar__locationButton = (screenWidth, hover)=>{
    return{
        flex:1,
        padding:'6px 4px',
        margin:screenWidth > 1000 ? '0px 0px 0px 0px' : screenWidth > 450 && screenWidth <= 1000 ? '4px 0px' :' 4px 0px',
        cursor:'pointer',
        borderRadius:'2px',
        backgroundColor:hover?'#dddddd' : '#ffffff',
        fontSize:'14px',
        fontFamily:'Segoe UI',
        fontWeight:'400',
        color:'blue',
        border:hover ? '2px solid #111111' : '2px solid #dddddd' ,
        transition:'all ease 600ms',
    }
}

//

export const CurrentWeather = (screenWidth) =>{

    return{
        display:'flex',
        flexDirection:'column',
        padding: screenWidth > 1000 ? '20px 80px 20px 80px' : screenWidth > 450 && screenWidth <=1000 ? '10px 40px ' : '10px 8px',
        // alignItems:'center',
        flexWrap:screenWidth>1000 ? 'nowrap' : screenWidth > 450 && screenWidth <= 1000 ? 'nowrap' : 'wrap',
        width:'100%',
        backgroundColor:'transparent'
    }
}
export const CurrentWeather__box = (screenWidth)=>{

    return{
        position:'relative',
        backgroundColor:'transparent',
        borderRadius:'4px',
        display:'flex',
        flexDirection:'column',
        flexWrap:screenWidth>1000 ? 'nowrap' : screenWidth > 450 && screenWidth <= 1000 ? 'nowrap' : 'wrap',
        width:'100%',
        // variable
        height:screenWidth > 1000 ? '140px' : screenWidth > 450 && screenWidth <= 1000 ?'auto': 'auto',
        borderRadius:'8px',
    }
}

export const CurrentWeather__video = (screenWidth)=>{
    return{
        width:'100%',
        height:'100%',
        position:'absolute',
        objectFit:'cover',
        // variable
        objectPosition:'50% 43% ',
        opacity:'0.8',
        zIndex:'-1',
        borderRadius:'8px',
        // transform:'translate(-50% -50%)'
    }
}
export const CurrentWeather__container1 = (screenWidth) =>{

    return{
        width:'100%',
        display:'flex',
        flexWrap:'wrap',
        alignItems:'center',
    }
}
export const CurrentWeather__label = (screenWidth) =>{

    return{
        fontSize:'14px', 
        padding:screenWidth>1000? '4px 20px' : screenWidth>450 && screenWidth<=1000 ? '4px 8px' : '4px 8px',
        fontFamily:'Segoe UI',
        // borderBottom:'2px solid #aaaaaa',
        width:'100%',
    }
}
export const CurrentWeather__container2 = (screenWidth) =>{

    return{
        display:'flex',
        flexDirection:'row',
        flexWrap: screenWidth > 1000 ? 'nowrap' : screenWidth > 450 && screenWidth <= 1000 ? 'nowrap' : 'wrap',
        padding:screenWidth > 1000 ? '8px 16px' : screenWidth > 450 && screenWidth <= 1000 ? '8px 8px' : '8px 4px'
    }
}
export const CurrentWeather__weatherIcon = (screenWidth) =>{

    return{
        
    }
}
export const CurrentWeather__weatherIconImg = (screenWidth) =>{

    return{
        fontSize:'14px',
        width:'60px'
    }
}
export const CurrentWeather__temperatureAndDescription = (screenWidth) =>{

    return{
        display:'flex', 
        flexDirection:'column',
        flexWrap: screenWidth > 1000 ? 'nowrap' : screenWidth > 450 && screenWidth <= 1000 ? 'nowrap' : 'wrap',
        padding:screenWidth > 1000 ? '0px 8px' : screenWidth > 450 && screenWidth <= 1000 ? '0px 4px' : '0px 4px',
        justifyContent:'center', 
        alignItems:'flex-start',
    }
}
export const CurrentWeather__temperature = (screenWidth) =>{

    return{
      fontFamily:'Segoe UI',
      fontSize:'20px',
      fontWeight:'500',   
    }
}
export const CurrentWeather__description = (screenWidth) =>{

    return{
        fontFamily:'Segoe UI',
        fontSize:'18px',
        fontWeight:'400',
    }
}


//

export const HourlyWeather = (screenWidth) =>{
    return{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    }
}

export const HourlyWeather__box = (screenWidth)=>{
    return{

    }
}

export const HourlyWeather__container1 = (screenWidth)=>{
    return{
        
    }
}

export const HourlyWeather__label = (screenWidth)=>{
    return{
        
    }
}

export const HourlyWeather__container2 = (screenWidth)=>{
    return{
        
    }
}
//
export const OneHourCard = (screenWidth) =>{

    return{

    }
}
export const OneHourCard__box = (screenWidth) =>{

    return{
        
    }
}
export const OneHourCard__hour = (screenWidth) =>{

    return{
        
    }
}
export const OneHourCard__hourText = (screenWidth) =>{

    return{
        
    }
}
export const OneHourCard__icon = (screenWidth) =>{

    return{
        
    }
}
export const OneHourCard__iconImg = (screenWidth) =>{

    return{
        
    }
}
export const OneHourCard__temperature = (screenWidth) =>{

    return{
        
    }
}
export const OneHourCard__temperatureText = (screenWidth) =>{

    return{
        
    }
}

export const OneHourCard__humidityIconAndPercentage = (screenWidth) =>{

    return{
        
    }
}

export const OneHourCard__humidityIconImg = (screenWidth) =>{

    return{
        
    }
}

export const OneHourCard__percentage = (screenWidth) =>{

    return{
        
    }
}
