//import React from "react";
import ReactDOM from "react-dom/client";
import {
  //createBrowserRouter,
  //RouterProvider,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import App from "./App.jsx";
import "./index.css";
// import { CharactersList } from "./components/characters/Characters.jsx";
// import { EpisodeList } from "./components/episodes/Episode.jsx";
import { CharactersList } from "./components/characters/Characters.jsx";
import { EpisodeList } from "./components/episodes/Episode.jsx";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <Router>
      <Routes>
        <Route path="/" exact element={<EpisodeList />} />
        <Route path="/characters" exact element={<CharactersList />} />
      </Routes>
    </Router>
  </ApolloProvider>
);
