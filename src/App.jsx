import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/homepage/HomePage";
import { Login } from "./components/Login/Login";
import { NavBar } from "./components/navbar";
import { CreateOrder } from "./components/CreateOrder";
import "./App.css";

export const App = () => {
  return (
    <>
      {window.location.pathname !== "/login" && <NavBar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </>
  );
};
