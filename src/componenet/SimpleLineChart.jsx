import React from 'react';
import { Bar, Line } from 'react-chartjs-2';

import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';


ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const VerticalBarChart1 = () => {
  // Data for the first chart with one series and two datasets
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
        text: 'hrrrrrrr',
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
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

// const VerticalBarChart2 = () => {
//   // Data for the second chart with issues and AHT
//   const data = {
//     labels: ['mx-wrong address', 'mx-store closed', 'dp-late delivery', 'dp-accident', 'd-non-contactable'],
//     datasets: [
//       {
//         label: 'AHT',
//         data: [150, 100, 200, 250, 180],
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         borderColor: 'rgba(75, 192, 192, 1)',
//         borderWidth: 0.5,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     indexAxis: 'y',
//     plugins: {
//       legend: {
//         display: true,
//       },
//       title: {
//         display: true,
//         text: 'Top Issues by AHT',
//       },
//     },
//     scales: {
//       x: {
//         display: true,
//         title: {
//           display: true,
//           text: 'AHT',
//         },
//         beginAtZero: true,
//         max: 400,
//       },
//       y: {
//         display: true,
//         title: {
//           display: true,
//           text: 'Issues',
//         },
//       },
//     },
//   };

//   return <Line data={data} options={options} />;
// };

// const VerticalBarChart3 = () => {
//   // Data for the third chart with two datasets and two data points each
//   const data = {
//     labels: ['Product A', 'Product B'],
//     datasets: [
//       {
//         label: '2019',
//         data: [65, 59],
//         backgroundColor: 'rgba(255, 99, 132, 0.2)',
//         borderColor: 'rgba(255, 99, 132, 1)',
//         borderWidth: 0.5,
//       },
//       {
//         label: '2020',
//         data: [80, 81],
//         backgroundColor: 'rgba(54, 162, 235, 0.2)',
//         borderColor: 'rgba(54, 162, 235, 1)',
//         borderWidth: 0.5,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         display: true,
//       },
//       title: {
//         display: true,
//         text: 'Product Comparison for 2019 and 2020',
//       },
//     },
//     scales: {
//       x: {
//         display: true,
//         title: {
//           display: true,
//           text: 'Products',
//         },
//       },
//       y: {
//         display: true,
//         title: {
//           display: true,
//           text: 'Values',
//         },
//         beginAtZero: true,
//       },
//     },
//   };

//   return <Bar data={data} options={options} />;
// };

// const VerticalBarChart4 = () => {
//   // Data for the fourth chart with two datasets and two data points each
//   const data = {
//     labels: ['Category 1', 'Category 2'],
//     datasets: [
//       {
//         label: 'Metric 1',
//         data: [45, 55],
//         backgroundColor: 'rgba(255, 206, 86, 0.2)',
//         borderColor: 'rgba(255, 206, 86, 1)',
//         borderWidth: 0.5,
//       },
//       {
//         label: 'Metric 2',
//         data: [35, 75],
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         borderColor: 'rgba(75, 192, 192, 1)',
//         borderWidth: 0.5,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         display: true,
//       },
//       title: {
//         display: true,
//         text: 'Comparison of Metrics for Two Categories',
//       },
//     },
//     scales: {
//       x: {
//         display: true,
//         title: {
//           display: true,
//           text: 'Categories',
//         },
//       },
//       y: {
//         display: true,
//         title: {
//           display: true,
//           text: 'Values',
//         },
//         beginAtZero: true,
//       },
//     },
//   };

//   return <Bar data={data} options={options} />;
// };

const App = () => {
  return (
    <div className="app">
      <div className="card">
        <VerticalBarChart1 />
      </div>
      {/* <div className="card">
        <VerticalBarChart2 />
      </div>
      <div className="card">
        <VerticalBarChart3 />
      </div>
      <div className="card">
        <VerticalBarChart4 />
      </div> */}
    </div>
  );
};

export default App;
