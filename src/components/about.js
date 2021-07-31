import React from 'react';
import './about.css';
import '../App.css';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { spring } from 'react-motion';
import Imagen from './img/hotel2.jpg';

const flechaVariant = {
  hidden: {
    y: 0
  },
  show: {
    y: 20,
    transition: {
      duration: 1,
      ease: 'easeIn',
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
}

const containerVariant = {
  hidden: {
    opacity: 0,
    y: "50vh"
  },
  show: {
    opacity: 1,
    y:0,
    transition: {
      type: "spring",
      stiffness: 10,
    }
  }
}

const containerVariantDos = {
  hidden: {
    opacity: 0,
    x: "30vh",
    y: "-30vh",
  },
  show: {
    opacity: 1,
    x: 0,
    y:0,
    transition: {
      type: "spring",
      stiffness: 10,
    }
  }
}

const About = () => {
  return (
    <motion.div 
      className="about"
      variants={containerVariant}
      initial="hidden"
      animate="show"
    >
      <h2>About</h2>
      <div className="descripcion">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed risus ultricies tristique nulla aliquet enim tortor at. Consectetur libero id faucibus nisl tincidunt eget. In nulla posuere sollicitudin aliquam ultrices sagittis. Aliquam malesuada bibendum arcu vitae elementum. Orci a scelerisque purus semper eget duis at tellus.</p>
        <motion.div
          variants={containerVariantDos}
          initial="hidden"
          animate="show"
          >
          <img src={Imagen}/>

        </motion.div>
        
      </div>
      
      
      <motion.h2
        variants={flechaVariant}
        initial="hidden"
        animate="show"

      >
        <Link to="/contacto" className="link">
          &#8675;</Link>



      </motion.h2>
    </motion.div>
  )
}

export default About;