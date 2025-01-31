import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faFacebook, faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="footer_container flex flex-col items-center bg-[#011B5B] p-6 md:p-10">
      <footer className="flex flex-col md:flex-row justify-between gap-8 md:gap-10 w-full max-w-6xl">
        {/* Left Section */}
        <div className="left w-full md:w-[30%] text-center md:text-left">
          <p className="text-[#AAB5CD] text-sm md:text-base">
            Design outstanding interfaces with advanced Figma features in a matter of minutes.
          </p>
          <div className="social_icons flex justify-center md:justify-start items-center gap-6 py-4 text-white">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
            <FontAwesomeIcon icon={faGoogle} size="lg" />
            <FontAwesomeIcon icon={faApple} size="lg" />
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </div>
        </div>

        {/* Right Section */}
        <div className="right w-full md:w-[70%] grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-center md:text-left">
          {[
            { title: "START A BUSINESS", links: ["Features", "Solutions", "Integrations", "Enterprise"] },
            { title: "GOVERNMENT REGISTRATION", links: ["Features", "Solutions", "Integrations", "Enterprise"] },
            { title: "COMPLIANCE & TAX", links: ["Features", "Solutions", "Integrations", "Enterprise"] },
            { title: "BIS & CDSCO", links: ["Features", "Solutions", "Integrations", "Enterprise"] },
          ].map((section, index) => (
            <div key={index} className="footer_links">
              <h2 className="text-[#FFA229] font-semibold text-sm md:text-base mb-2">{section.title}</h2>
              <ul className="flex flex-col gap-1 text-[#AAB5CD] text-sm">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a href="#" className="hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>

      <div className="copyright text-[#AAB5CD] text-xs md:text-sm py-4 text-center">
        <p>&copy; 2024 Registerkaro. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
