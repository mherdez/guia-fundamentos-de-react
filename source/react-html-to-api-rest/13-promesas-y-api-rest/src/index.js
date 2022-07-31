import React from 'react';
import ReactDOM from 'react-dom/client';

// import App from './AppLocal';    // Primera Forma
// import App from './AppPromise'; // Segunda Forma
// import App from './AppFetch';   // Tecera Forma Variante
import App from './AppAsyncAwait'; // Cuarta Forma

const root = ReactDOM.createRoot(
	document.getElementById('root')
);
root.render(<App />);
