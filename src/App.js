
import React from "react";
import SimpleLineChart from "./componenet/SimpleLineChart";
import "./App.css";
import DoubleLineChart from "./componenet/DoubleLineChart";
import SingleLineChart from "./componenet/SingleLineChart";
import BarGraph from "./componenet/BarGraph";


function App() {


const barData = [
    { label: 'Bar 1', value: 40 },
    { label: 'Bar 2', value: 70 },
    { label: 'Bar 3', value: 50 },
    { label: 'Bar 4', value: 30 },
];

const doubleLineData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  dataset1: [65, 59, 80, 81, 56, 55, 40],
  dataset2: [28, 48, 40, 19, 86, 27, 90]
};
  return (
    <div className="App">
      <DoubleLineChart data={doubleLineData} />
      <SingleLineChart/>
      <BarGraph data={barData}/>
      {/* <SimpleLineChart/> */}
    </div>
  );
}

export default App;
