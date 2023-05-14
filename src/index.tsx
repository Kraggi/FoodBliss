import { createRoot } from 'react-dom/client';
import './styles/index.scss';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './theme/themeProvider';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>
);
