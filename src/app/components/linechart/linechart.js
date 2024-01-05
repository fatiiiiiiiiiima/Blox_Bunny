import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './globals.css';

const LineChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const context = chartRef.current.getContext('2d');
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    }

    const ctx = chartRef.current.getContext('2d');
    const newChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.labels,
        datasets: [
          {
            label: 'Line Chart Example',
            data: data.values,
            fill: false,
            borderColor: 'rgba(75, 192, 192, 1)',
            tension: 0.1,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          x: {
            ticks: {
              fontSize: 10,
            },
          },
          y: {
            ticks: {
              fontSize: 10,
            },
          },
        },
        plugins: {
          legend: {
            position: 'top', // Set legend position to 'top'
          },
        },
      },
    });

    return () => {
      newChart.destroy();
    };
  }, [data]);

  return (
    <div style={{ paddingLeft: '150px', paddingRight: '150px' }}>
      <canvas ref={chartRef} style={{ width: '100%', height: '300px' }} />
    </div>
  );
};

export default LineChart;
