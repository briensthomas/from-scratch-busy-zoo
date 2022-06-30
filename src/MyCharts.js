import React from 'react';
import { VictoryChart, VictoryVoronoi, VictoryBar } from 'victory';
import { data } from './data';
export default function MyCharts() {
  return (
    <div className='charts'>
      <VictoryChart >
        <VictoryVoronoi 
          x='quarter'
          y='earnings'
          style={{ data: { stroke: '#c43a31', strokeWidth: 2 } }}
          data = {[
            { quarter: 1, earnings: 13000 },
            { quarter: 2, earnings: 16500 },
            { quarter: 3, earnings: 14250 },
            { quarter: 4, earnings: 19000 }
          ]}/>
      </VictoryChart>
      <VictoryChart domainPadding={20}>
        <VictoryBar 
          x='quarter'
          y='earnings'
          data={data} />
      </VictoryChart>
    </div>
  );
}
