import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './../styles/Modal.css'; // Asegúrate de agregar los estilos personalizados aquí

const Modal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // Estado para controlar el envío

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Marca que se está enviando el formulario

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
          })
          .finally(() => {
            setIsSubmitting(false); // Marca que el envío ha terminado
          });
      }, (error) => {
        setErrorMessage('Error al enviar el correo.');
        setSuccessMessage('');
        setIsSubmitting(false); // Marca que el envío ha terminado
      });
  };

  if (!isOpen) return null;

 return (
  <div className="modal-overlay" onClick={onClose}>
    <div className="modal-content" onClick={e => e.stopPropagation()}>
      <button className="modal-close" onClick={onClose}>X</button>
      <div className="modal-header">
        <h2>Datos para un Primer Contacto</h2>
        <p>Queremos conocer mejor tu idea para ofrecerte la mejor solución posible</p>
      </div>

      <form
        className="contact__form bg-white p-8 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="form-grid">
          <div className="form-column">
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
          </div>
          <div className="form-column">
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Háblanos de tu idea</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="contact__input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Describe tu proyecto, incluyendo requisitos, presupuesto y detalles importantes."
                rows="4"
                required
              />
            </div>
          </div>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="contact__button bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            disabled={isSubmitting} // Desactiva el botón si está enviando
          >
            {isSubmitting ? 'Enviando...' : 'Solicitar una Cotización'}
          </button>
        </div>
        {successMessage && <p className="text-green-600 mt-4 text-center">{successMessage}</p>}
        {errorMessage && <p className="text-red-600 mt-4 text-center">{errorMessage}</p>}
      </form>
    </div>
  </div>
);
}
export default Modal;
