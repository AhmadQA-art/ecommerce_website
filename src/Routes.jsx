import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

// Import pages
import Homepage from "./pages/homepage";
import ProductDetailPage from "./pages/product-detail-page";
import CollectionCategoryPage from "./pages/collection-category-page";
import AboutBrandStoryPage from "./pages/about-brand-story-page";
import SupportHelpCenter from "./pages/support-help-center";
import TestRideDemoBooking from "./pages/test-ride-demo-booking";
import ShoppingCartCheckout from "./pages/shopping-cart-checkout";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Homepage /> },
    { path: "/homepage", element: <Homepage /> },
    { path: "/product-detail-page", element: <ProductDetailPage /> },
    { path: "/collection-category-page", element: <CollectionCategoryPage /> },
    { path: "/about-brand-story-page", element: <AboutBrandStoryPage /> },
    { path: "/support-help-center", element: <SupportHelpCenter /> },
    { path: "/test-ride-demo-booking", element: <TestRideDemoBooking /> },
    { path: "/shopping-cart-checkout", element: <ShoppingCartCheckout /> },
  ]);

  return element;
};

const Routes = () => {
  return (
    <Router>
      <ScrollToTop />
      <ProjectRoutes />
    </Router>
  );
};

export default Routes;