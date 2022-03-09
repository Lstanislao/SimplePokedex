import type { NextPage, GetStaticProps } from "next";
import { Layout } from "../components/layouts";
import pokeApi from "../api/pokeApi";
import { PokemonResponse, SmallPokemon } from "../interfaces/pokemon-list";
import { resolve } from "node:path/win32";
import { Button, Card, Grid, Row, Text } from "@nextui-org/react";
import { PokemonCard } from "../components/pokemons/PokemonCard";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  console.log(pokemons);
  return (
    <>
      <Layout title="Listado de pokemons">
        <Grid.Container gap={2} justify="flex-start">
          {pokemons.map((pokemon) => (
            <PokemonCard pokemon={pokemon} key={pokemon.id} />
          ))}
        </Grid.Container>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonResponse>("/pokemon?limit=151");

  const pokemons = data.results.map((item, index) => ({
    ...item,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      index + 1
    }.png`,
  }));

  return {
    props: { pokemons },
  };
};

export default HomePage;
