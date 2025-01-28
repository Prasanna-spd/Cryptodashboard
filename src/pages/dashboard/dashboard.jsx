import React from "react";
import { SideNav } from "../../components/sideNav";
import TopNav from "../../components/topNav";
import { Box, Flex } from "@chakra-ui/react";
import DashboardLayout from "../../components/dashboardLayout";

function Dashboard() {
  return (
    <>
      <DashboardLayout title="Dashboard">
        <div>How aree</div>
      </DashboardLayout>
    </>
  );
}

export default Dashboard;
