import { createRoot } from 'react-dom/client';
import App from './app/app';
import { ThemeProvider } from './widgets/ui/ThemeProvider/ui/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import './app/styles/index.scss';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
);
