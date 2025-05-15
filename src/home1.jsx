import React from 'react'
import bgImage from './assets/bgpic.jpg';

export default function () {
  return (
    <div
    className="bg-cover bg-center"
    style={{ backgroundImage: `url(${bgImage})`, height: '500px' }} // Inline style for custom height
  >
    <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
      <h1 className="text-white text-4xl italic">
        NET<span className="text-yellow-500">IT</span>solTion
      </h1>
      <p className="text-white text-2xl italic text-justify max-w-xl">
        At NetSolution, we specialize in transforming ideas into powerful digital solutions. As a forward-thinking software house, we deliver customized web
        applications, mobile apps, and enterprise software tailored to meet your business goals. Our team of experienced developers, designers, and project managers is committed to innovation, quality, and client success.
      </p>
    </div>
  </div>
  );
}
