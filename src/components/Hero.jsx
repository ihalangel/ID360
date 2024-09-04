import React, { useState } from 'react';
import './../styles/Hero.css'; // Importa los estilos específicos del Hero
import heroImg from '../assets/images/cliente-feliz-disfrutando-pagina-web.jpg'; // Importa la imagen
import Modal from './Modal'; // Importa el componente Modal

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

 
  const closeModal = () => setIsModalOpen(false);


const openModal = () => {
  setIsModalOpen(true);
  // Registrar el evento con un label en español
    
  const customLabel = 'H Solicitar Cotización';
  if (window.gtag) {
    window.gtag('event', 'click', {
      'event_category': 'Botón',
      'event_label': customLabel,
      'value': 1
    });
  }else{console.log("No windows.GTAG")}
};

  return (
    <section className="hero">
      <img className="hero-img" src={heroImg} alt="Cliente feliz disfrutando de su página web" />
      <div className="hero-content">
        <h2 className="hero__title text-3xl font-bold" data-aos="fade-up">Diseños Web Profesionales a Precios Accesibles</h2>
        <p className="hero__subtitle mt-4" data-aos="fade-up" data-aos-delay="100">Transforma tu presencia digital con nuestras soluciones personalizadas</p>
        <button 
          className="hero__button mt-6 px-6 py-3 bg-yellow-500 text-gray-900 rounded-md hover:bg-yellow-600 transition duration-300" 
          data-aos="fade-up" 
          data-aos-delay="200"
          onClick={openModal}
        >
          Solicita una Cotización
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default Hero;


