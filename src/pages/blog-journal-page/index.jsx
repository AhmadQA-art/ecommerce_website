import React from "react";
import Header from "./components/Header";
import BlogHero from "./components/BlogHero";
import BlogGrid from "./components/BlogGrid";
import Footer from "./components/Footer";

const BlogJournalPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <BlogHero />
      <BlogGrid />
      <Footer />
    </div>
  );
};

export default BlogJournalPage;
