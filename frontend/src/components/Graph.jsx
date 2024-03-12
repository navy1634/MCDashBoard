import React from 'react';
import { Line } from 'react-chartjs-2';

function SampleChart(props) {
  const labels = [
    '2022-01',
    '2022-02',
    '2022-03',
    '2022-04',
    '2022-05',
    '2022-06',
    '2022-07',
    '2022-08',
    '2022-09',
    '2022-10',
    '2022-11',
    '2022-12',
  ];

  const GraphData = {
    labels,
    datasets: [
      {
        label: 'Sample',
        // eslint-disable-next-line react/destructuring-assignment, react/prop-types
        data: props.data,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  const options = {
    maintainAspectRatio: true,
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Sample-Chart',
      },
    },
  };

  return (
    <div className="Chart">
      <Line options={options} data={GraphData} height={400} width={400} />
    </div>
  );
}

export default SampleChart;
