import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "@headlessui/react";
import NavbarMenu from "./NavbarMenu";
import logo from "../../logo.svg";

export default function Navbar() {
  return (
    <nav className="flex items-center border-b border-lime-800 bg-white py-4 shadow-md shadow-black/50">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between px-4 sm:flex-nowrap sm:px-8 md:px-12 lg:px-16">
        <Link to="/">
          <img src={logo} alt="Cocktail DB Logo" className="h-5" />
        </Link>
        <Menu>{({ open }) => <NavbarMenu open={open} />}</Menu>
      </div>
    </nav>
  );
}
