// import AOS from 'aos';
// import 'aos/dist/aos.css'; // Importa los estilos de AOS
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// // AOS.init(); // Inicializa AOS

// // ReactDOM.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>,
// //   document.getElementById('root')
// // );


  
// import { initializeAnalytics, logPageView } from './analytics';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// // Inicializar Google Analytics
// initializeAnalytics();

// // Registrar la vista de página cuando el componente se monta
// const handleRouteChange = () => {
//   logPageView();
// };

// ReactDOM.render(
//   <Router>
//     <App />
//     <Route path="/" exact component={handleRouteChange} />
//     {/* Aquí puedes agregar más rutas y componentes */}
//   </Router>,
//   document.getElementById('root')
// );





// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App.js';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { initializeAnalytics, logPageView } from './analytics';

// // Inicializar Google Analytics
// initializeAnalytics();

// // Crear la raíz del DOM
// const root = ReactDOM.createRoot(document.getElementById('root'));

// // Registrar la vista de página cuando el componente se monta
// const handleRouteChange = () => {
//   logPageView();
// };

// // Renderizar la aplicación
// root.render(
//   <Router>
//     <Routes>
//       <Route path="/" element={<App />} />
//       {/* Agrega más rutas aquí si es necesario */}
//     </Routes>
//   </Router>
// );




import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { initializeAnalytics, logPageView } from './analytics';

// Inicializar Google Analytics
initializeAnalytics();

// Crear la raíz del DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizar la aplicación
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        {/* Agrega más rutas aquí si es necesario */}
      </Routes>
    </Router>
  </React.StrictMode>
);

