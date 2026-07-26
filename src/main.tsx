import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home/Home.tsx";
import Projects from "./components/Projects/Projects.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate replace to={"/home"} /> },
      { path: "/home", element: <Home /> },
      { path: "/projects", element: <Projects /> },
      { path: "/experience", element: <Home /> },
      { path: "/contact", element: <Home /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
