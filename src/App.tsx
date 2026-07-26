import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ShapeDivider from "./components/ShapeDivider/ShapeDivider";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <ShapeDivider></ShapeDivider>
      <Outlet />
    </>
  );
}

export default App;
