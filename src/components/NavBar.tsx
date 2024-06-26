import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

// interface Props {
//   onSearch: (searchText: string) => void;
// }

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image
        borderRadius={10}
        src={logo}
        marginLeft={2}
        marginRight={2}
        boxSize="60px"
      />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
