import React from "react"
import { Link } from 'react-router-dom';
import HeroImage from '../assets/hero-image.png';

export default function Hero() {
  
  return (
    <section className="w-screen h-screen flex flex-col md:flex-row items-center justify-between bg-white dark:bg-gray-900 px-6 md:px-20 overflow-hidden">
  {/* Text Section */}
  <div className="flex flex-col items-center md:items-start justify-center w-full md:w-1/2 space-y-6">
    <h1 className="text-4xl md:text-5xl font-extrabold text-center md:text-left text-gray-900 dark:text-white">
      MINDTYPE
    </h1>
    <p className="text-lg md:text-xl text-center md:text-left text-gray-700 dark:text-gray-300">
      A blogging platform where every story finds its space. <br />
      Designed with accessibility at its core, so your voice <br />
      reaches everyone, everywhere. 
    </p>
    <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
      <Link
        to="/signup"
        className="w-60 px-4 py-3 bg-blue-600 text-white text-center rounded-lg hover:bg-blue-700 transition"
      >
        SIGNUP
      </Link>
      <Link
        to="./create-post"
        className="w-60 px-4 py-3 bg-blue-600 text-white text-center rounded-lg hover:bg-blue-700 transition"
      >
        create post
      </Link>
    </div>
  </div>

  {/* Image Section */}
  <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
    <div className="max-w-md w-full h-auto">
      <img src={HeroImage} alt="Hero" className="w-full h-full object-contain" />
    </div>
  </div>
</section>


  );
}