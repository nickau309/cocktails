import React, { useEffect, useId, useRef } from "react";
import { Form, useLoaderData, useSubmit } from "react-router-dom";

export default function SearchForm() {
  const id = useId();
  const searchRef = useRef("");

  const { q } = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  useEffect(() => {
    document.getElementById(id).value = q;
  }, [id, q]);

  const handleChange = (e) => {
    const isFirstSearch = q === "";
    submit(e.currentTarget.form, {
      replace: !isFirstSearch,
    });
  };

  return (
    <section className="flex justify-center">
      <Form
        role="search"
        className="mx-8 w-full max-w-xl rounded-lg bg-white p-8 shadow-md shadow-black/50 sm:mx-12 sm:p-10"
      >
        <div className="flex flex-col gap-5">
          <label
            htmlFor={id}
            className="font-bold tracking-wider text-lime-800"
          >
            Search Your Favorite Cocktail
          </label>
          <input
            type="search"
            id={id}
            name="q"
            ref={searchRef}
            defaultValue={q}
            onChange={handleChange}
            className="rounded bg-slate-100 p-2 text-lg"
          />
        </div>
      </Form>
    </section>
  );
}
