import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import React, { useState } from 'react';
import SampleChart from '../components/Graph';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function GraphSample() {
  const initialData = [];
  for (let i = 0; i < 12; i += 1) {
    initialData.push(Math.random());
  }
  const [data, setData] = useState(initialData);

  return (
    <div className="GraphSample">
      <SampleChart data={data} />
      <button
        type="button"
        onClick={() => {
          const randomData = [];
          for (let i = 0; i < 12; i += 1) {
            randomData.push(Math.random());
          }
          setData(randomData);
        }}
      >
        ランダム
      </button>
    </div>
  );
}

export default GraphSample;
