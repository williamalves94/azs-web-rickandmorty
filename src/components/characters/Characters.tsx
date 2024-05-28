import React from "react";
import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_CHARACTERS } from "../graphql/getCharacters";
import { HeaderCharacter } from "../header/headerCharacters";
import { Cards } from "../cards/styles-cards";
import { MainDiv, Buttons } from "./styles-characters";
import { HomeMain } from "./Home-main";
import { FooterCharacters } from "./footer-characters";
import { LoadingScreen, ErrorScreen } from "../episodes/styles-episodes";
import { Header } from "../header/header-main";
import { Link } from "react-router-dom";

export interface CharactersListProps {
  id: string;
  page: number;
  name: string;
  image: string;
  status: string;
  species: string;
  //page: number;
}

export const CharactersList = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  const { data, error, loading: queryLoading, fetchMore } = useQuery(
    GET_ALL_CHARACTERS,
    {
      variables: { page: currentPage },
    }
  );

  useEffect(() => {
    if (queryLoading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [queryLoading]);

  if (loading) {
    return (
      <LoadingScreen>
        <p>AGUARDE, CARREGANDO...</p>
      </LoadingScreen>
    );
  }

  if (error) {
    return (
      <ErrorScreen>
        <h1>{error.message}</h1>
      </ErrorScreen>
    );
  }

  const handlePageChange = (newPage: number) => {
    fetchMore({
      variables: {
        page: newPage,
      },
    }).then(() => setCurrentPage(newPage));
  };

  return (
    <MainDiv>
      <Header />
      <HomeMain />
      <Cards>
        {data.characters.results.map((character: CharactersListProps) => (
          <div className="char-div" key={character.id}>
            <div className="char-and-text">
              <Link to={`/infocharacters/${character.id}`}>
                <img className="char-image" src={character.image} />
              </Link>
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
      <FooterCharacters />
    </MainDiv>
  );
};
