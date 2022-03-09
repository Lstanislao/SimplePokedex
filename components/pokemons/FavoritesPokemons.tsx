import { Card, Grid } from "@nextui-org/react";
import React from "react";
import { FC } from "react";
import { FavoritePokemonCard } from "./FavoritePokemonCard";
import { useRouter } from "next/router";

interface Props {
  favoritesPokemons: number[];
}
const FavoritesPokemons: FC<Props> = ({ favoritesPokemons }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {favoritesPokemons.map((id) => (
        <Grid key={id} xs={6} sm={3} md={2}>
          <FavoritePokemonCard key={id} id={id} />
        </Grid>
      ))}
    </Grid.Container>
  );
};

export default FavoritesPokemons;
