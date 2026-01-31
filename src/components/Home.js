import React, { useEffect } from 'react';
import { Link } from "react-router-dom"; 
import { FaPhone, FaMapMarkerAlt, FaFlask, FaStar, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaIceCream } from "react-icons/fa"

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } },
};

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="home">
      
      {/* Hero Section */}
      <motion.div variants={fadeInUp} className="hero">
        <h1>𝒟𝒜𝑅 𝒜𝑀𝒰𝐿 𝐼𝒞𝐸 𝒞𝑅𝐸𝒜𝑀</h1>
        <p>Real milk | No frozen dessert | Trusted by Thousands</p>
        <div className="hero-buttons">
          <a href="https://wa.me/916006135988?text=Hi,%20I%20would%20like%20to%20order%20an%20icecream." className="btn primary" target="_blank" rel="noopener noreferrer">
            Click to order 🍨
          </a>
          <a href="https://maps.app.goo.gl/rVbBSrb3CXVKMGnW6" className="btn secondary" target="_blank" rel="noopener noreferrer">
              Locate Us📍
          </a>
        </div>
      </motion.div>

      {/* About Section */}
      <motion.div whileInView="visible" variants={fadeInUp} initial="hidden" className="about">
        <h2>About DAR AMUL ICE CREAM:</h2>
        <h2>Dar Amul Ice Cream Factory is dedicated to crafting delicious, high-quality ice creams using carefully selected ingredients and modern production techniques. Inspired by freshness, taste, and tradition, we focus on delivering rich flavors and a smooth, creamy experience in every bite. Our goal is simple: to spread happiness through ice cream while maintaining hygiene, consistency, and customer trust at every step.</h2>
        <Link to="/about" className="btn primary">Learn More</Link>
      </motion.div>

      {/* Services Section */}
      <motion.div whileInView="visible" variants={fadeInUp} initial="hidden" className="services">
        <h2>𝙾𝚄𝚁 𝙿𝙾𝙿𝚄𝙻𝙰𝚁 𝙸𝙲𝙴 𝙲𝚁𝙴𝙰𝙼𝚂 🍨:</h2>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" className="services-grid">
          {["Vanilla Classic", "Choco Delight", "Strawberry bliss", "Butterscotch Crunch", "Mango Magic", "Pista Kulfi", "Chocolate Chip"].map((test, index) => (
            <motion.div key={index} variants={fadeInUp} className="service-card">
              <FaIceCream className="service-icon" />
              <p>{test}</p>
            </motion.div>
          ))}
        </motion.div>
        <Link to="/services" className="view-more">View more info👉</Link>
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.div whileInView="visible" variants={fadeInUp} initial="hidden" className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" className="why-grid">
          {[
            { icon: <FaFlask />, title: "No Sweetner" },
            { icon: <FaUsers />, title: "Trusted by Thousands" },
            { icon: <FaStar />, title: "Fast Delivery" },
            { icon: <FaPhone />, title: "Customer Support" },
          ].map((item, index) => (
            <motion.div key={index} variants={fadeInUp} className="why-card">
              <div className="why-icon">{item.icon}</div>
              <p>{item.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.section whileInView="visible" variants={fadeInUp} initial="hidden" className="testimonials">
        <h2>What Our Customers Say</h2>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" className="testimonials-grid">
          {[
            { text: "Great service and very professional!", name: "Ahsaan Shafi" },
            { text: "The staff is friendly and efficient.", name: "Messi" },
            { text: "Highly recommended for better taste!", name: "Cristiao Ronaldo" },
            { text: "Affordable and good taste.", name: "Shah Rukh Khan" },
          ].map((review, index) => (
            <motion.div key={index} variants={fadeInUp} className="testimonial-card">
              <p>"{review.text}"</p>
              <div className="testimonial-footer">
                <span>- {review.name}</span>
                <span className="stars">⭐⭐⭐⭐⭐</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Contact Section */}
      <motion.div whileInView="visible" variants={fadeInUp} initial="hidden" className="contact-home">
        <h2>Get in Touch</h2>
        <p>For inquiries, contact us:</p>
        <div className="contact-buttons">
          <a href="tel:+91600135988" className="btn primary">
            <FaPhone /> Call Us
          </a>
          <a href="https://maps.app.goo.gl/rVbBSrb3CXVKMGnW6"target="_blank" rel="noopener noreferrer" className="btn primary">
            <FaMapMarkerAlt /> Find Us
          </a>
        </div>
      </motion.div>

    </motion.div>
  );
};

export default Home;
