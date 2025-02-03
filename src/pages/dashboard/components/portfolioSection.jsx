import { Button, HStack, Icon, IconButton, Stack, Tag, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { LuArrowDownToLine, LuArrowUpToLine } from "react-icons/lu";

function PortfolioSection() {
  return (
    <HStack
      bg="white"
      borderRadius="xl"
      p="6"
      justify="space-between"
      align={{
        base: "flex-start",
        xl: "center",
      }}
      flexDir={{
        base: "column",
        xl: "row",
      }}
    >
      <HStack
        spacing={{
          base: "0",
          xl: "16",
        }}
        align={{
          base: "flex-start",
          xl: "center",
        }}
        flexDir={{
          base: "column",
          xl: "row",
        }}
      >
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Total Portfolio Value</Text>
            <IconButton as={AiOutlineInfoCircle} boxSize="22px" />
          </HStack>
          <Text textStyle="h2">Rs 112,312,24</Text>
        </Stack>
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Wallet Balances </Text>
          </HStack>
          <HStack
            align={{
              base: "flex-start",
              sm: "center",
            }}
            flexDir={{
              base: "column",
              sm: "row",
            }}
          >
            <HStack>
              <Text textStyle="h2">22.39401000</Text> <Tag>BTC </Tag>
            </HStack>
            <HStack>
              <Text textStyle="h2">Rs 1,300.00</Text> <Tag>INR</Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>
      <HStack>
        <Button leftIcon={<Icon as={LuArrowDownToLine} />}>
          Deposit
        </Button>
        <Button leftIcon={<Icon as={LuArrowUpToLine} />}>
          Withdrawl
        </Button>
      </HStack>
    </HStack>
  );
}

export default PortfolioSection;
