import { FC } from 'react';
import { StyledChartBar, StyledTitle, StyledTotalSum } from './StyledChartBar';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  animation: {
    duration: 2000,
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

const ChartBar: FC = () => {
  return (
    <StyledChartBar>
      <StyledTitle>Cash</StyledTitle>
      <StyledTotalSum>20,000,0</StyledTotalSum>
      <Bar options={options} data={data} />
    </StyledChartBar>
  );
};

export default ChartBar;
