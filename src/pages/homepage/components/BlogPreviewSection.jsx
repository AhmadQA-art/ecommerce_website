import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "components/AppImage";

const BlogPreviewSection = () => {
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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div>
            <h2 className="heading-1 mb-4">From Our Journal</h2>
            <p className="body-large text-gray-500 max-w-2xl">
              Stories, tips, and insights from the world of e-bikes and
              sustainable urban mobility.
            </p>
          </div>
          <Link
            to="/blog-journal-page" className="btn-secondary mt-6 md:mt-0 whitespace-nowrap"
          >
            View All Articles
          </Link>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              className="group"
            >
              <Link to="/blog-journal-page" className="block">
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
                </div>
                <h3 className="heading-3 mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="body text-gray-500">{post.excerpt}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;