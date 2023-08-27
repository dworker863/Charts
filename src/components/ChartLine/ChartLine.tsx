import { FC } from 'react';
import {
  StyledChart,
  StyledTitle,
  StyledTotalSum,
} from '../../commonStyles/StyledChart';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { TChartLineProps } from './TChartLine';
import { weeks } from '../../utils/constants';

const ChartLine: FC<TChartLineProps> = ({ cash }) => {
  const sum = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    useGrouping: true,
  }).format(cash?.resume.sum);
  console.log(cash);

  const max = cash && Math.max(...cash?.result.map((item: any) => item.sum));

  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max,
        ticks: {
          color: '#fff',
          font: {
            family: 'Montserrat', // Здесь задаем шрифт для меток оси Y
          },
        },
      },
      x: {
        ticks: {
          color: '#fff',
          font: {
            family: 'Montserrat', // Здесь задаем шрифт для меток оси Y
          },
        },
      },
    },
    responsive: true,
    animation: {
      duration: 2000,
    },
  };

  const data = {
    labels: weeks,
    datasets: [
      {
        label: 'Dataset 1',
        data: cash?.result.map((item: any) => item.sum),
        backgroundColor: '#2779FF',
        borderColor: '#2779FF',
        pointBackgroundColor: '#2779FF',
        borderWidth: 1,
        tension: 0.4,
      },
    ],
  };

  return (
    <StyledChart>
      <StyledTitle>Выручка</StyledTitle>
      <StyledTotalSum>{sum}</StyledTotalSum>
      <Line options={options} data={data} />
    </StyledChart>
  );
};

export default ChartLine;
