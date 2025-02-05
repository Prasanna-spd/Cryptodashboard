import DashboardLayout from "./components/dashboardLayout";
import { SideNav } from "./components/sideNav";
import Dashboard from "./pages/dashboard/dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TransactionPage from "./pages/transaction/transactionPage";
import Support from "./pages/support/support";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/transactions",
    element: <TransactionPage />,
  },
  { 
    path: "/support",
    element: <Support />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
