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
  BarElement,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { TChartBarProps } from './TChartBar';
import { weeks } from '../../utils/constants';

const ChartBar: FC<TChartBarProps> = ({ cash }) => {
  const sum = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    useGrouping: true,
  }).format(cash?.resume.sum);

  const max = cash && Math.max(...cash?.result.map((item: any) => item.sum));

  ChartJS.register(CategoryScale, LinearScale, BarElement);

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
      },
    ],
  };

  return (
    <StyledChart>
      <StyledTitle>Выручка</StyledTitle>
      <StyledTotalSum>{sum}</StyledTotalSum>
      <Bar options={options} data={data} />
    </StyledChart>
  );
};

export default ChartBar;
