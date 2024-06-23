import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

// Register necessary components
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);



const BarGraph = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales 2023',
        data: [30, 20, 50, 60, 70, 90],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 0.5,
      },
      {
        label: 'Sales 2024',
        data: [40, 30, 60, 70, 80, 100],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
        text: 'Monthly Sales Data for 2023 and 2024',
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Months',
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Sales',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="flex-container">
      <div className="headings">
        <h2>Volume</h2>
        <h3>Total: 450</h3>
        <h3>AVG: 75</h3>
      </div>
      <div className="chart">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarGraph;
