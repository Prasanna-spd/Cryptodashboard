import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { PiUserCircleFill } from "react-icons/pi";
import { IoMenuSharp } from "react-icons/io5";

function TopNav({title,onOpen}) {
  return (
    <Box boxShadow="lg">
      <HStack maxW="70rem" h="16" justify="space-between" mx="auto">
      <IconButton as={IoMenuSharp} onClick={onOpen}
        display={{
          base:"block",
          lg:"none"
        }}
      />
        <Heading fontSize="28px" fontWeight="medium">{title}</Heading>
        <Menu>
          <MenuButton>
            <IconButton as={PiUserCircleFill} size="lg" />
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
}

export default TopNav;
