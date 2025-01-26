/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

export const Footer = () => {
  const FooterLinks = [
    { title: "Home", link: "/" },
    { title: "Shop", link: "shop" },
    { title: "About", link: "about" },
    { title: "Blogs", link: "blog" },
  ];

  return (
    <div className="footer dark:bg-gray-950 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-evenly pb-20 pt-5">
          {/* Company details */}
          <div className="footer-company-details py-8 px-4 sm:text-center">
            <a
              href="#"
              className="footer-logo text-brandBlue font-helvetica text-3xl font-bold"
            >
              samsung
            </a>
            <p className="footer-description text-gray-400 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="footer-credits mt-6 text-gray-500">
              By MUST Computer Science Students
            </p>
            <a
              href="#"
              className="visit-button mt-6 inline-block bg-brandBlue text-white py-2 px-6 rounded-lg"
            >
              Visit Our Website
            </a>
          </div>

          {/* Footer links */}
          <div
            className="footer-links grid grid-cols-1
     sm:grid-cols-2 md:grid-cols-1 lg:col-span-2 
     py-8 px-4 space-y-6 sm:text-center sm:justify-center"
          >
            {/* First set of links */}
            <div className="footer-link-group">
              <h1 className="footer-link-title text-xl font-semibold text-gray-300">
                Important Links
              </h1>
              <ul className="footer-link-list space-y-3 mt-4">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="footer-link text-gray-400 hover:text-white"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Second set of links */}
          <div className="footer-company-details py-8 px-4 sm:text-center">
            <h1 className="footer-link-title text-xl font-semibold text-gray-300">
              More Links
            </h1>
            <ul className="footer-link-list space-y-3 mt-4">
              {FooterLinks.map((data, index) => (
                <li key={index}>
                  <a
                    href={data.link}
                    className="footer-link text-gray-400 hover:text-white"
                  >
                    {data.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Company address and social links */}
          <div className="footer-contact py-8 px-4 col-span-1 sm:col-span-1 lg:col-span-1 sm:text-center sm:items-center sm:justify-center">
            <h1 className="text-xl font-semibold text-gray-300">Address: </h1>
            <div className="contact-item flex items-center space-x-3 mt-4 sm:justify-center">
              <FaLocationArrow className="text-brandBlue" />
              <p className="text-gray-400">Mbezi, Dar-es-Salaam, Tanzania</p>
            </div>
            <div className="contact-item flex items-center space-x-3 mt-6 sm:justify-center">
              <FaMobileAlt className="text-brandBlue" />
              <p className="text-gray-400">+255 746-342-550</p>
            </div>
            <div className="footer-social-links mt-6 flex space-x-4 sm:justify-center">
              <a
                href="#"
                className="social-icon text-brandBlue hover:text-white"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="social-icon text-brandBlue hover:text-white"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="social-icon text-brandBlue hover:text-white"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-gray-800 p-2 space-x-10 text-white">
        <span className="font-bold  decoration-blue-500">Future Tech</span>
        <span className="italic text-gray-400">Innovative Creations</span>
        <span className="font-semibold decoration-blue-500">Samsung </span>
        <span className="uppercase tracking-wide decoration-green-500 ">
          NextGen Systems
        </span>
        <span>© 2025</span>
      </div>
    </div>
  );
};
