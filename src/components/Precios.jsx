import React from 'react';
import './../styles/Precios.css'; // Asegúrate de que la ruta es correcta

const Precios = () => {
  return (
    <section id="precios" className="precios py-12 bg-gray-100">
      <div className="container mx-auto">
        <h3 className="precios__title text-3xl font-bold text-center mb-8" data-aos="fade-up">
          Nuestros Planes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="precios__item" data-aos="fade-right">
            <div className="precios__content">
            {/*  <img
                src="assets/images/planes/joven-apoyado-nbgr.webp"
                alt="Landing Page"
                className="precios__image"
              />*/}
              <h4 className="precios__plan-title">Landing Page - $300</h4>
              <ul className="precios__list">
                <li className="precios__list-item">Certificado de Seguridad SSL</li>
                <li className="precios__list-item">Diseño web a medida basado en bloques de contenido</li>
                <li className="precios__list-item">Formulario de contacto</li>
                <li className="precios__list-item">Página responsive</li>
                <li className="precios__list-item">Adaptación para compartir en RRSS</li>
                <li className="precios__list-item">Hosting por 1 año</li>
                <li className="precios__list-item">Dominio por 1 año</li>
              </ul>
              <button className="precios__button">Solicita tu Landing Page</button>
            </div>
          </div>
          <div className="precios__item" data-aos="fade-up" data-aos-delay="100">
            <div className="precios__content">
           {/*   <img
                src="assets/images/planes/maquetaweb.jpg"
                alt="Corporativa"
                className="precios__image"
              />*/}
              <h4 className="precios__plan-title">Corporativa - $800</h4>
              <ul className="precios__list">
                <li className="precios__list-item">5 secciones o páginas</li>
                <li className="precios__list-item">15 correos electrónicos corporativos</li>
                <li className="precios__list-item">Formulario de contacto</li>
                <li className="precios__list-item">Página responsive</li>
                <li className="precios__list-item">Adaptación para compartir en RRSS</li>
                <li className="precios__list-item">Página SEO optimizada</li>
                <li className="precios__list-item">Adaptación con Google Analytics</li>
                <li className="precios__list-item">Sistema de contenidos</li>
                <li className="precios__list-item">Hosting por 1 año</li>
                <li className="precios__list-item">Dominio por 1 año</li>
              </ul>
              <button className="precios__button">Crea tu Sitio Corporativo</button>
            </div>
          </div>
          <div className="precios__item" data-aos="fade-left" data-aos-delay="200">
            <div className="precios__content">
          {/*    <img
                src="assets/images/planes/presentador.gif"
                alt="E-commerce"
                className="precios__image"
              />*/}
              <h4 className="precios__plan-title">E-commerce - $1250</h4>
              <ul className="precios__list">
                <li className="precios__list-item">7 secciones</li>
                <li className="precios__list-item">Correos electrónicos corporativos ilimitados</li>
                <li className="precios__list-item">Formulario de contacto</li>
                <li className="precios__list-item">Página responsive</li>
                <li className="precios__list-item">Adaptación para compartir en RRSS</li>
                <li className="precios__list-item">Página SEO optimizada</li>
                <li className="precios__list-item">Adaptación con Google Analytics</li>
                <li className="precios__list-item">Sistema de contenidos</li>
                <li className="precios__list-item">Integración con pasarela de pago</li>
                <li className="precios__list-item">Hosting por 1 año</li>
                <li className="precios__list-item">Dominio por 1 año</li>
                <li className="precios__list-item">Sistema de Seguridad Anti-hack</li>
                <li className="precios__list-item">Certificado de seguridad SSL gratis</li>
                <li className="precios__list-item">Configuración de 2 métodos de pago</li>
                <li className="precios__list-item">Carga de 30 productos</li>
                <li className="precios__list-item">Módulo de filtro de productos</li>
              </ul>
              <button className="precios__button">Tu Tienda en Línea</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Precios;

