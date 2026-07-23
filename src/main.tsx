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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate replace to={"/home"} /> },
      { path: "/home", element: <Home /> },
      { path: "/about-me", element: <Home /> },
      { path: "/projects", element: <Home /> },
      { path: "/experience", element: <Home /> },
      { path: "/education", element: <Home /> },
      { path: "/contact", element: <Home /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
