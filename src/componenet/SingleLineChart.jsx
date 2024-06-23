import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);


const VerticalBarChart4 = () => {
  const data = {
    labels: ['Category 1', 'Category 2'],
    datasets: [
      {
        label: 'Metric 1',
        data: [45, 55],
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 0.5,
      },
      {
        label: 'Metric 2',
        data: [35, 75],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
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
        text: 'Comparison of Metrics for Two Categories',
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Categories',
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Values',
        },
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

const App = () => {
  return (
    <div className="app">
      
      <div className="card">
        <VerticalBarChart4 />
      </div>
    </div>
  );
};

export default App;
