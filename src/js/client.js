import React from 'react';
import ReactDOM from 'react-dom';

import { VictoryBar, VictoryChart, VictoryAxis, VictoryTooltip } from 'victory';

const data = [
  {quarter: 1, earnings: 13000, label: 'q1'},
  {quarter: 2, earnings: 16500, label: 'q2'},
  {quarter: 3, earnings: 14250, label: 'q3'},
  {quarter: 4, earnings: 19000, label: 'q4'}
];

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>Start vizualization</h1>
        <VictoryChart
           domainPadding={10}
         >
           <VictoryAxis
             tickValues={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
           />
           <VictoryAxis
             dependentAxis
             tickFormat={(x) => (`$${x / 1000}k`)}
           />
           <VictoryBar
             data={data}
             x={"quarter"}
             y={"earnings"}
             style={{
               data: {fill: "tomato", width: 20}
              }}
            labelComponent={
              <VictoryTooltip
                cornerRadius={(d) => d.x > 6 ? 0 : 20}
                pointerLength={(d) => d.y > 0 ? 5 : 20}
                flyoutStyle={{
                stroke: (d) => d.x === 10 ?
                "tomato" : "black"
                }}
              />
            }
           />
         </VictoryChart>
        </div>
    )
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Main />, app);
