// Footer.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faGooglePlay, faFacebookF, faYoutube, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-white py-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4 md:mb-0">
              {/* Placeholder for Bodsphere Logo */}
              <img className="h-6 w-32" src="/logo.png" alt="Bodsphere Logo" />
            </div>
            <p className="text-sm text-gray-500">
              Download the <span className="font-semibold">Bodsphere App</span> to take classes offline and practice anytime, anywhere.
            </p>
            <div className="mt-4 flex justify-center md:justify-start space-x-2">
              <a
                href="#"
                className="bg-black text-white px-4 py-2 rounded flex items-center text-sm hover:bg-gray-800"
              >
                <FontAwesomeIcon icon={faApple} className="mr-2" />
                Get in Apple Store
              </a>
              <a
                href="#"
                className="bg-black text-white px-4 py-2 rounded flex items-center text-sm hover:bg-gray-800"
              >
                <FontAwesomeIcon icon={faGooglePlay} className="mr-2" />
                Get in Play Store
              </a>
            </div>
          </div>

          {/* Center Section */}
          <div className="text-center my-4 md:my-0">
            <a href="#" className="text-sm text-gray-700 hover:text-gray-900">
              FAQ
            </a>
            <span className="mx-4 text-gray-500">•</span>
            <a href="#" className="text-sm text-gray-700 hover:text-gray-900">
              Contact Us
            </a>
          </div>

          {/* Right Section */}
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-500 mb-2">Follow Bodsphere</p>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900"
                aria-label="YouTube"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          © 2024 Bodsphere. All Rights Reserved.{" "}
          <a href="#" className="hover:text-gray-900">
            Terms
          </a>{" "}
          •{" "}
          <a href="#" className="hover:text-gray-900">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
