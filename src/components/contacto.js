import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import './contacto.css';

const containerVariant = {
  hidden: {
    opacity: 0,
    y: "50vh"
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 10,
    }
  }
}

const contacto = () => {
  return (
    <motion.div
      className="contacto d-flex justify-content-center align-items-center"
      variants={containerVariant}
      initial="hidden"
      animate="show"
    >
      <h1 className="m-5">¿Desea recibir mas información?</h1>
      <div>
        <button className="btn si btn-secondary p-2 mx-5">Si, deseo que me contacten</button>
        <button className="btn btn-secondary p-2 mx-3">
          <Link to="/home" className="boton">
          No, volver al Inicio
          </Link>
        </button>
      </div> 
    </motion.div>
  )
}

export default contacto
