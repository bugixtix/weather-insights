import React from "react";
import {Line} from 'react-chartjs-2';
import 'chart.js/auto'
import annotationPlugin from 'chartjs-plugin-annotation'
import { Chart as ChartJS, registerables } from "chart.js";
import { Legend, Tooltip, elements } from "chart.js/auto";
import ChartDataLabels from 'chartjs-plugin-datalabels'
ChartJS.register(...registerables, ChartDataLabels);

export function HourlyWeatherChart({labels, data, place}){
    const chartData = {
        labels:labels,
        datasets:[
            {
                label:'temperature in °',
                data:data,
                fill:true,
                borderColor:'rgb(75,192,192)',
                tension:0.1,
                pointBackgroundColor:'rgba(75,192,192,1)',
                pointBorderColor:'#fff',
                pointHoverBackgroundColor:'#fff',
                pointHoverBorderColor:'rgba(75,192,192,1)',
                pointRadius:5,
            }
        ]
    }
    const options = {
        responsive:true,
        plugins:{
            legend:{
                display:false,
            },
            title:{
                display:true,
                text:'Hourly temperature in ' +place,
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

    return (
        <div className="HourlyWeatherChart">
            <Line data={chartData} options={options}/>
        </div>
    )
}