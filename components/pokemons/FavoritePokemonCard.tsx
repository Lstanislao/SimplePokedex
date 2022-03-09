import { Card } from "@nextui-org/react";
import { useRouter } from "next/router";
import React from "react";
import { FC } from "react";

interface Props {
  id: number;
}

export const FavoritePokemonCard: FC<Props> = ({ id }) => {
  const router = useRouter();
  const onClickPokemon = (pokemonId: number) => {
    router.push(`/pokemon/${pokemonId}`);
  };
  return (
    <Card
      onClick={() => {
        onClickPokemon(id);
      }}
      hoverable
      clickable
      css={{ padding: 10 }}
    >
      <Card.Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        width={"100%"}
        height={"140px"}
      ></Card.Image>
    </Card>
  );
};
