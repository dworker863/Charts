import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './commonStyles/theme';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">sdfsdf</div>;
    </ThemeProvider>
  );
}

export default App;
