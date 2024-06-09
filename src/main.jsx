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
//import App from "./App.tsx";
import "./index.css";
import { CharactersList } from "./components/characters/Characters.tsx";
import { EpisodeList } from "./components/episodes/Episode.tsx";
import { FavoriteEpisodes } from "../src/components/favorites/EpisodesFavorites.tsx";
import { InfoCharacters } from "./components/info-characters/info-characters.tsx";
//import { characterId } from "./components/info-characters/info-characters.tsx";

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
        <Route path="/favorites" exact element={<FavoriteEpisodes />} />
        <Route
          path="/infocharacters/:characterId"
          exact
          element={<InfoCharacters />}
        />
      </Routes>
    </Router>
  </ApolloProvider>
);
