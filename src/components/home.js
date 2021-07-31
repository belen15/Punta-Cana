import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import './home.css';
import '../App.css';

const tituloVariant = {
  hidden: {
   y: "-200",
   color: "transparent"
  },
  show: {
    y: "300px",
    color:"#fff",
    transition: {
      duration: 1,
      ease: 'easeIn',
    }
  }
}
const flechaVariant = {
  hidden: {
    y: 500,
  },
  show: {
    y: 520,
    transition: {
      duration: 1,
      ease:'easeIn',
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
}


const Home = () => {
  return (
    <motion.div className="home">
      <motion.h1
        className="titulo"
        variants={tituloVariant}
        initial="hidden"
        animate="show">
          Hotel Punta Cana
      </motion.h1>
      <motion.h2
        variants={flechaVariant}
        initial="hidden"
        animate="show"
      
      >
        <Link to="/about" className="link">
        &#8675;</Link>
        
        
        
      </motion.h2>
      
    </motion.div>
  )
}

export default Home;
