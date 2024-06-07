import React from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";
import logo1 from '../public/logo1.jpg'; // Import your logo images
import logo2 from '../public/logo2.png';
import logo3 from '../public/logo3.png';
import logo from '../public/logo.png';
import logo5 from '../public/logo5.jpg';

const logos = [logo1, logo2, logo3, logo, logo5]; // Array of logo images

const MovingLogos = () => {
  const gap = 20; // Adjust the gap between logos
  const logoWidth = 100; // Adjust the width of each logo
  const totalGap = gap * (logos.length - 1); // Calculate total gap between logos
  const animationDuration = 10; // Adjust animation duration in seconds
  const animationDelay = animationDuration / logos.length; // Calculate delay for each logo

  return (
    <div className="mt-8 shadow">
      <div className=" mb-8 flex justify-center items-center"><h1 className="mb-8 text-3xl text-bold">Our Customers</h1></div>
      <div className="relative overflow-hidden w-full h-80">
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            initial={{ x: -600 }} // Initial position with sequential order and gap between logos
            animate={{ x: "100%" ,transition: { duration: animationDuration, ease: "linear", repeat: Infinity, delay: index * animationDelay } }} // Total duration includes the time to cover the gap
            className="absolute top-0 left-0 w-full h-40" // Increased vertical space for each logo
            style={{ zIndex: index }}
          >
            <Image
              src={logo}
              layout="fill"
              objectFit="contain"
              alt="Logo"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MovingLogos;
