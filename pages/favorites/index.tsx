import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { Layout } from "../../components/layouts/Layout";
import NoFavorites from "../../components/ui/NoFavorites";
import { localFavorites } from "../../utils";
import FavoritesPokemons from "../../components/pokemons/FavoritesPokemons";

const FavoritesPage: NextPage = () => {
  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);
  //commit
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
