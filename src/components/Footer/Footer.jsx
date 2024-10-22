// src/components/Footer.js
import React from 'react';
import './FooterStyle.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SkyLogo from '../../assets/SkyStream-2.PNG'

function Footer() {

  const scrollToSection = (name) => {
    const element = document.getElementsByClassName(name)[0];
    if(element){
        element.scrollIntoView({behavior: "smooth"})
    }
  }

  const scrollToSectionId = (id) => {
    const element = document.getElementById(id)
    if(element){
        element.scrollIntoView({behavior: "smooth"})
    }
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-links">
          <h3>Sobre nós</h3>
          <ul>
            <li onClick={() => scrollToSectionId('perguntas-frequentes-container')}>Nossos serviços</li>
            <li onClick={() => scrollToSection('planos')}>Planos e preços</li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>Suporte 24/7</h3>
          <ul>
            <li className='email-wrap'><a href="mailto:gowatchskystream@gmail.com">gowatchskystream@gmail.com</a></li>
            <li>Suporte Whatsapp</li>
          </ul>
        </div>
      </div>
      <div className="footer-social">
        <a href="https://www.facebook.com/profile.php?id=61564364933643&mibextid=LQQJ4d" className="social-icon"><i className="fab fa-facebook-f"></i></a>
        <a href="https://www.instagram.com/watchskyvision?igsh=N3A0eno2cjA2YjJi" className="social-icon"><i className="fab fa-instagram"></i></a>
        <a href="https://www.instagram.com/watchskyvision?igsh=N3A0eno2cjA2YjJi" className="social-icon"><i className="fab fa-x-twitter"></i></a>
        <a href="https://pt.linkedin.com/in/wesley-st%C3%A9nio-pacavira-soares-augusto-70a923212" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
      </div>
      <div className="footer-bottom">
        <p>© 2024 SkyVision TV. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;