import { createRoot } from 'react-dom/client';
import App from './app/app';
import './index.scss';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
