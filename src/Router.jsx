import { createBrowserRouter } from "react-router-dom";
import { LegalDisclosure, PrivacyPolicy } from "@pages"; // Import pages
import { Layout } from "@components"; // Layout component

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Main layout that will contain your other sections
  },
  // Routing for pages that should have their own route, not displayed in the layout
  {
    path: "/impressum",
    element: <LegalDisclosure />, // Your Impressum page
  },
  {
    path: "/privacy",
    element: <PrivacyPolicy />, // Your Privacy Policy page
  },
]);

export default router;
