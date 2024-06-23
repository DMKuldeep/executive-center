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
    ],
  };

  const options = {
    responsive: true,
    indexAxis: 'y', // Display bars horizontally
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: 'Monthly Sales Data',
      },
    },
    scales: {
      x: {
        display: true, // Show x-axis labels
        title: {
          display: false,
          text: 'Sales',
        },
        beginAtZero: true,
      },
      y: {
        display: true, // Hide y-axis labels
        title: {
          display: false,
          text: 'Months',
        },
      },
    },
  };

  return (
    <div className="grid grid-cols-3">
      <div className="col-span-3" style={{ marginRight: '20px' }}>
      <h2 className='text-[20px] font-bold'>Volume</h2>
        
      </div>
      <div className="col-span-3" style={{ flexGrow: 1 }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarGraph;
