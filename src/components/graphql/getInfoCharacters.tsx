import { gql } from "@apollo/client";

export const GET_INFO_CHARACTERS = gql`
  query InfoCharacters($id: ID!) {
    character(id: $id) {
      id
      image
      name
      species
      status
    }
  }
`;
