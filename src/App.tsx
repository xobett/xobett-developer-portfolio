import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ShapeDivider from "./components/ShapeDivider/ShapeDivider";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <ShapeDivider></ShapeDivider>
      <Navbar></Navbar>
      <Outlet />
    </>
  );
}

export default App;
