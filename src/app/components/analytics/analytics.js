"use client"
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, Filler } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const AnalyticsChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        type: 'line',
        label: 'Dataset 1',
        borderColor: '#347AE2',
        borderWidth: 2,
        fill: false,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        type: 'line',
        label: 'Dataset 2',
        borderColor: '#FF9500',
        borderWidth: 2,
        fill: false,
        data: [40, 60, 55, 75, 50, 70, 30],
      },
      {
        type: 'bar',
        label: 'Dataset 3',
        backgroundColor: '#E6EDFF',
        data: [30, 20, 50, 40, 60, 30, 80],
        borderColor: 'white',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Value'
        },
        suggestedMin: 0,
        suggestedMax: 100
      }
    }
  };

  return <Line data={data} options={options} />;
};

export default AnalyticsChart;
/*
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
// ... other imports remain the same

const AnalyticsChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        // Example API call
        const response = await fetch('your-api-url');
        const data = await response.json();

        // Transform data to fit Chart.js format if necessary
        const transformedData = {
          labels: data.labels,
          datasets: [
            // ... map your datasets
          ],
        };

        setChartData(transformedData);
      } catch (error) {
        console.error('Fetching data failed', error);
      }
    }

    fetchData();
  }, []);

  const options = {
    // ... options remain the same
  };

  return <Line data={chartData} options={options} />;
};

export default AnalyticsChart;
*/