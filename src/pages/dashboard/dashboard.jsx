import React from "react";
import { SideNav } from "../../components/sideNav";
import TopNav from "../../components/topNav";
import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import DashboardLayout from "../../components/dashboardLayout";
import PortfolioSection from "./components/portfolioSection";
import PriceSection from "./components/priceSection";
import Transaction from "./components/transaction";
import InfoCard from "./components/infoCard";


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
          <GridItem colSpan={1}>
            <PriceSection />
          </GridItem>
          <GridItem colSpan={1}>
            <Transaction />
          </GridItem>
          <GridItem colSpan={1}>
            <InfoCard
              imgUrl="../../../public/dot_bg.svg"
              text=" Learn more about Loans – Keep your Bitcoin, access it’s value without
          selling it"
              tagText="Loan"
              inverted={false}
            />
          </GridItem>
          <GridItem colSpan={1}>
            <InfoCard
              imgUrl="../../../public/grid_bg.svg"
              inverted={true}
              tagText="Contact"
              text="Learn more about our real estate, mortgage, and  corporate account services"
            />
          </GridItem>
        </Grid>
      </DashboardLayout>
    </>
  );
}

export default Dashboard;
