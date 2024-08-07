// src/components/Footer.js
import React from 'react';
import './FooterStyle.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SkyLogo from '../../assets/SkyStream-2.PNG'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={SkyLogo} alt="Logo" width={58}/>
          <p>
            Na Streamify, estamos dedicados a revolucionar a forma como você
            experimenta o entretenimento. Com nosso serviço de TV de última
            geração, trazemos para você um mundo de possibilidades de streaming, de canais
            de TV ao vivo a conteúdo sob demanda, tudo entregue em HD deslumbrante,
            FHD, 4K. Experimente o futuro do entretenimento com SkyVision TV.
          </p>
        </div>
        <div className="footer-links">
          <h3>Sobre nós</h3>
          <ul>
            <li><a href="#">Nossos serviços</a></li>
            <li><a href="#">Planos e preços</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>Ajuda e suporte</h3>
          <ul>
            <li><a href="#">gowatchskystream@gmail.com</a></li>
            <li><a href="#">Ajuda / Suporte</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-social">
        <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
        <a href="#" className="social-icon"><i className="fab fa-x-twitter"></i></a>
        <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
      </div>
      <div className="footer-bottom">
        <p>© 2024 SkyVision TV. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;