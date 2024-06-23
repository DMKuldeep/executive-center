
import React from "react";
import SimpleLineChart from "./componenet/SimpleLineChart";
import "./App.css";
import DoubleLineChart from "./componenet/DoubleLineChart";
import SingleLineChart from "./componenet/SingleLineChart";
import BarGraph from "./componenet/BarGraph";


function App() {

  return (
    <div className="App">
      <DoubleLineChart />
      {/* <SingleLineChart/> */}
      <BarGraph/>
      {/* <SimpleLineChart/> */}
    </div>
  );
}

export default App;
