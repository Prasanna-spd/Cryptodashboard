import React from "react";
import { SideNav } from "../../components/sideNav";
import TopNav from "../../components/topNav";
import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import DashboardLayout from "../../components/dashboardLayout";
import PortfolioSection from "./components/portfolioSection";
import PriceSection from "./components/priceSection";
import Transaction from "./components/transaction";

function Dashboard() {
  return (
    <>
      <DashboardLayout title="Dashboard">
        <Grid
          gridTemplateColumns={{
            base: "repeat(1, 1fr)",
            xl: "repeat(2, 1fr)",
          }}
          gap="6"
        >
          <GridItem
            colSpan={{
              base: 1,
              xl: 2,
            }}
          >
            <PortfolioSection />
          </GridItem>
          <GridItem
            colSpan={1}
          >
            <PriceSection />
          </GridItem>
          <GridItem
            colSpan={1}
          >
            <Transaction />
          </GridItem>
        </Grid>
      </DashboardLayout>
    </>
  );
}

export default Dashboard;
