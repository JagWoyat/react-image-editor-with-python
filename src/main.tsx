import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./ErrorPage.tsx";
import Response from "./Response.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "response/:filename",
    element: <Response />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Navbar>
      <div className="Body">
        <RouterProvider router={router} />
      </div>
    </Navbar>
  </React.StrictMode>
);
