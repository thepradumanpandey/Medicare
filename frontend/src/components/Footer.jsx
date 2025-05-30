import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm  ">
        {/* ----- Left Section ----- */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Medicare makes managing your healthcare simple. Say goodbye to
            confusing prescriptions and missed appointments! Our intuitive
            platform connects you with trusted doctors and keeps your health
            information organized—all in one place. Take charge of your health
            journey today. Sign up for Medicare and experience seamless
            healthcare at your fingertips!
          </p>
        </div>

        {/* ----- Middle Section ----- */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-black">
  <li className="hover:bg-primary px-3 py-2 rounded transition-all duration-300 cursor-pointer">
    <a href="/">Home</a>
  </li>
  <li className="hover:bg-[#AE1022]/10 px-3 py-2 rounded transition-all duration-300 cursor-pointer">
    <a href="/about"> About us</a>
  </li>
  <li className="hover:bg-[#AE1022]/10 px-3 py-2 rounded transition-all duration-300 cursor-pointer">
    <a href="contact">Contact us</a>
  </li>
  <li className="hover:bg-[#AE1022]/10 px-3 py-2 rounded transition-all duration-300 cursor-pointer">
    Privacy policy
  </li>
</ul>

        </div>

        {/* ----- Right Section ----- */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH </p>

          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91 8797874443</li>
            <li>
              {" "}
              <a
                href="pradumanpandeya@gmail.com"
                className="hover:text-black"
              >
               pradumanpandeya@gmail.com
              </a>
            </li>
          </ul>

          {/* ----- Social Media Icons ----- */}
          <div className="flex gap-4 mt-4">
            <a
              className="hover:animate-bounce-spin transition-all duration-500"
              href="https://www.linkedin.com/in/pradumanpandey/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={assets.linkedin_icon}
                alt="LinkedIn"
                className="w-5 h-5"
              />
            </a>
           
            <a
              className="hover:animate-bounce-spin transition-all duration-500"
              href="https://wa.me/8797874443"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={assets.whatsapp_icon}
                alt="WhatsApp"
                className="w-5 h-5"
              />
            </a>
            <a
              className="hover:animate-bounce-spin transition-all duration-500"
              href="https://github.com/thepradumanpandey"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.github_icon} alt="Github" className="w-5 h-5" />
            </a>
          
           
          </div>
        </div>
      </div>

      {/* ----- Copyright text ----- */}
      <div>
        <hr />
        <p className="py-10 text-sm text-center">
          Copyright © 2025 Praduman Pandey, Developer of Medicare- All Right
          Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
