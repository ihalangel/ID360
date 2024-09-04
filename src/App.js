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
import './App.css';
import './styles/Base.css';
import AOS from 'aos';
import CookieConsent from 'react-cookie-consent';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    // Configurar Google Analytics si el consentimiento está dado
    const userConsent = document.cookie.split('; ').find(row => row.startsWith('user-consent='));
    if (userConsent) {
      // Aquí puedes incluir el código para enviar eventos a GA4 si es necesario
      window.gtag = function() { window.dataLayer.push(arguments); };
      window.gtag('js', new Date());
      window.gtag('config', 'G-9R4Q3DF83V', { 'cookie_flags': 'SameSite=None;Secure' });
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <CookieConsent
        buttonText="Acepto"
        cookieName="user-consent"
        style={{ background: "#000", color: "#fff", padding: "10px" }}
        buttonStyle={{ color: "#000", background: "#fff", fontSize: "13px" }}
        expires={365}
        onAccept={() => {
          // Configurar Google Analytics cuando se acepta el consentimiento
          window.gtag = function() { window.dataLayer.push(arguments); };
          window.gtag('js', new Date());
          window.gtag('config', 'G-XXXXXXXXXX', { 'cookie_flags': 'SameSite=None;Secure' });
        }}
      >
        Este sitio usa cookies para mejorar la experiencia. Al continuar navegando, aceptas su uso.
      </CookieConsent>
      <Hero />
      <Services />
      <Precios />
      <Portafolio />
      <Testimonios />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;







