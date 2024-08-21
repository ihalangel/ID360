import React, { useState, useEffect, useRef } from 'react';
import './../styles/header.css'; // Asegúrate de tener el CSS en el mismo directorio
import Logo from '../assets/images/logoIdentidad360_25px.png'; // Importa el logo

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleNavLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__nav flex items-center justify-between">
          <a href="/">
            <img 
              src={Logo} 
              alt="Logo de IdentidadDigital360" 
              className="header__logo" 
            />
          </a>
          {/* Menú para pantallas grandes */}
          <nav className="header__nav-desktop">
            <a href="#servicios" className="header__nav-item hover:text-gray-300">Servicios</a>
            <a href="#precios" className="header__nav-item hover:text-gray-300">Precios</a>
            <a href="#contacto" className="header__nav-item hover:text-gray-300">Contacto</a>
          </nav>
          {/* Botón de menú móvil */}
          <button 
            id="mobile-menu-btn" 
            className="header__mobile-menu-btn" 
            onClick={toggleMobileMenu}
          >
            &#9776;
          </button>
        </div>
        {/* Menú móvil */}
        <nav 
          ref={mobileMenuRef}
          id="nav-menu" 
          className={`header__mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}
        >
          <a href="#servicios" className="block py-2" onClick={handleNavLinkClick}>Servicios</a>
          <a href="#precios" className="block py-2" onClick={handleNavLinkClick}>Precios</a>
          <a href="#contacto" className="block py-2" onClick={handleNavLinkClick}>Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
