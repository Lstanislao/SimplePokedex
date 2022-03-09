import { pokeApi } from "../api";
import { PokemonFull } from "../interfaces/pokemon-full";

export const getPokemon = async (name: string) => {
  try {
    const { data } = await pokeApi.get<PokemonFull>(`/pokemon/${name}`);

    return {
      id: data.id,
      name: data.name,
      sprites: data.sprites,
    };
  } catch (error) {
    return null;
  }
};
