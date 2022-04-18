import { gql } from "@apollo/client";

//Planets
const CREATE_PLANET = gql`
  mutation CreatePlanet($planetInfo: PlanetInput) {
    createPlanet(planetInfo: $planetInfo) {
      p_id
      name
      description
      code
      picture_url
      population
    }
  }
`;

//Characters
const CREATE_CHARACTER = gql`
  mutation CreateCharacter($characterInfo: CharacterInput!) {
    createCharacter(characterInfo: $characterInfo) {
      c_id
      name
      description
      picture_url
    }
  }
`;

export { CREATE_PLANET, CREATE_CHARACTER };
