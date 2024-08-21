import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa los estilos de AOS
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

AOS.init(); // Inicializa AOS

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
