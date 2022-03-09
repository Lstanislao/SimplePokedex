import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { Layout } from "../../components/layouts/Layout";
import { Container, Text, Image, Grid, Card } from "@nextui-org/react";
import NoFavorites from "../../components/ui/noFavorites";
import { localFavorites } from "../../utils";
import FavoritesPokemons from "../../components/pokemons/FavoritesPokemons";

const FavoritesPage: NextPage = () => {
  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemons(localFavorites.pokemons);
  }, []);

  return (
    <Layout title="Pokemon - Favoritos">
      {favoritesPokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritesPokemons favoritesPokemons={favoritesPokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
