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
      <div className="container">
        <div className="grid md:grid-cols-5 pb-20 pt-5">
          {/* Company details */}
          <div className="footer-company-details py-8 px-4">
            <a href="#" className="footer-logo text-brandBlue font-helvetica">
              samsung
            </a>
            <p className="footer-description text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="footer-credits">By MUST Computer Science Students</p>
            <a href="#" className="visit-button bg-brandBlue text-white">
              Visit Our Website
            </a>
          </div>

          {/* Footer links */}
          <div className="footer-links col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-5">
            {/* First set of links */}
            <div className="footer-link-group py-8 px-4 mr-40 w-max">
              <h1 className="footer-link-title">Important Links</h1>
              <ul className="footer-link-list">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a href={data.link} className="footer-link">
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Second set of links */}
            <div className="footer-link-group  py-8 space-x-5 px-4 w-max">
              <h1 className="footer-link-title m-5">Important Links</h1>
              <ul className="footer-link-list">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a href={data.link} className="footer-link">
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company address and social links */}
            <div className="footer-contact ml-40 py-8 px-4 col-span-2 sm:col-auto w-max">
              <div className="">
                <div className="contact-item">
                  <FaLocationArrow />
                  <p>Mbezi, Dar-es-Salaam, Tanzania</p>
                </div>
                <div className="contact-item mt-6">
                  <FaMobileAlt />
                  <p>+255 746-342-550</p>
                </div>
              </div>
              <div className="footer-social-links mt-6">
                <a href="#">
                  <FaInstagram className="social-icon" />
                </a>
                <a href="#">
                  <FaFacebook className="social-icon" />
                </a>
                <a href="#">
                  <FaLinkedin className="social-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
