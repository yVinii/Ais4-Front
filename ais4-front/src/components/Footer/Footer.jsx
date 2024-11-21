  import React from 'react'
  import './FooterStyles/footer_style.css'
  import { FaLinkedin } from "react-icons/fa";
  import { FaInstagram } from "react-icons/fa";
  import { FaGithub } from "react-icons/fa";
  import { FaWhatsapp } from "react-icons/fa";

  const Footer = () => {
    return (
      <>
        <div className="footer" id="contato">
          <h1>Entre em contato</h1>
          <div className="contato">
              <a>
                <FaLinkedin className="footer-buttons" id='linkedin' />
              </a>
              <a>
                <FaInstagram className="footer-buttons" id='instagram' />
              </a>
              <a>
                <FaGithub className="footer-buttons" id='github'/>
              </a>
              <a>
                <FaWhatsapp className="footer-buttons" id='whatsapp'/>
              </a>
          </div>
        </div>
        <div className="direitos">
            <p>©2024 Ais4.life - Todos os direitos reservados</p>
        </div>
      </>
    )
  }

  export default Footer;