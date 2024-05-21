import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <List>
      <ListItem paddingY="5px">
        <HStack spacing={4}>
          <Skeleton boxSize="32px" borderRadius={8} />
          <SkeletonText noOfLines={2} boxSize={8} />
        </HStack>
      </ListItem>
    </List>
  );
};

export default GenreListSkeleton;
