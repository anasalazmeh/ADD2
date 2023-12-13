import React from "react";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { MdCall } from "react-icons/md";
const Footer = () => {
  return (
    <div className="bg-gray-100">
      <footer className="footer p-10  text-gray-600 justify-evenly">
        <nav className="flex w-52 justify-center items-center flex-col">
          <header className="footer-title text-5xl"><MdEmail /></header>
          <a className="link link-hover text-2xl">Email</a>
          <a className="link link-hover text-sm">info@add2add.com</a>
        </nav>
        <nav className="flex w-52 justify-center items-center flex-col text-xl">
          <header className="footer-title text-5xl"><IoLocation /></header>
          <a className="link link-hover text-2xl">OUR OFFICE</a>
          <a className="link link-hover text-sm">SAUDIA</a>
        </nav>
        <nav className="flex w-52 justify-center items-center text-center flex-col text-xl">
          <header className="footer-title text-5xl"><MdCall /></header>
          <a className="link link-hover text-2xl">CALL</a>
          <a className="link link-hover text-sm">08621 54285360</a>
        </nav>
      </footer>
      <footer className="footer footer-center p-4   text-gray-600 border-t border-gray-200 text-xl">
        <aside>
          <p>Loavi information tecnology ©</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
