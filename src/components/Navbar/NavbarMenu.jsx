import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/solid";

export default function NavbarMenu({ open }) {
  const parentRef = useRef();
  const childRef = useRef();

  useEffect(() => {
    const height = childRef.current.getBoundingClientRect().height;
    parentRef.current.style.height = (open ? height : 0) + "px";
  }, [open]);

  return (
    <>
      <Menu.Button className="w-6 sm:hidden">
        <Bars3Icon />
      </Menu.Button>
      <div
        ref={parentRef}
        className="basis-full overflow-hidden transition-[height] duration-300 sm:!h-auto sm:flex-initial"
      >
        <Menu.Items
          as="ul"
          ref={childRef}
          className="pt-4 text-center sm:flex sm:pt-0"
          static
        >
          <Menu.Item as="li">
            <Link
              to="/"
              className="block py-2 text-lg font-bold tracking-wider transition-colors duration-300 hover:text-lime-800 sm:px-2"
            >
              Home
            </Link>
          </Menu.Item>
          <Menu.Item as="li">
            <Link
              to="/about"
              className="block py-2 text-lg font-bold tracking-wider transition-colors duration-300 hover:text-lime-800 sm:px-2"
            >
              About
            </Link>
          </Menu.Item>
        </Menu.Items>
      </div>
    </>
  );
}
