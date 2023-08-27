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

  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: Math.max(...cash?.result.map((item: any) => item.sum)),
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
      <StyledTotalSum>20,000,0</StyledTotalSum>
      <Line options={options} data={data} />
    </StyledChart>
  );
};

export default ChartLine;
