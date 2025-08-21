import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.company_logo2} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Discover effortless style with August&Sage. Inspired by modern
            living, crafted for everyday elegance. Wear confidence, live
            beautifully.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home </li>
            <li>About Us </li>
            <li> Delivery </li>
            <li> Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">CONTACT</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91-73488 47198 </li>
            <li>contact@augustsage.com </li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          {" "}
          Copyright 2024 @August&Sage.com -All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
