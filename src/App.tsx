import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { fetchCash } from './api/api';
import { defaultTheme } from './commonStyles/theme';
import ChartBar from './components/ChartBar/ChartBar';
import ChartLine from './components/ChartLine/ChartLine';
import Date from './components/Date/Date';
import moment from 'moment';
import Button from './components/Button/Button';

function App() {
  const [cash, setCash] = useState<any>(null);
  const [cashFormat, setCashFormat] = useState<string>('weeks');
  const [chartType, setChartType] = useState<'line' | 'bar'>('bar');
  console.log(chartType);

  useEffect(() => {
    const response = async () => {
      const month = moment().subtract(1, 'month').format('YYYY-MM-DD');
      const result = await fetchCash(month, 'W-MON');
      setCash(result);
    };
    response();
  }, []);

  const setLineChartTypeHandler = () => {
    setChartType('line');
  };

  const setBarChartTypeHandler = () => {
    setChartType('bar');
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Date setCash={setCash} setCashFormat={setCashFormat} />
      <Button
        type="button"
        text="Линейный график"
        clickHandler={setLineChartTypeHandler}
      />
      <Button
        type="button"
        text="График со столбцами"
        clickHandler={setBarChartTypeHandler}
      />
      {chartType === 'line' ? (
        <ChartLine cash={cash} cashFormat={cashFormat} />
      ) : (
        <ChartBar cash={cash} cashFormat={cashFormat} />
      )}
    </ThemeProvider>
  );
}

export default App;
