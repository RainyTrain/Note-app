import { createRoot } from 'react-dom/client';
import App from './app/app';
import { ThemeProvider } from './widgets/ui/ThemeProvider/ui/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './app/styles/index.scss';
import { store } from 'app/providers/storeProvider/storeProvider';

const root = createRoot(document.getElementById('root')!);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>,
);
