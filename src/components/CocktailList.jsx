import React from "react";
import { useLoaderData } from "react-router-dom";
import Cocktail from "./Cocktail";

export default function CocktailList() {
  const { cocktails } = useLoaderData();

  return (
    <section className="flex flex-col gap-10 sm:gap-14">
      <h1
        className={`text-center font-bold tracking-wider ${
          cocktails.length ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"
        }`}
      >
        {cocktails.length
          ? "Cocktails"
          : "No Cocktails Matched Your Search Criteria."}
      </h1>
      {cocktails.length > 0 && (
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:grid-cols-2 sm:px-8 md:px-12 lg:px-16 xl:grid-cols-3">
          {cocktails.map((item) => (
            <Cocktail key={item.id} {...item} />
          ))}
        </div>
      )}
    </section>
  );
}
