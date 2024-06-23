
import React from "react";
// import SimpleLineChart from "./componenet/SimpleLineChart";
import "./App.css";
import DoubleLineChart from "./componenet/DoubleLineChart";
import SingleLineChart from "./componenet/SingleLineChart";
import BarGraph from "./componenet/BarGraph";


function App() {

  return (
    <div className="App">
      <div className="w-[300px] ">
      <DoubleLineChart />
      </div>
      <div className="w-[300px] "><SingleLineChart/></div>
      
      <div className="w-[300px] ">

      <BarGraph/>
      </div>
      {/* <SimpleLineChart/> */}
    </div>
  );
}

export default App;
