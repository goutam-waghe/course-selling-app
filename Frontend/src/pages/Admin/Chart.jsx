import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LineElement,
  LinearScale, 
  PointElement,
  Title,
  Tooltip,
  ArcElement,
  Legend,
  plugins,
} from "chart.js";
import { Line, Doughnut } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LineElement,
  PointElement,
  LinearScale ,
  Title,
  Tooltip,
  ArcElement,
  Legend
);


export const DoughnutChart = () => {
  const data = {
    labels: ['React', 'Vue', 'Angular'],
    datasets: [
      {
        label: 'Popularity',
        data: [60, 25, 15],
        backgroundColor: ['#61DBFB', '#42B883', '#dd1b16'],
        borderColor: ['#fff', '#fff', '#fff'],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div style={{ width: '300px', margin: 'auto' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};


export const LineChart = () => {
  const labels = ['abc' , 'abc2' , 'abc3' , 'abc4'];
  const options = {
    responsive: true,
    plugins:{
      legend:{
        position:"bottom"
      } ,
      title:{
        display:true , 
        text:"yearly Views"
      } ,
    }
  }
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Website Visitors',
        data: [100, 200, 300, 250, 400],
        borderColor: 'rgb(107, 70, 193 , 0.5)',
        backgroundColor: '#6b46c1',
      tension: 0.3, // optional smooth curve
        fill: true, // optional area fill
      },
    ],
  };

  
  return <Line data={data} options={options}  />;
};

