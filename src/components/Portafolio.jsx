// Portfolio.js
import React from 'react';
import './../styles/Portafolio.css'; // Asegúrate de tener el CSS en el mismo directorio
import LadingImg from '../assets/images/planes/landing.png'; // Importa Landing
import BussinesImg from '../assets/images/planes/bussines.png'; // Importa Landing
import EcommerceImg from '../assets/images/planes/ecommerce.png'; // Importa Landing

const projects = [
  {
    id: 1,
    href: "/ID360/landing.html",
    imgSrc: LadingImg,
    altText: "Proyecto de Landing Page",
    title: "Landing Page",
    description: "Página de aterrizaje venta de un producto específico.",
    quote: '"La página superó nuestras expectativas y aumentó las ventas."'
  },
  {
    id: 2,
    href: "/ID360/bussines.html",
    imgSrc: BussinesImg,
    altText: "Proyecto de Barbería",
    title: "Sitio Web para Contadores",
    description: "Diseño responsivo para una firma de contadores.",
    quote: '"Increíble diseño que captó la esencia de nuestro agencia."'
  },
  {
    id: 3,
    href: "/ID360/ecommerce.html",
    imgSrc: EcommerceImg,
    altText: "Proyecto de E-commerce",
    title: "Tienda en Línea de Mascotas",
    description: "Plataforma e-commerce completa con catálogo y pasarela de pago.",
    quote: '"Nuestras ventas en línea se aumentaron gracias a este sitio."'
  }
];

const Portfolio = () => {
  return (
    <section className="portfolio-section py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Nuestros Ejemplos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <a href={project.href} className="block portfolio-item" key={project.id}>
              <img 
                src={project.imgSrc} 
                alt={project.altText} 
                className="w-full h-64 object-cover mb-4" 
              />
              <h3 className="text-2xl font-semibold text-blue-900">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
              <blockquote className="mt-4 italic text-gray-600">{project.quote}</blockquote>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
