import { useMutation, useQuery, gql } from "@apollo/client";
import { CREATE_CHARACTER, CREATE_PLANET } from "./mutations";
import {
  GET_PLANETS,
  GET_PLANET,
  GET_CHARACTER,
  GET_CHARACTERS,
} from "./queries";

//Planets
const useGetPlanets = (pageSize, page) => {
  const { loading, data, error } = useQuery(GET_PLANETS, {
    variables: {
      pageSize: pageSize,
      page: page,
    },
  });
  return {
    loading,
    data,
    error,
  };
};
const useGetPlanet = (code) => {
  const { loading, data, error } = useQuery(GET_PLANET, {
    variables: {
      code: code,
    },
  });
  return {
    loading,
    data,
    error,
  };
};

const useCreatePlanet = () => {
  const [createPlanet, { loading, data, error }] = useMutation(CREATE_PLANET, {
    update(cache, { data: { createPlanet } }) {
      const { planets } = cache.readQuery({ query: GET_PLANETS });

      //creating copies of diff objs as they we not extensible
      let createPlanetCpy = { ...createPlanet };
      createPlanetCpy.characters = [];
      let planetsCpy = { ...planets };
      let nodesCpy = [createPlanetCpy, ...planetsCpy.nodes];
      planetsCpy.nodes = nodesCpy;

      cache.writeQuery({
        query: GET_PLANETS,
        data: {
          planets: { ...planetsCpy },
        },
      });
    },
  });
  return {
    createPlanet,
    loading,
    data,
    error,
  };
};

//Character
const useGetCharacters = (pageSize, page) => {
  const { loading, data, error } = useQuery(GET_CHARACTERS, {
    variables: {
      pageSize: pageSize,
      page: page,
    },
  });
  return {
    loading,
    data,
    error,
  };
};
const useGetCharacter = (id) => {
  const { loading, data, error } = useQuery(GET_CHARACTER, {
    variables: {
      id: id,
    },
  });
  return {
    loading,
    data,
    error,
  };
};

const useCreateCharacter = () => {
  const [createCharacter, { loading, data, error }] = useMutation(
    CREATE_CHARACTER,
    {
      update(cache, { data: { createCharacter } }) {
        const { characters } = cache.readQuery({ query: GET_CHARACTERS });
        let createCharacterCpy = { ...createCharacter };
        createCharacterCpy.planet = "{}";
        let charactersCpy = { ...characters };
        let nodesCpy = [createCharacterCpy, ...charactersCpy.nodes];
        charactersCpy.nodes = nodesCpy;
        cache.writeQuery({
          query: GET_CHARACTERS,
          data: {
            characters: { ...charactersCpy },
          },
        });
      },
    }
  );
  return {
    createCharacter,
    loading,
    data,
    error,
  };
};

export {
  useGetPlanets,
  useGetPlanet,
  useCreatePlanet,
  useGetCharacters,
  useGetCharacter,
  useCreateCharacter,
};
