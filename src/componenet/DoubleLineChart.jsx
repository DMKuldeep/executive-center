// DoubleLineChart.js

import React from 'react';
import { Line } from 'react-chartjs-2';

const DoubleLineChart = ({ data }) => {
    // Extract labels and datasets from props
    const { labels, dataset1, dataset2 } = data;

    // Define the chart data
    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: dataset1,
                fill: false,
                borderColor: 'rgba(75, 192, 192, 1)',
                tension: 0.1
            },
            {
                label: 'Dataset 2',
                data: dataset2,
                fill: false,
                borderColor: 'rgba(54, 162, 235, 1)',
                tension: 0.1
            }
        ]
    };

    // Define the chart options
    const chartOptions = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    return (
        <div className="double-line-chart">
            <Line data={chartData} options={chartOptions} />
        </div>
    );
};

export default DoubleLineChart;
