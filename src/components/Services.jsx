import React from 'react';
import { useInView } from 'react-intersection-observer';
import './../styles/Services.css';

const Services = () => {
  const { ref: servicesRef, inView: isServicesInView } = useInView({
    triggerOnce: true, // Evento solo se activa la primera vez que entra en vista
    threshold: 0.1 // 10% de la sección debe estar en vista para activar el evento
  });

  React.useEffect(() => {
    if (isServicesInView && window.gtag) {
      window.gtag('event', 'view', {
        'event_category': 'Section',
        'event_label': 'Servicios',
        'value': 1
      });
    }
  }, [isServicesInView]);

  return (
    <section id="servicios" className="services bg-gray-100 py-12" ref={servicesRef}>
      <div className="container mx-auto">
        <h3 className="services__title text-2xl font-bold text-center mb-6" data-aos="fade-up">
          Nuestros Servicios
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="services__item bg-white p-6 rounded-lg shadow-md" data-aos="zoom-in">
            <i className="services__icon fas fa-laptop-code text-4xl text-blue-900"></i>
            <h4 className="services__title mt-2 text-xl font-bold">Landing Page</h4>
            <p className="services__description">Diseño web rápido y efectivo para captar clientes.</p>
          </div>
          <div className="services__item bg-white p-6 rounded-lg shadow-md" data-aos="zoom-in" data-aos-delay="100">
            <i className="services__icon fas fa-building text-4xl text-blue-900"></i>
            <h4 className="services__title mt-2 text-xl font-bold">Sitio Corporativo</h4>
            <p className="services__description">Presencia profesional en línea con múltiples secciones.</p>
          </div>
          <div className="services__item bg-white p-6 rounded-lg shadow-md" data-aos="zoom-in" data-aos-delay="200">
            <i className="services__icon fas fa-shopping-cart text-4xl text-blue-900"></i>
            <h4 className="services__title mt-2 text-xl font-bold">E-commerce</h4>
            <p className="services__description">Tu tienda en línea con todas las funcionalidades que necesitas.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;





// import React from 'react';
// // import './Services.css'; // Asegúrate de que la ruta es correcta
// import './../styles/Services.css';

// const Services = () => {
//   return (
//     <section id="servicios" className="services bg-gray-100 py-12">
//       <div className="container mx-auto">
//         <h3 className="services__title text-2xl font-bold text-center mb-6" data-aos="fade-up">
//           Nuestros Servicios
//         </h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           <div className="services__item bg-white p-6 rounded-lg shadow-md" data-aos="zoom-in">
//             <i className="services__icon fas fa-laptop-code text-4xl text-blue-900"></i>
//             <h4 className="services__title mt-2 text-xl font-bold">Landing Page</h4>
//             <p className="services__description">Diseño web rápido y efectivo para captar clientes.</p>
//           </div>
//           <div className="services__item bg-white p-6 rounded-lg shadow-md" data-aos="zoom-in" data-aos-delay="100">
//             <i className="services__icon fas fa-building text-4xl text-blue-900"></i>
//             <h4 className="services__title mt-2 text-xl font-bold">Sitio Corporativo</h4>
//             <p className="services__description">Presencia profesional en línea con múltiples secciones.</p>
//           </div>
//           <div className="services__item bg-white p-6 rounded-lg shadow-md" data-aos="zoom-in" data-aos-delay="200">
//             <i className="services__icon fas fa-shopping-cart text-4xl text-blue-900"></i>
//             <h4 className="services__title mt-2 text-xl font-bold">E-commerce</h4>
//             <p className="services__description">Tu tienda en línea con todas las funcionalidades que necesitas.</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

