import React from 'react';
import {
  PolarChart,
  CommonSeriesSettings,
  Series,
  CommonAnnotationSettings,
  Annotation,
  ArgumentAxis,
  Strip,
  Legend,
} from 'devextreme-react/polar-chart';
import { dataSource, maxDay, minNight } from './data.js';

class RadarChart2 extends React.Component {
  constructor(props) {
    super(props);

    this.maxTempText = `Highest temperature: ${maxDay.day} °C`;
    this.minTempText = `Lowest temperature: ${minNight.night} °C`;
  }

  render() {
    return (
      <div style={{marginTop:'-40px',color:'white'}}>
      <PolarChart
        id="radarChart"
        dataSource={dataSource}
        // title="Average temperature in London"
        
      >
        <CommonSeriesSettings
          type="bar"
          opacity={0.75}
        />
        <Series
          valueField="day"
          name="Day"
          color="#fff"
        />
        <Series
          valueField="night"
          name="Night"
          color="#283081"
        />
        <CommonAnnotationSettings
          opacity={0.7}
          arrowLength={0}
          type="text"
        />
        {/* <Annotation
          angle={45}
          radius={180}
          text="WINTER"
        />
        <Annotation
          angle={135}
          radius={180}
          text="SPRING"
        />
        <Annotation
          angle={225}
          radius={180}
          text="SUMMER"
        />
        <Annotation
          angle={315}
          radius={180}
          text="FALL"
        />
        <Annotation
          argument={maxDay.arg}
          opacity={1}
          offsetX={105}
          paddingTopBottom={15}
          paddingLeftRight={15}
          text={this.maxTempText}
          series="Day"
        />
        <Annotation
          argument={minNight.arg}
          opacity={1}
          offsetX={105}
          paddingTopBottom={15}
          paddingLeftRight={15}
          text={this.minTempText}
          series="Night"
        /> */}
        <ArgumentAxis>
          <Strip
            startValue="December"
            endValue="February"
            color="#FF51AC">
          </Strip>
          <Strip
            startValue="March"
            endValue="May"
            color="#FF51AC">
          </Strip>
          <Strip
            startValue="June"
            endValue="August"
            color="#FF51AC">
          </Strip>
          <Strip
            startValue="September"
            endValue="November"
            color="#FF51AC">
          </Strip>
        </ArgumentAxis>
        <Legend
          horizontalAlignment="center"
          verticalAlignment="bottom"
        />
      </PolarChart>
      </div>
    );
  }
}

export default RadarChart2;
