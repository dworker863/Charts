import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './commonStyles/theme';
import ChartBar from './components/ChartBar';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ChartBar />
    </ThemeProvider>
  );
}

export default App;
