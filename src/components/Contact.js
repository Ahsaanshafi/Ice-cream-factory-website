import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <div className="contact">
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        At <strong>DAR AMUL ICE CREAM</strong>,Real ice cream.
      </motion.p>

      <motion.div
        className="contact-info"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <motion.div variants={fadeIn}>
          📍 <strong>Our Location:</strong>
          <a href="https://maps.app.goo.gl/VmjswYCQ8BugbGne7" target="_blank" rel="noopener noreferrer">
            Dar Amul ice cream ,TRAL ,PULWAMA, Jammu and Kashmir (192123)
          </a>
        </motion.div>

        <motion.div variants={fadeIn}>
          📞 <strong>Phone:</strong>
          <a href="tel:+91 6006135988"> +91 6006135988</a>
        </motion.div>

        <motion.div variants={fadeIn}>
          📧 <strong>Email:</strong>
          <a href="ahsaanshafi32gmail.com">ahsaanshafi32gmail.com</a>
        </motion.div>

        <motion.div variants={fadeIn}>
          🕒 <strong>Working Hours:</strong>
          <p>Monday - Sunday: <strong>8am - 6pm</strong></p>
        </motion.div>
          🏠 <strong>Home delivery available:</strong>
          <p>Get your favourite ice cream in just 10 minutes. <br /><strong>Call or Whatsapp us for delivery!</strong></p>

        <motion.div variants={fadeIn}>
          📲 <strong>Stay Connected</strong>
          <p></p>
         
        </motion.div>
      </motion.div>

      <motion.h3
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        Feel free to call, visit, or drop us a message during working hours. Your our priority!
      </motion.h3>
    </div>
  );
};

export default Contact;
