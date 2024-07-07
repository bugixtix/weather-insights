// import Sunny from '../weather-svgs/a_1_sunny.svg'
// import VerySunny from '../weather-svgs/a_3_very_sunny.svg'
// import ClearNight from '../weather-svgs/a_4_night.svg'
// import PartlyCloudy from '../weather-svgs/b_1_partly_cloudy.svg'
// import Cloudy from '../weather-svgs/b_2_cloudy.svg'
// import VeryCloudy from '../weather-svgs/b_3_very_cloudy.svg'
// import CloudyNight from '../weather-svgs/b_4_cloudy_night.svg'
// import Rainy from '../weather-svgs/c_1_rainy.svg'
// import HeavyRain from '../weather-svgs/c_2_heavy_rain.svg'
// import Thunderstorm from '../weather-svgs/c_3_thunderstorm.svg'
// import Lightning from '../weather-svgs/c_4_lightning.svg'
// import Snow from '../wather-svgs/d_1_snow.svg'
// import HeavySnow from '../weather-svgs/d_2_heavy_snow.svg'
// import Sleet from '../weather-svgs/d_3_sleet.svg'
// import Fog from '../weather-svgs/d_4_fog.svg'
// import Windy from '../weather-svgs/f_3_windy.svg'
// import VeryWindy from '../weather-svgs/f_4_very_windy.svg'
// import Stormy from '../weather-svgs/g_1_stormy.svg'
// import VeryStormy from '../weather-svgs/g_2_very_stormy.svg'


// export function WMOCodeToSVG(code, isday,className){
//   var ar_cloudy = [4,5,6,7,8,14,15,16,19];
//   var ar_rainy = [21,24,25,50,51,52,60,61,63,65,68,80,81,83,90,91];
//   var ar_heavyRain = [53,54,55,56,57,58,59,62,64,66,67,69,82,93];
//   var ar_thunder = [17,29,92];
//   var ar_snow = [20,22,70,71,72,73,75,85,86,94];
//   var ar_heavySnow = [26,36,37,38,39,27,74,76,95];
//   var ar_sleet = [23,77,78,79,83,84,87,88,89];
//   var ar_fog = [10,11,12,28,40,41,42,43,44,45,46,47,48,49];
//   var ar_veryWindy = [33,34,35]
//   var ar_stormy = [9,30,31,96,97,98]
//   return <img className={className} src=
//       {
//         code === 0 && isday === 1? Sunny
//         : code === 1 ? VerySunny
//         : code === 0 && isday === 0 ? ClearNight
//         : code === 2 ? PartlyCloudy
//         : ar_cloudy.indexOf(code) !== -1 ? Cloudy
//         : code === 3 && isday === 1 ? VeryCloudy
//         : (code === 3 && isday === 0) || (code === 3 && isday === 0) ? <CloudyNight/> 
//         : ar_rainy.indexOf(code) !== -1 ? Rainy 
//         : ar_heavyRain.indexOf(code) !== -1 ? HeavyRain 
//         : ar_thunder.indexOf(code) !== -1 ? Thunderstorm
//         : code === 13 ? Lightning
//         : ar_snow.indexOf(code) !== -1 ? Snow
//         : ar_heavySnow.indexOf(code) !== -1 ? HeavySnow
//         : ar_sleet.indexOf(code) !== -1 ? Sleet
//         : ar_fog.indexOf(code) !== -1 ? Fog
//         : code === 18 || code === 32 ? Windy
//         : ar_veryWindy.indexOf(code) !== -1 ? VeryWindy 
//         : ar_stormy.indexOf(code) !== -1 ? Stormy
//         : code === 29 || code === 99 ? VeryStormy
//         : VeryStormy
//       }
//     />
// }



export var wmoCodeInterpretation = {

    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    4: "Visibility reduced by smoke",
    5: "Haze",
    6: "Widespread dust in the air",
    7: "Dust or sand raised by wind",
    8: "Well-developed dust or sand whirl(s)",
    9: "Duststorm or sandstorm",
    10: "Mist",
    11: "Shallow fog",
    12: "Continuous shallow fog",
    13: "Lightning visible, no thunder",
    14: "Precipitation not reaching ground",
    15: "Distant precipitation",
    16: "Nearby precipitation",
    17: "Thunderstorm, no precipitation",
    18: "Squalls",
    19: "Funnel cloud(s)",
    20: "Drizzle or snow grains",
    21: "Rain",
    22: "Snow",
    23: "Rain and snow or ice pellets",
    24: "Freezing drizzle or freezing rain",
    25: "Rain shower(s)",
    26: "Snow shower(s)",
    27: "Hail shower(s)",
    28: "Fog or ice fog",
    29: "Thunderstorm",
    30: "Decreasing slight/moderate duststorm",
    31: "No change in slight/moderate duststorm",
    32: "Increasing slight/moderate duststorm",
    33: "Decreasing severe duststorm",
    34: "No change in severe duststorm",
    35: "Increasing severe duststorm",
    36: "Slight/moderate low blowing snow",
    37: "Heavy low drifting snow",
    38: "Slight/moderate high blowing snow",
    39: "Heavy high drifting snow",
    40: "Distant fog or ice fog",
    41: "Fog patches",
    42: "Thinning fog, sky visible",
    43: "Thinning fog, sky invisible",
    44: "No change in fog, sky visible",
    45: "No change in fog, sky invisible",
    46: "Thickening fog, sky visible",
    47: "Thickening fog, sky invisible",
    48: "Fog depositing rime, sky visible",
    49: "Fog depositing rime, sky invisible",
    50: "Intermittent slight drizzle",
    51: "Continuous slight drizzle",
    52: "Intermittent moderate drizzle",
    53: "Continuous moderate drizzle",
    54: "Intermittent heavy drizzle",
    55: "Continuous heavy drizzle",
    56: "Slight freezing drizzle",
    57: "Moderate/heavy freezing drizzle",
    58: "Slight drizzle and rain",
    59: "Moderate/heavy drizzle and rain",
    60: "Intermittent slight rain",
    61: "Continuous slight rain",
    62: "Intermittent moderate rain",
    63: "Continuous moderate rain",
    64: "Intermittent heavy rain",
    65: "Continuous heavy rain",
    66: "Slight freezing rain",
    67: "Moderate/heavy freezing rain",
    68: "Slight rain or drizzle and snow",
    69: "Moderate/heavy rain or drizzle and snow",
    70: "Intermittent slight snow",
    71: "Continuous slight snow",
    72: "Intermittent moderate snow",
    73: "Continuous moderate snow",
    74: "Intermittent heavy snow",
    75: "Continuous heavy snow",
    76: "Diamond dust",
    77: "Snow grains",
    78: "Isolated star-like snow crystals",
    79: "Ice pellets",
    80: "Slight rain shower(s)",
    81: "Moderate/heavy rain shower(s)",
    82: "Violent rain shower(s)",
    83: "Slight rain and snow shower(s)",
    84: "Moderate/heavy rain and snow shower(s)",
    85: "Slight snow shower(s)",
    86: "Moderate/heavy snow shower(s)",
    87: "Slight snow pellets or small hail shower(s)",
    88: "Moderate/heavy snow pellets or small hail shower(s)",
    89: "Hail shower(s), no thunder",
    90: "Slight rain, not at observation time",
    91: "Moderate rain, not at observation time",
    92: "Heavy rain, not at observation time",
    93: "Slight snow, not at observation time",
    94: "Moderate snow, not at observation time",
    95: "Heavy snow, not at observation time",
    96: "Slight drizzle, not at observation time",
    97: "Moderate drizzle, not at observation time",
    98: "Heavy drizzle, not at observation time",
    99: "Thunderstorm, not at observation time",
  
  };

  
  