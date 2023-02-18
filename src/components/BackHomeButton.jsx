import React from "react";
import { Link } from "react-router-dom";

export default function BackHomeButton() {
  return (
    <Link
      to="/"
      className="rounded-full bg-lime-800 px-5 py-2.5 font-bold uppercase tracking-wider text-white shadow-sm shadow-black/20 transition-colors duration-300 hover:bg-lime-600"
    >
      Back Home
    </Link>
  );
}
