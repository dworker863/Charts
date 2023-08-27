import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './commonStyles/theme';
import ChartBar from './components/ChartBar/ChartBar';
import ChartLine from './components/ChartLine/ChartLine';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ChartLine />
      <ChartBar />
    </ThemeProvider>
  );
}

export default App;
