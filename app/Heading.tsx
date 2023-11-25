import Image from "next/image";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import logo from '../public/azam.png'
const Heading = () => {
  return (
    <nav>
      <div className="navbar Green text-white">
        <div className="navbar-start ">
          <a
            href="Email:info@add2add.com"
            className="btn btn-ghost text-sm md:text-2xl"
          >
            Email:info@add2add.com
          </a>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost md:btn-circle text-sm md:text-2xl">
            <FaInstagram/>
          </button>
          <button className="btn btn-ghost md:btn-circle p-0 text-sm md:text-2xl">
            <FaFacebook />
          </button>
          <button className="btn btn-ghost md:btn-circle text-sm md:text-2xl">
            <FaTwitter/>
          </button>
        </div>
      </div>
      <div className="navbar bg-white">
        <div className="navbar-start">
          <a className="btn btn-ghost hover:bg-white text-xl">
            <Image src={logo} alt="" width='80'/>
          </a>
        </div>
        <div className="navbar-end ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content right-0 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Product</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Heading;
