import React from "react";

import {
  DivInfoCharacters,
  ErrorData,
  DivCharacter,
  ImgCharacter,
  InfoChar,
  DivAllInfo,
} from "./info-char";
import { Header } from "../header/header-main";
import { GET_INFO_CHARACTERS } from "../graphql/getInfoCharacters";
import { useQuery } from "@apollo/client";
//import { CharactersList, CharactersListProps } from "../characters/Characters";
import { LoadingScreen, ErrorScreen } from "../episodes/styles-episodes";
import { useParams } from "react-router-dom";

export const InfoCharacters = () => {
  const { characterId } = useParams(); //obtém o ID do personagem da url

  const { loading, data, error } = useQuery(GET_INFO_CHARACTERS, {
    variables: { id: characterId }, // Passa o ID do personagem para a query GraphQL
  });

  if (loading) {
    return (
      <LoadingScreen>
        <p>AGUARDE, CARREGANDO...</p>
      </LoadingScreen>
    );
  }

  if (error) {
    console.log(error.message);
    return (
      <ErrorScreen>
        <h1>{error.message}</h1>
      </ErrorScreen>
    );
  }

  if (!data || !data.character) {
    return (
      <ErrorData>
        <p>
          Não foi possível encontrar<br></br>informações para este personagem.
        </p>
      </ErrorData>
    );
  }

  const character = data.character;

  return (
    <DivAllInfo>
      <Header />
      <DivInfoCharacters>
        <DivCharacter>
          <ImgCharacter>
            <img src={character.image} />
          </ImgCharacter>
          <InfoChar>
            <p className="char-name">{character.name}</p>
            <p className="char-status">Status: {character.status}</p>
            <p className="char-specie">Espécie: {character.species}</p>
          </InfoChar>
        </DivCharacter>
      </DivInfoCharacters>
    </DivAllInfo>
  );
};
