import React from "react";
import { useLoaderData } from "react-router-dom";
import BackHomeButton from "../components/BackHomeButton";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export async function loader({ params }) {
  const res = await fetch(url + params.id);
  const data = await res.json();
  let cocktail = null;

  if (data.drinks) {
    const {
      strDrink,
      strDrinkThumb,
      strAlcoholic,
      strCategory,
      strGlass,
      strInstructions,
    } = data.drinks[0];

    cocktail = {
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      category: strCategory,
      glass: strGlass,
      instructions: strInstructions,
      ingredients: Object.entries(data.drinks[0])
        .filter((entry) => entry[0].startsWith("strIngredient"))
        .map((entries) => entries[1])
        .filter(Boolean),
    };
  }

  return { cocktail };
}

export default function SingleCocktail() {
  const { cocktail } = useLoaderData();

  if (!cocktail) {
    return (
      <section className="grid flex-auto content-center justify-items-center gap-6">
        <h1 className="text-2xl font-bold tracking-wider sm:text-3xl">
          No Cocktail to Display.
        </h1>
        <BackHomeButton />
      </section>
    );
  }

  const { name, image, info, category, glass, instructions, ingredients } =
    cocktail;

  return (
    <section className="flex flex-col items-center gap-10 py-12 sm:gap-14 sm:py-16 md:py-20">
      <h1 className="text-3xl font-bold tracking-wider sm:text-4xl">{name}</h1>
      <div className="grid w-full max-w-7xl items-center gap-8 px-8 sm:px-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-12">
        <img src={image} alt={name} className="rounded-lg lg:col-span-2" />
        <div className="flex flex-col gap-5 font-bold leading-7 lg:col-span-3">
          <p>
            <span className="mr-2 rounded bg-green-300 px-2 py-1 text-lime-800">
              Name:
            </span>
            {name}
          </p>
          <p>
            <span className="mr-2 rounded bg-green-300 px-2 py-1 text-lime-800">
              Category:
            </span>
            {category}
          </p>
          <p>
            <span className="mr-2 rounded bg-green-300 px-2 py-1 text-lime-800">
              Info:
            </span>
            {info}
          </p>
          <p>
            <span className="mr-2 rounded bg-green-300 px-2 py-1 text-lime-800">
              Glass:
            </span>
            {glass}
          </p>
          <p>
            <span className="mr-2 rounded bg-green-300 px-2 py-1 text-lime-800">
              Instructions:
            </span>
            {instructions}
          </p>
          <p>
            <span className="mr-2 rounded bg-green-300 px-2 py-1 text-lime-800">
              Ingredients:
            </span>
            {ingredients.join(", ")}
          </p>
        </div>
      </div>
      <BackHomeButton />
    </section>
  );
}
