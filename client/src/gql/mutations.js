import { gql } from "@apollo/client";

//Planets
const CREATE_PLANET = gql`
  mutation CreatePlanet($planet: PlanetInput!) {
    createPlanet(planet: $planet) {
      p_id
      name
      description
      code
      pictureUrl
      population
      characters {
        name
      }
    }
  }
`;

//Characters
const CREATE_CHARACTER = gql`
  mutation CreateCharacter($character: CharacterInput!) {
    createCharacter(planetInfo: $character) {
      c_id
      name
      description
      pictureUrl
      planet {
        name
      }
    }
  }
`;

export { CREATE_PLANET, CREATE_CHARACTER };
