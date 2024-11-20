import React, { useEffect, useState } from "react";
import {Line} from 'react-chartjs-2';
import 'chart.js/auto'
import annotationPlugin from 'chartjs-plugin-annotation'
import { Chart as ChartJS, registerables } from "chart.js";
import { Legend, Tooltip, elements } from "chart.js/auto";
import ChartDataLabels from 'chartjs-plugin-datalabels'
ChartJS.register(...registerables, ChartDataLabels);

export function HourlyWeatherChart({place, hourlyForecastData}){
    var labels = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00','06:00', '07:00','08:00','09:00','10:00', '11:00','12:00'];
    var data = ['13','12','11','9','9','11','14','15','15','18','19','21','23'];

    var chartData = {
        labels:labels,
        datasets:[
            {
                label:'temperature in °',
                data:data,
                fill:true,
                borderColor:'rgb(75,192,192)',
                tension:0.5,
                pointBackgroundColor:'rgba(75,192,192,1)',
                pointBorderColor:'#fff',
                pointHoverBackgroundColor:'#fff',
                pointHoverBorderColor:'rgba(75,192,192,1)',
                pointRadius:5,
            }
        ]
    }
    var options = {
        responsive:true,
        plugins:{
            legend:{
                display:false,
            },
            title:{
                display:true,
                text:'Hourly temperature in ' + place,
            },
            tooltip:{
                enabled:true,
                callbacks:{
                    label:function(context){
                        let label = context.dataset.labe || '';
                        if(label){
                            label += ': ';
                        }
                        if(context.parsed.y !== null){
                            label += context.parsed.y + '°'
                        }
                        return label
                    }
                }
            },
            datalabels:{
                display:true,
                align:'top',
                backgroundColor:'rgba(75,192,192,0.2)',
                borderRadius:4,
                padding:4,
                font:{
                    size:12,
                    weight:'bold',
                },
                formatter:(value)=>value+'°'
            },
        },
        
    }
    var [hourlyData, hourlyData$] = useState([labels, data])
    var [chartData_, chartData_$] = useState(chartData)
    var [chartOptions_, chartOptions_$] = useState(options)

    useEffect(()=>{
        chartData_$({
            labels:hourlyForecastData[0],
            datasets:[
                {
                    label:'temperature in °',
                    data:hourlyForecastData[1],
                    fill:false,
                    borderColor:'rgb(75,192,192)',
                    tension:0.1,
                    pointBackgroundColor:'rgba(75,192,192,1)',
                    pointBorderColor:'#fff',
                    pointHoverBackgroundColor:'#fff',
                    pointHoverBorderColor:'rgba(75,192,192,1)',
                    pointRadius:5,
                }
            ]
        })
        chartOptions_$({
            responsive:true,
            plugins:{
                legend:{
                    display:false,
                },
                title:{
                    display:true,
                    text:'Hourly temperature in ' + place,
                },
                tooltip:{
                    enabled:true,
                    callbacks:{
                        label:function(context){
                            let label = context.dataset.labe || '';
                            if(label){
                                label += ': ';
                            }
                            if(context.parsed.y !== null){
                                label += context.parsed.y + '°'
                            }
                            return label
                        }
                    }
                },
                datalabels:{
                    display:true,
                    align:'top',
                    backgroundColor:'rgba(75,192,192,0.2)',
                    borderRadius:4,
                    padding:4,
                    font:{
                        size:12,
                        weight:'bold',
                    },
                    formatter:(value)=>value+'°'
                },
            },
            scales:{
                y:{
                    min:Math.min(...hourlyForecastData[1]) - 1,
                    max:Math.max(...hourlyForecastData[1]) + 2,
                    ticks:{
                        stepSize:1
                    }
                }
            }
        })
        console.log(hourlyForecastData)
    },[hourlyForecastData])
    
    return (
        <div className="HourlyWeatherChart">
            <Line data={chartData_} options={chartOptions_}/>
        </div>
    )
}