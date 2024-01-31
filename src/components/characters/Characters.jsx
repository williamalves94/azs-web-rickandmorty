import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_CHARACTERS } from "../graphql/getCharacters";
import { HeaderCharacter } from "../headers/headerCharacters";
import { Cards } from "../cards/styles-cards";
import { MainDiv, Buttons } from "./styles-characters";
import { HomeMain } from "./Home-main";

export const CharactersList = ({ page }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { loading, error, data, fetchMore } = useQuery(GET_ALL_CHARACTERS, {
    variables: { page: currentPage },
  });

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>error</p>;

  const handlePageChange = (newPage) => {
    fetchMore({
      variables: {
        page: newPage,
      },
    }).then(() => setCurrentPage(newPage));
  };

  return (
    <MainDiv>
      <HeaderCharacter />
      <HomeMain />

      <Cards>
        {data.characters.results.map((character) => (
          <div className="char-div" key={character.name}>
            <div className="char-and-text">
              <img className="char-image" src={character.image} />
              <h3 className="char-name">{character.name}</h3>
              <p className="char-status">Status: {character.status}</p>
              <p className="char-species">Espécie: {character.species}</p>
            </div>
          </div>
        ))}
      </Cards>
      <Buttons>
        {data.characters.info.prev && (
          <button onClick={() => handlePageChange(data.characters.info.prev)}>
            Anterior
          </button>
        )}

        {data.characters.info.next && (
          <button onClick={() => handlePageChange(data.characters.info.next)}>
            Próximo
          </button>
        )}
      </Buttons>
    </MainDiv>
  );
};
