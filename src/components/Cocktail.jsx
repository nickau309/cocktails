import React from "react";
import { Link } from "react-router-dom";

export default function Cocktail({ glass, id, image, info, name }) {
  return (
    <article className="flex flex-col rounded-lg bg-white shadow-md shadow-black/50 transition-shadow duration-300 hover:shadow-lg hover:shadow-black/50">
      <img
        src={image}
        alt={name}
        className="h-80 w-full rounded-t-lg object-cover"
      />
      <div className="p-6 text-center sm:text-left">
        <h2 className="mb-1.5 text-xl font-bold tracking-wider sm:text-2xl">
          {name}
        </h2>
        <h3 className="mb-1.5 font-bold tracking-wider sm:text-lg">{glass}</h3>
        <p className="mb-3 text-slate-400">{info}</p>
        <Link
          to={`/cocktail/${id}`}
          className="inline-block rounded-full bg-lime-800 py-2 px-4 text-sm uppercase tracking-wider text-white shadow-sm shadow-black/20 transition-colors duration-300 hover:bg-lime-600"
        >
          Details
        </Link>
      </div>
    </article>
  );
}
