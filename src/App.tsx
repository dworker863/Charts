import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './commonStyles/theme';
import ChartBar from './components/ChartBar/ChartBar';
import ChartLine from './components/ChartLine/ChartLine';
import Date from './components/Date/Date';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Date />
      <ChartLine />
      <ChartBar />
    </ThemeProvider>
  );
}

export default App;
