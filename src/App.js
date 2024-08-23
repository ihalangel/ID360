import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Precios from './components/Precios';
import Portafolio from './components/Portafolio';
import Testimonios from './components/Testimonios';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import 'aos/dist/aos.css';
import './App.css'
import './styles/Base.css'
import AOS from 'aos';



function App() {
  React.useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    // Establecer una cookie cuando el componente se monta
    document.cookie = "myCookie=myValue; SameSite=None; Secure; path=/";
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero/>
      <Services/>
      <Precios/>
      <Portafolio/>
      <Testimonios/>
     <Contacto/>

     <Footer/>
    </div>
  );
}

export default App;



