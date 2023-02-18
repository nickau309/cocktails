import React from "react";
import { useNavigation } from "react-router-dom";
import CocktailList from "../components/CocktailList";
import Loading from "../components/Loading";
import SearchForm from "../components/SearchForm";

const cocktailsUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q") ?? "";
  const res = await fetch(cocktailsUrl + q);
  const data = await res.json();
  let cocktails = [];

  if (data.drinks) {
    cocktails = data.drinks.map((item) => {
      const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
      return {
        id: idDrink,
        name: strDrink,
        image: strDrinkThumb,
        info: strAlcoholic,
        glass: strGlass,
      };
    });
  }

  return { cocktails, q };
}

export default function Home() {
  const { location } = useNavigation();

  const isSearching = location && new URLSearchParams(location.search).has("q");

  return (
    <main className="flex flex-auto flex-col gap-12 py-12 sm:gap-16 sm:py-16 md:gap-20 md:py-20">
      <SearchForm />
      {isSearching ? <Loading /> : <CocktailList />}
    </main>
  );
}
