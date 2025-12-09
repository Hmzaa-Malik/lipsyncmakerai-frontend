import React from "react";
import { useState } from "react";
import ReactPlayer from "react-player";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-black via-green-700 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight">Create AI Videos in Seconds</h1>
        <p className="mt-4 text-lg">Lip-sync, avatars, dubbing, editing, and more</p>
        <div className="mt-6">
          <a
            href="/signup"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out"
          >
            Get Started for Free
          </a>
        </div>
      </div>

      <div className="mt-10">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Example URL, replace with your demo video URL
          playing
          muted
          loop
          width="100%"
          height="auto"
        />
      </div>
    </section>
  );
};

export default Hero;
