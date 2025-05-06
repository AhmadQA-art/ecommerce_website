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
import BlogJournalPage from "./pages/blog-journal-page";
import ArticleDetail from "./pages/blog-journal-page/components/article/ArticleDetail";

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
    { path: "/blog-journal-page", element: <BlogJournalPage /> },
    { path: "/blog-journal-page/article/:id", element: <ArticleDetail /> },
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