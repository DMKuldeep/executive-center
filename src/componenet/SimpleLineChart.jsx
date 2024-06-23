import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

// Register necessary components
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);



const VerticalBarChart3 = () => {
  // Data for the third chart with two datasets and two data points each
  const data = {
    labels: ['Product A', 'Product B'],
    datasets: [
      {
        label: '2019',
        data: [65, 59],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 0.5,
      },
      {
        label: '2020',
        data: [80, 81],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
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
        text: 'Product Comparison for 2019 and 2020',
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Products',
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
        <VerticalBarChart3 />
      </div>
     
    </div>
  );
};

export default App;
