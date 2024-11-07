import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/navbar";
import { HomePage } from "./components/HomePage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
}

export default App;
