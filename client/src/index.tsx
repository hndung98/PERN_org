import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/Home";
import SettingsPage from "./pages/Settings";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import ContactPage from "./pages/Contact";
import ErrorPage from "./pages/Error";
import EditContact from "./pages/Contact/EditContact";
import OCRPage from "./pages/OCR";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <OCRPage />,
  },
  {
    path: "/ocr",
    element: <OCRPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
