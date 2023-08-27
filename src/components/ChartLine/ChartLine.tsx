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
import faker from 'faker';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

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
      borderColor: '#2779FF',
      pointBackgroundColor: '#2779FF',
      borderWidth: 1,
      tension: 0.4,
    },
  ],
};

const ChartLine: FC = () => {
  return (
    <StyledChart>
      <StyledTitle>Cash</StyledTitle>
      <StyledTotalSum>20,000,0</StyledTotalSum>
      <Line options={options} data={data} />
    </StyledChart>
  );
};

export default ChartLine;
