import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./Router";
import { CookieConsentProvider } from "./context/CookieConsentContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CookieConsentProvider>
      <RouterProvider router={router} />
    </CookieConsentProvider>
  </StrictMode>
);
