import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GamesCardContainer from "./GamesCardContainer";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  if (error) return <Text>{error.message}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <GamesCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GamesCardContainer>
        ))}
      {data?.results.map((game) => (
        <GamesCardContainer key={game.id}>
          <GameCard game={game} />
        </GamesCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
