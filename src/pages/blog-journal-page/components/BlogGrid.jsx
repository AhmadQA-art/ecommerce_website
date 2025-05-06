import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "components/AppImage";

const BlogGrid = () => {
  const [activeFilter, setActiveFilter] = useState("All Articles");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Urban Mobility",
      excerpt:
        "Exploring how e-bikes are reshaping city transportation and reducing carbon footprints.",
      image:
        "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "May 12, 2023",
      category: "Sustainability",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "5 Essential Accessories for Your E-Bike",
      excerpt:
        "Enhance your riding experience with these must-have accessories for safety and convenience.",
      image:
        "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "April 28, 2023",
      category: "Accessories",
      readTime: "4 min read",
    },
    {
      id: 3,
      title: "Rider Stories: From Car Commuter to E-Bike Enthusiast",
      excerpt:
        "Meet Alex, who switched from a 45-minute car commute to a 30-minute e-bike ride and never looked back.",
      image:
        "https://images.unsplash.com/photo-1571333250630-f0230c320b6d?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "March 15, 2023",
      category: "Community",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "How E-Bikes Are Changing Commuting Patterns",
      excerpt:
        "New data shows e-bikes are becoming the preferred choice for urban commuters under 10 miles.",
      image:
        "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "February 22, 2023",
      category: "Technology",
      readTime: "7 min read",
    },
    {
      id: 5,
      title: "Maintenance Tips to Extend Your E-Bike's Lifespan",
      excerpt:
        "Simple weekly and monthly maintenance routines to keep your e-bike performing at its best.",
      image:
        "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=3276&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "January 18, 2023",
      category: "Maintenance",
      readTime: "8 min read",
    },
    {
      id: 6,
      title: "The Environmental Impact of Switching to E-Bikes",
      excerpt:
        "A comprehensive look at how e-bikes contribute to reducing greenhouse gas emissions.",
      image:
        "https://images.unsplash.com/photo-1624355511224-3e4d59382cad?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "December 5, 2022",
      category: "Sustainability",
      readTime: "9 min read",
    },
    {
      id: 7,
      title: "E-Bike Safety: What Every Rider Should Know",
      excerpt:
        "Essential safety tips and best practices for e-bike riders of all experience levels.",
      image:
        "https://images.unsplash.com/photo-1511994298241-608e28f14fde?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "November 14, 2022",
      category: "Safety",
      readTime: "5 min read",
    },
    {
      id: 8,
      title: "The Evolution of E-Bike Design: From Clunky to Sleek",
      excerpt:
        "Tracing the design evolution of e-bikes from early models to today's streamlined machines.",
      image:
        "https://images.unsplash.com/photo-1581285407371-8da8c7e75d4f?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "October 30, 2022",
      category: "Design",
      readTime: "6 min read",
    },
    {
      id: 9,
      title: "E-Bikes and Public Policy: Where We Stand",
      excerpt:
        "An overview of current regulations and policies affecting e-bike riders in major cities.",
      image:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "September 22, 2022",
      category: "Policy",
      readTime: "7 min read",
    },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    if (activeFilter === "All Articles") {
      setFilteredPosts(blogPosts);
    } else {
      setFilteredPosts(blogPosts.filter(post => post.category === activeFilter));
    }
  }, [activeFilter]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  // Get unique categories for filter buttons
  const categories = ["All Articles", ...new Set(blogPosts.map(post => post.category))];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full transition-colors ${activeFilter === category 
                ? "bg-primary text-white" 
                : "bg-gray-200 hover:bg-gray-300"}`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              className="group"
            >
              <Link to={`/blog-journal-page/article/${post.id}`} className="block">
                <div className="mb-6 overflow-hidden rounded-lg h-60">
                  <Image
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mb-3 flex items-center">
                  <span className="label text-primary">{post.category}</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                <h3 className="heading-3 mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="body text-gray-500">{post.excerpt}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 flex justify-center">
          <button className="btn-secondary border border-gray-300 py-3 px-8 rounded-md inline-flex items-center justify-center">
            Load More Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
