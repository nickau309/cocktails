import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Loading from "./Loading";
import Navbar from "./Navbar";

export default function Layout() {
  const { pathname } = useLocation();
  const { state, location } = useNavigation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const isSearching = location && new URLSearchParams(location.search).has("q");

  return (
    <div className="flex min-h-screen flex-col bg-slate-100 text-slate-800">
      <Navbar />
      {state === "idle" || isSearching ? <Outlet /> : <Loading />}
    </div>
  );
}
