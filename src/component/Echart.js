import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';

const Echart: React.FC = () => {
  const option = {
    color: ['rgb(152,34,244)', ' rgba(234, 79, 201, 1)', '#56A3F1', '#FF917C'],
    title: {
      text: ''
    },
    tooltip: {},
    legend: {},
    radar: {
      // shape: 'circle',
      indicator: [
        { text: 'LOCATION' },
        { text: 'PREVIOUS EMPLOYERS' },
        { text: 'SKILLS & KEYWORDS' },
        { text: 'QUALIFICATIONS' },
        { text: 'EXPERIENCE' }
      ],
      radius: 120,
      startAngle: 90,
      splitNumber: 4,
      shape: 'circle',
      axisName: {
        formatter: '{value}',
        color: '#fff'
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(211, 253, 250, 0.8)'
        }
      }
    },
    series: [  {
        type: 'radar',
        emphasis: {
          lineStyle: {
            width: 4
          }
        },
        data: [
          {
            value: [100, 8, 0.4, -80, 2000],
            name: '',
            areaStyle:{
                color:'rgba(152,34,244, 0.6)'
            }
          },
          {
            value: [60, 5, 0.3, -100, 1500],
            name: '',
            areaStyle: {
              color: 'rgba(234, 79, 201)'
            }
          }
        ]
      },]
  };

  let timer;

  useEffect(() => {
    return () => clearTimeout(timer);
  });



  function onChartReady(echarts) {
    timer = setTimeout(function() {
      echarts.hideLoading();
    }, 3000);
  }

  return <ReactECharts
    option={option}
    style={{ height: 400 }}
    onChartReady={onChartReady}
    // loadingOption={loadingOption}
    // showLoading={true}
    style={{marginBottom:'200px'}}
  />;
};

export default Echart;
