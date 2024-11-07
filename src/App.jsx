import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/navbar";

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
};
