import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className="about">
      <motion.p 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={fadeIn}
      >
        Welcome to <strong>Dar amul ice cream</strong>, Tral’s trusted ice cream factory, 
        dedicated to providing real milk real ice cream.
      </motion.p>

      <motion.ul className="about-li">
        {[
          " 1. Who we are : Dar Amul Ice Cream Factory is a dedicated ice cream manufacturing brand focused on creating high-quality, rich, and creamy ice creams. We believe in using carefully selected ingredients, maintaining strict hygiene standards, and following reliable production practices to ensure consistency, freshness, and great taste in every product ",
          "2. What we do : We craft a wide range of ice creams by combining modern technology with a passion for flavor and quality. Our goal is to deliver delicious, refreshing treats that bring happiness to our customers while building long-term trust through quality, care, and commitment.",
        ].map((test, index) => (
          <motion.li 
            key={index} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeIn}
          >
            {test}
          </motion.li>
        ))}
      </motion.ul>

      <motion.div 
        className="more-info"
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={fadeIn}
      >
        <div>
          🕒 <strong>Working Hours:</strong>
          <p>Monday - Sunday: <strong>8am - 6pm</strong></p>
        </div>

        <div>
          🏠 <strong>Home delivery Available:</strong>
          <p>We do home delivery around 30 kms from factory.</p>
        </div>
      </motion.div>

      <motion.p 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={fadeIn}
      >
        Dar Amul , prioritize customer care by delivering as soon as possible .
      </motion.p>

      <motion.h3 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={fadeIn}
      >
        Contact  us today and experience accuracy you can trust!
      </motion.h3>
    </div>
  );
};

export default About;
