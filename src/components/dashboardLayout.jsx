import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { SideNav } from "./sideNav";
import TopNav from "./topNav";
import SideDrawer from "./sideDrawer";

function DashboardLayout({title,children}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex>
      <SideNav />
      <SideDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
      <Box flexGrow={1}>
        <TopNav title= {title} onOpen={onOpen}/>
        <Container maxW="70rem" bg="red">{children}</Container>
      </Box>
    </Flex>
  );
}

export default DashboardLayout;
