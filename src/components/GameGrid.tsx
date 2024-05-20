import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
// import React, { useEffect, useState } from "react";
// import apiClient from "../services/api-client";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GamesCardContainer from "./GamesCardContainer";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GamesCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GamesCardContainer>
          ))}
        {games.map((game) => (
          <GamesCardContainer key={game.id}>
            <GameCard game={game} />
          </GamesCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
