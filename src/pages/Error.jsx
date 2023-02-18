import React from "react";
import BackHomeButton from "../components/BackHomeButton";

export default function Error() {
  return (
    <section className="grid flex-auto content-center justify-items-center gap-6">
      <h1 className="text-2xl font-bold tracking-wider sm:text-3xl">
        Oops! It's a Dead End.
      </h1>
      <BackHomeButton />
    </section>
  );
}
