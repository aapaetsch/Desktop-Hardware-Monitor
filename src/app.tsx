import * as ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import AppBody from './Components/AppBody';
import TopBar from './Components/TopBar';

function App() {
    return <div id="app" className="background-main">
        <TopBar />
        <AppBody />
    </div>
}

function render(): void {
    createRoot(document.body).render(<App/>);
    document.body.style.margin = '0';
}

function renderTheme(): void {
    document.body.classList.add('theme-apple-dark');
}


function init() {
    renderTheme();
    render();
    
    
    
}

init();