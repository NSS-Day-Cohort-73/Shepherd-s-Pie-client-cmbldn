import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/homepage/HomePage";
import { Login } from "./components/Login/Login";
import { NavBar } from "./components/navbar/navbar";
import { CreateOrder } from "./components/order_creation/CreateOrder";

import { EmployeeList } from "./employees/EmployeeList";
import { Order } from "./components/order_creation/OrderHistory";
import { PizzaCreation } from "./pizza/PizzaCreation";
import { SalesReport } from "./components/sales report/salesreport";

export const App = () => {
  return (
    <Routes>
      <Route
        path=""
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route path="home-page" element={<HomePage />} />
        <Route path="create-order" element={<CreateOrder />} />
        <Route path="pizza" element={<PizzaCreation />} />
        <Route path="employees" element={<EmployeeList />} />
        <Route path="order-history" element={<Order />} />
        <Route path="sales" element={<SalesReport />} />
      </Route>
      <Route index element={<Login />} />
    </Routes>
  );
};
