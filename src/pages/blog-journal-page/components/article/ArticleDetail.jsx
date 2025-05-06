import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../Header";
import Footer from "../Footer";

const ArticleDetail = () => {
  const { id } = useParams();
  
  // This would normally come from an API or data store
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Urban Mobility",
      excerpt:
        "Exploring how e-bikes are reshaping city transportation and reducing carbon footprints.",
      fullContent: `
        <p>The urban landscape is changing rapidly, and with it, the way we move around our cities. Electric bikes are at the forefront of this transformation, offering a sustainable, efficient, and enjoyable alternative to traditional transportation methods.</p>
        
        <p>As cities worldwide grapple with congestion, pollution, and the need for more sustainable transportation options, e-bikes have emerged as a compelling solution. They combine the convenience of bicycles with the power assistance that makes longer commutes and hilly terrains accessible to riders of all fitness levels.</p>
        
        <h2>Reducing Carbon Footprints</h2>
        
        <p>One of the most significant advantages of e-bikes is their minimal environmental impact. Unlike cars and motorcycles, e-bikes produce zero direct emissions. Even when accounting for the electricity used to charge their batteries, their carbon footprint is substantially lower than that of motorized vehicles.</p>
        
        <p>A recent study found that if just 15% of urban car trips were replaced with e-bike journeys, carbon emissions from urban transportation could be reduced by up to 12%. This represents a significant step toward meeting climate goals and creating cleaner, healthier cities.</p>
        
        <h2>Reshaping Urban Infrastructure</h2>
        
        <p>The rising popularity of e-bikes is also influencing how cities plan and develop their infrastructure. Many urban centers are expanding their cycling networks, creating dedicated lanes, and implementing bike-sharing programs that include electric options.</p>
        
        <p>These changes not only accommodate the growing number of e-bike riders but also make cities more accessible and enjoyable for everyone. Reduced traffic congestion, lower noise levels, and improved air quality benefit all urban dwellers, regardless of how they choose to travel.</p>
        
        <h2>The Economic Impact</h2>
        
        <p>Beyond environmental benefits, e-bikes are creating economic opportunities. The e-bike industry is growing rapidly, creating jobs in manufacturing, sales, maintenance, and related services. Additionally, e-bike commuters often save significant amounts of money on fuel, parking, and vehicle maintenance.</p>
        
        <p>As technology continues to improve and prices become more accessible, e-bikes are poised to become an even more integral part of urban mobility. The future of city transportation is electric, efficient, and exciting – and e-bikes are leading the charge.</p>
      `,
      image:
        "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "May 12, 2023",
      category: "Sustainability",
      readTime: "5 min read",
      author: "Emma Johnson",
      authorRole: "Urban Mobility Specialist",
      authorImage: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      title: "5 Essential Accessories for Your E-Bike",
      excerpt:
        "Enhance your riding experience with these must-have accessories for safety and convenience.",
      fullContent: `
        <p>Electric bikes offer an incredible riding experience right out of the box, but with the right accessories, you can take your e-bike adventures to the next level. Whether you're a daily commuter or a weekend explorer, these five essential accessories will enhance your safety, comfort, and overall enjoyment.</p>
        
        <h2>1. High-Quality Helmet</h2>
        
        <p>Safety should always be your top priority, and a good helmet is non-negotiable. Look for helmets specifically designed for e-bike riders, which offer enhanced protection due to the higher speeds e-bikes can achieve. Many modern e-bike helmets come with integrated features like LED lights, turn signals, and even Bluetooth connectivity.</p>
        
        <p>Invest in a helmet that fits properly and meets safety standards. Remember, it's not just about having a helmet—it's about having the right helmet that provides adequate protection for the type of riding you do.</p>
        
        <h2>2. Reliable Locks</h2>
        
        <p>E-bikes represent a significant investment, making them attractive targets for theft. A high-quality lock—or better yet, a combination of locks—is essential for protecting your ride. Consider using both a U-lock for securing the frame and a cable lock for the wheels.</p>
        
        <p>Some e-bikes come with integrated GPS tracking and alarm systems, but even with these features, physical locks remain your first line of defense against theft.</p>
        
        <h2>3. Lighting Systems</h2>
        
        <p>While many e-bikes come with built-in lights, upgrading to a more powerful lighting system can significantly improve your visibility and safety, especially if you ride at dawn, dusk, or night. Look for lights with different modes (steady, flashing) and sufficient brightness (measured in lumens).</p>
        
        <p>Front lights should illuminate your path, while rear lights should make you visible to others. Consider adding side lights or wheel lights for additional visibility from all angles.</p>
        
        <h2>4. Cargo Solutions</h2>
        
        <p>One of the great advantages of e-bikes is their ability to replace car trips for errands and shopping. The right cargo accessories make this much easier. Depending on your needs, consider panniers (saddlebags), basket attachments, cargo racks, or even trailers for larger loads.</p>
        
        <p>Look for waterproof options if you live in a rainy climate, and make sure any cargo solution you choose is compatible with your specific e-bike model.</p>
        
        <h2>5. Smartphone Mount</h2>
        
        <p>A secure smartphone mount turns your phone into a dashboard for navigation, fitness tracking, or controlling music while you ride. Many mounts offer weatherproofing and shock absorption to protect your device.</p>
        
        <p>Position the mount where you can glance at it safely without taking your attention off the road for too long. Some e-bike-specific mounts even offer integrated charging so your phone stays powered throughout your journey.</p>
        
        <p>With these five essential accessories, you'll be well-equipped for whatever your e-bike adventures bring. Remember that quality matters—these items protect you and your investment, so choose durable, well-designed products that will stand the test of time.</p>
      `,
      image:
        "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "April 28, 2023",
      category: "Accessories",
      readTime: "4 min read",
      author: "Marcus Chen",
      authorRole: "Product Specialist",
      authorImage: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      title: "Rider Stories: From Car Commuter to E-Bike Enthusiast",
      excerpt:
        "Meet Alex, who switched from a 45-minute car commute to a 30-minute e-bike ride and never looked back.",
      fullContent: `
        <p>For over a decade, Alex Thompson's daily routine began with a familiar frustration: sitting in traffic. His 12-mile commute to the city center should have taken 20 minutes, but rush hour traffic consistently stretched it to 45 minutes or more. "I was spending nearly two hours of my day just sitting in my car, inching forward," Alex recalls. "It was time I could never get back."</p>
        
        <p>Like many urban professionals, Alex had considered alternatives. Public transportation would have taken even longer, and traditional cycling seemed impractical given the distance and the need to arrive at work without needing a shower. Then, in early 2022, a colleague suggested he try an electric bike.</p>
        
        <h2>The Transition</h2>
        
        <p>"I was skeptical at first," Alex admits. "I hadn't been on a bike in years, and I wasn't sure if an e-bike could really replace my car for commuting." Nevertheless, he decided to rent an e-bike for a week to test the concept.</p>
        
        <p>The experience was transformative. "The first morning, I made it to work in 30 minutes—faster than my car during rush hour. I arrived energized instead of stressed, and I hadn't broken a sweat thanks to the electric assist." By the end of the week, Alex had placed an order for his own e-bike.</p>
        
        <h2>Unexpected Benefits</h2>
        
        <p>While Alex initially switched to an e-bike to save time on his commute, he soon discovered numerous other benefits. "The financial savings were substantial—no more gas, parking fees, or expensive maintenance." In the first year alone, Alex estimates he saved over $2,000 compared to the costs of commuting by car.</p>
        
        <p>The health benefits were equally significant. "Even though the motor helps, you're still getting exercise. My resting heart rate improved, I lost weight, and I found myself sleeping better." Alex's doctor noted improvements in his cardiovascular health at his annual check-up, despite no other changes to his lifestyle.</p>
        
        <p>Perhaps most surprisingly, Alex found that his e-bike transformed his relationship with his city. "In a car, you're isolated, just trying to get from A to B as quickly as possible. On an e-bike, you're part of the environment. I discovered shops, cafes, and parks that I'd driven past for years without noticing."</p>
        
        <h2>Challenges and Solutions</h2>
        
        <p>The transition wasn't without challenges. "Weather was my biggest concern," Alex says. "But I found that with the right gear, I could comfortably ride in most conditions." He invested in waterproof panniers for his belongings, fenders to prevent road spray, and appropriate clothing for different seasons.</p>
        
        <p>Security was another consideration. "My e-bike was a significant investment, so I made sure to research proper locking techniques and always bring my battery with me." Alex's workplace, seeing the increase in employees cycling to work, installed secure bike storage and a changing area.</p>
        
        <h2>A New Lifestyle</h2>
        
        <p>What began as a practical solution to a commuting problem has evolved into a lifestyle change for Alex. He now uses his e-bike for errands, social visits, and weekend explorations. "I still own a car, but I drive it maybe once a week now, usually for longer trips or when I need to transport something large."</p>
        
        <p>Alex has become an advocate for e-bike commuting, helping several colleagues make the switch. "The technology has reached a point where e-bikes are a viable alternative to cars for many people. They're not just recreational toys—they're practical, efficient transportation."</p>
        
        <p>Looking back on his car commuting days, Alex has no regrets about the change. "That feeling of being stuck in traffic, watching the minutes tick by—I don't miss it at all. My commute is now something I look forward to rather than dread. How many car commuters can say that?"</p>
      `,
      image:
        "https://images.unsplash.com/photo-1571333250630-f0230c320b6d?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "March 15, 2023",
      category: "Community",
      readTime: "6 min read",
      author: "Sarah Williams",
      authorRole: "Community Manager",
      authorImage: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    // Additional articles would be added here
  ];

  // Find the article that matches the ID from the URL
  const article = blogPosts.find(post => post.id === parseInt(id)) || blogPosts[0];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Article Hero */}
      <section className="pt-32 pb-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 flex items-center">
              <Link to="/blog-journal-page" className="text-primary hover:underline flex items-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Back to Journal
              </Link>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4 flex items-center">
                <span className="label text-primary">{article.category}</span>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-sm text-gray-500">{article.date}</span>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-sm text-gray-500">{article.readTime}</span>
              </div>
              
              <h1 className="heading-1 mb-6">{article.title}</h1>
              
              <div className="flex items-center mb-8">
                <img 
                  src={article.authorImage} 
                  alt={article.author}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <p className="font-medium">{article.author}</p>
                  <p className="text-sm text-gray-500">{article.authorRole}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Article Featured Image */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-lg overflow-hidden h-96 mb-8">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Article Content */}
      <section className="py-8 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.fullContent }}
            />
            
            {/* Share and Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div className="mb-4 sm:mb-0">
                  <p className="font-medium mb-2">Share this article</p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-500 hover:text-primary">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" fill="currentColor"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-primary">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10V10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.46 14.34 5.08 14.39 4.69 14.39C4.42 14.39 4.15 14.36 3.89 14.31C4.43 16 6 17.26 7.89 17.29C6.43 18.45 4.58 19.13 2.56 19.13C2.22 19.13 1.88 19.11 1.54 19.07C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z" fill="currentColor"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-primary">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-primary">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
                
                <div>
                  <p className="font-medium mb-2">Tags</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">{article.category}</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">E-Bikes</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Urban Mobility</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="heading-2 mb-12 text-center">Related Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.filter(post => post.id !== parseInt(id)).slice(0, 3).map(post => (
              <div key={post.id} className="group">
                <Link to={`/blog-journal-page/article/${post.id}`} className="block">
                  <div className="mb-6 overflow-hidden rounded-lg h-60">
                    <img
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
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/blog-journal-page" className="btn-secondary border border-gray-300 py-3 px-8 rounded-md inline-flex items-center justify-center">
              View All Articles
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ArticleDetail;
