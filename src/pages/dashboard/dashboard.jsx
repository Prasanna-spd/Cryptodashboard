import React from "react";
import { SideNav } from "../../components/sideNav";
import TopNav from "../../components/topNav";
import { Box, Flex } from "@chakra-ui/react";
import DashboardLayout from "../../components/dashboardLayout";
import PortfolioSection from "./components/portfolioSection";

function Dashboard() {
  return (
    <>
      <DashboardLayout title="Dashboard">
        {/* <conat>How aree</conat> */}
        <PortfolioSection/>
      </DashboardLayout>
    </>
  );
}

export default Dashboard;
