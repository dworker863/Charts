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
import faker from 'faker';

ChartJS.register(CategoryScale, LinearScale, BarElement);

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
      backgroundColor: '#2779FF',
    },
  ],
};

const ChartBar: FC = () => {
  return (
    <StyledChart>
      <StyledTitle>Cash</StyledTitle>
      <StyledTotalSum>20,000,0</StyledTotalSum>
      <Bar options={options} data={data} />
    </StyledChart>
  );
};

export default ChartBar;
