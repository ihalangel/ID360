import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './../styles/Contacto.css'; // Asegúrate de agregar los estilos personalizados aquí

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   emailjs.send('service_6pxd8j7', 'template_whz4otd', formData, 'QmNoMSufAjUqdXE-e')
  //     .then((result) => {
  //       setSuccessMessage('Correo enviado exitosamente');
  //       setErrorMessage('');
  //       setFormData({
  //         name: '',
  //         email: '',
  //         message: ''
  //       });
  //     }, (error) => {
  //       setErrorMessage('Error al enviar el correo');
  //       setSuccessMessage('');
  //     });
  // };



  const handleSubmit = (e) => {
    e.preventDefault();

    // Enviar correo al destinatario (tu dirección de correo)
    emailjs.send('service_6pxd8j7', 'template_whz4otd', formData, 'QmNoMSufAjUqdXE-e')
      .then((result) => {
        // Enviar confirmación al cliente
        emailjs.send('service_6pxd8j7', 'template_6v2nsne', formData, 'QmNoMSufAjUqdXE-e')
          .then(() => {
            setSuccessMessage('Envío exitoso. Revisa tu correo electrónico para más información.');
            setErrorMessage('');
            setFormData({
              name: '',
              email: '',
              message: ''
            });
          })
          .catch((error) => {
            setErrorMessage('Error al enviar la confirmación al cliente.');
            setSuccessMessage('');
          });
      }, (error) => {
        setErrorMessage('Error al enviar el correo.');
        setSuccessMessage('');
      });
  };

  return (
    <section id="contacto" className="contact bg-gray-100 py-12">
      <div className="container mx-auto">
        <h3 className="contact__title text-2xl font-bold text-center mb-6" data-aos="fade-up">Contáctanos</h3>
        <form 
          className="contact__form max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md" 
          data-aos="fade-up" 
          data-aos-delay="100"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Nombre</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              className="contact__input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Correo Electrónico</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              className="contact__input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Mensaje</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message}
              onChange={handleChange}
              className="contact__input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              rows="4" 
              required
            />
          </div>
          <div className="text-center">
            <button 
              type="submit" 
              className="contact__button bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            >
              Enviar
            </button>
          </div>
          {successMessage && <p className="text-green-600 mt-4 text-center">{successMessage}</p>}
          {errorMessage && <p className="text-red-600 mt-4 text-center">{errorMessage}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contacto;

