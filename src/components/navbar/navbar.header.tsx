import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <div className="flex justify-between bg-cyan-600 px-32 py-2">
      <div className="flex gap-10">
        <div className="flex gap-2 justify-center items-center text-slate-50 font-light">
          <FaPhoneAlt />
          <div>+62834838383</div>
        </div>
        <div className="flex gap-2 justify-center items-center text-slate-50 font-light">
          <FaMailBulk />
          <div>cleanease.info@gmail.com</div>
        </div>
      </div>
      <div className="flex gap-2 ">
        <div className="p-1 rounded-full w-fit bg-slate-50">
          <FaFacebook />
        </div>
        <div className="p-1 rounded-full w-fit bg-slate-50">
          <FaInstagram />
        </div>
        <div className="p-1 rounded-full w-fit bg-slate-50">
          <FaTwitter />
        </div>
        <div className="p-1 rounded-full w-fit bg-slate-50">
          <FaLinkedin />
        </div>
      </div>
    </div>
  );
};

export default Header;
