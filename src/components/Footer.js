import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-details">
        <p> <strong>DAR AMUL ICE CREAM FACTORY</strong> <br /> Darul uloom Road TRAL Pulwama, Kashmir 192123</p>
      </div>
      <div className="social-icons">
        <a 
          href="https://wa.me/9160066135988" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className="fa fa-whatsapp"></i> 
        </a>
        <a 
          href="mailto:ahsaanshafi32@gmail.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className="fa fa-envelope"></i>
        </a>
        <a 
          href="https://maps.app.goo.gl/VrSDjoJau8T2SfdN7" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className="fa fa-map-marker"></i> 
        </a>
      </div>
      <div className="copyright">
        &copy; Copyright 1999-{new Date().getFullYear()}, All rights reserved | DAR AMUL ICE CREAM FACTORY.
      </div>
      <div className='footer-end'>
        <p>Crafed by: Ahsaan shafi|ahsaanshafi32@gmail.com</p>
      </div>
    </div>
  );
}

export default Footer;
