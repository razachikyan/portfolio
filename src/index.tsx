import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { HomePage } from "./pages/homepage/page";
import { ResumePage } from "./pages/resume/page";
import { ContactsPage } from "./pages/contacts/page";
import { PortfolioPage } from "./pages/portfolio/page";

import "normalize.css";
import "./styles/fonts.css";
import "./styles/global.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/resume",
    element: <ResumePage />,
  },
  {
    path: "/contacts",
    element: <ContactsPage />,
  },
  {
    path: "/portfolio",
    element: <PortfolioPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
