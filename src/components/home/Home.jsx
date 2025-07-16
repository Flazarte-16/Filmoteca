import { useState } from "react";
import { MovieList } from "../movieList/MovieList";
import { Navbar } from "../navbar/Navbar";
import { MovieDetails } from "../movieDetails/MovieDetails";
import { Route } from "wouter";
import { ViewLater } from "../viewLater/ViewLater";

export const Home = () => {
  const [type, setType] = useState("movie");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  return (
    <>
      <Route path="/">
        <Navbar onSelectType={setType} setQuery={setQuery} type={type} />
        <MovieList type={type} query={query} setSelectedId={setSelectedId} />
      </Route>

      <Route path="/details">
        <MovieDetails selectedId={selectedId} type={type} />
      </Route>

      <Route path="/viewLater">
        <ViewLater selectedId={selectedId} type={type} />
      </Route>
    </>
  );
};
