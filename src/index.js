import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ReactGA from 'react-ga';

// initialize Google Analytics
ReactGA.initialize('G-2R9R6C3KGR');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

