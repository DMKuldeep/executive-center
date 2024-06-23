import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

// Register necessary components
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const DoubleLineChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales 2023',
        data: [30, 20, 50, 60, 70, 90],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
      {
        label: 'Sales 2024',
        data: [40, 30, 60, 70, 80, 100],
        fill: false,
        borderColor: 'rgba(153, 102, 255, 1)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: 'Monthly Sales Data for 2023 and 2024',
      },
    },
    scales: {
      x: {
        display: false,
        title: {
          display: false,
          text: 'Months',
        },
      },
      y: {
        display: true,
        title: {
          display: false,
          text: 'Sales',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="flex-container grid grid-cols-3">
      <div className="col-span-1">
        <h2 className='text-[20px] font-bold'>Volume</h2>
        <h3>Total: 450</h3>
        <h3>AVG: 75</h3>
      </div>
      <div className="col-span-2">
        <Line data={data} options={options} height={'auto'} width={'auto'} />
      </div>
    </div>
  );
};

export default DoubleLineChart;
