import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className="services-page">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        Our Ice creams:
      </motion.h2>

      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        At <strong>DAR AMUL ICE CREAM FACTORY</strong>you will get
      </motion.p>

      <div className="services-list">
        {[
          { title: '1. Vanilla Classic',desc: "A smooth and creamy classic made with rich milk and natural vanilla flavor, offering a timeless taste loved by all ages" },
          { title: '2. Chocolate Delight',desc: "A rich and indulgent ice cream crafted with deep chocolate flavor, delivering a perfectly balanced sweet and cocoa-rich experience."},
          { title: '3. Strawberry Bliss', desc: 'Fresh and fruity strawberry ice cream with a refreshing taste and smooth texture, made for those who love light and vibrant flavors.' },
          { title: '4. Butterscotch Crunch', desc: 'Creamy butterscotch ice cream blended with crunchy caramel bits, creating a sweet and satisfying bite every time.' },
          { title: '5. Mango Magic', desc: 'A tropical favorite made with ripe mango flavor, offering a refreshing and juicy taste that feels like summer in every scoop' },
          { title: 'Family pack', desc: '(Chocolate/Butterscotch)' },
          { title: 'Cone', desc: '(Chocolate/Butterscotch/Vanilla).' },
          { title: 'Lemon', },
          { title: 'Choco Feast', desc: 'Coated with rich peanuts' },
          { title: 'And many more!!!!', desc: 'contact us to get the menu right now' },
        ].map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
