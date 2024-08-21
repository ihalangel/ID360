import React from 'react';
import './../styles/Testimonios.css'; // Asegúrate de que la ruta es correcta

const Testimonios = () => {
  return (
    <section className="testimonials bg-gray-100 py-12">
      <div className="container mx-auto">
        <h3 className="testimonials__title text-2xl font-bold text-center mb-6" data-aos="fade-up">
          Testimonios
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="testimonials__item bg-white p-6 rounded-lg shadow-md" data-aos="fade-right">
            <p className="testimonials__quote italic text-lg mb-4">
              "Mi experiencia fue muy positiva, recomendaría sus servicios a cualquiera que busque calidad y buen precio."
            </p>
            <p className="testimonials__author font-bold">María Gutiérrez</p>
          </div>
          <div className="testimonials__item bg-white p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="100">
            <p className="testimonials__quote italic text-lg mb-4">
              "Los recomiendo totalmente, hicieron un trabajo increíble en mi página web."
            </p>
            <p className="testimonials__author font-bold">Carlos Pérez</p>
          </div>
          <div className="testimonials__item bg-white p-6 rounded-lg shadow-md" data-aos="fade-left" data-aos-delay="200">
            <p className="testimonials__quote italic text-lg mb-4">
              "Excelente servicio al cliente, siempre dispuestos a ayudar y resolver dudas."
            </p>
            <p className="testimonials__author font-bold">Ana López</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
