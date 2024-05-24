import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatforms";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setgameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar
            onSearch={(searchText) =>
              setgameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>

        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setgameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>

        <GridItem area="main">
          <Flex paddingLeft={2} marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector
                selectedPlatform={gameQuery.platform}
                onSelectPlatform={(platform) =>
                  setgameQuery({ ...gameQuery, platform })
                }
              />
            </Box>

            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setgameQuery({ ...gameQuery, sortOrder })
              }
            />
          </Flex>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
