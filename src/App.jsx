import { Outlet, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/homepage/HomePage";
import { Login } from "./components/Login/Login";
import { NavBar } from "./components/navbar";
import { CreateOrder } from "./components/order_creation/CreateOrder";
import "./App.css";
import { PizzaCreation } from "./pizza/PizzaCreation";

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
      </Route>
      <Route index element={<Login />} />
    </Routes>
  );
};
