import { Card, Grid, Row, Text } from "@nextui-org/react";
import React, { FC } from "react";
import { SmallPokemon } from "../../interfaces/pokemon-list";
import { Router, useRouter } from "next/router";

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const { name, id, img } = pokemon;

  const router = useRouter();

  const onClick = () => {
    router.push(`/pokemon/${pokemon.name}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id}>
      <Card hoverable clickable onClick={onClick}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={img} width="100%" height={"100%"} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{name}</Text>
            <Text>#{id}</Text>
          </Row>
        </Card.Footer>
      </Card>{" "}
    </Grid>
  );
};
