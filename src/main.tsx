import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/user/Home";
import Dashboard from "./pages/admin/Dashboard";
import Page from "./pages/admin/service_page/page";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Page />
  </StrictMode>
);
