import {
  Box,
  Heading,
  HStack,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { RiDashboardFill } from "react-icons/ri";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";

export const SideNav = () => {
  const navLinks = [
    {
      icon: RiDashboardFill,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: BsArrowDownUp,
      text: "Transactions",
      link: "/transactions",
    },
  ];
  return (
    <Stack
      boxShadow={{
        base: "none",
        lg: "lg",
      }}
      maxW="16rem"
      h="100vh"
      justify="space-between"
      bg="white"
    >
      <Box>
        <Heading textAlign="center" pt="12px" fontSize="20px" as="h1">
          CryptoMonk
        </Heading>

        <Box mt="24px" mx="12px">
          {navLinks.map((nav) => (
            <Link key={nav.text} to={nav.link}>
            <HStack
              py="3"
              px="4"
              _hover={{
                bg: "#F3F3F7",
                color: "#171717",
              }}
              color="#797E82"
              borderRadius="10px"
            >
              <IconButton as={nav.icon} />
              <Text fontSize="14px">{nav.text}</Text>
            </HStack>
            </Link>
          ))}
        </Box>
      </Box>

      <Box mt="6" mx="3" mb="6">
      <Link to="/support">
        <HStack
          borderRadius="10px"
          py="3"
          px="4"
          _hover={{
            bg: " #F3F3F7",
            color: "#171717",
          }}
          color="#797E82"
        >
          <IconButton as={BiSupport} />
          <Text fontSize="14px" fontWeight="medium">
            Support
          </Text>
        </HStack>
        </Link>
      </Box>
    </Stack>
  );
};
