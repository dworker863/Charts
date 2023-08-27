import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { fetchCash } from './api/api';
import { defaultTheme } from './commonStyles/theme';
import ChartBar from './components/ChartBar/ChartBar';
import ChartLine from './components/ChartLine/ChartLine';
import Date from './components/Date/Date';
import moment from 'moment';

function App() {
  const [cash, setCash] = useState<any>(null);

  useEffect(() => {
    const response = async () => {
      const month = moment().subtract(1, 'month').format('YYYY-MM-DD');
      const result = await fetchCash(month, 'W-MON');
      setCash(result);
    };
    response();
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Date />
      <ChartLine cash={cash} />
      <ChartBar cash={cash} />
    </ThemeProvider>
  );
}

export default App;
