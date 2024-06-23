// BarGraph.js

import React from 'react';
import './BarGraph.css'; // Stylesheet for the bar graph

const BarGraph = ({ data }) => {
    // Calculate the maximum value in data to normalize bar heights
    const max = Math.max(...data.map(item => item.value));

    return (
        <div className="bar-graph">
            {data.map((item, index) => (
                <div
                    className="bar"
                    key={index}
                    style={{ height: `${(item.value / max) * 100}%` }}
                    data-label={item.label}
                    data-value={item.value}
                >
                    <span className="bar-label">{item.label}</span>
                </div>
            ))}
        </div>
    );
};

export default BarGraph;
