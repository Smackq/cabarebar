'use client'

import { useState } from "react";
import Image from "next/image";
const slides = [
  { type: "image", src: "/images/main/block1img1.jpg" },
  { type: "image", src: "/images/main/block1img2.jpg" },
];

export function SectionImage() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="lg:mt-6">
    <div className="relative w-full max-w-5xl mx-auto  ">
      <div className="mx-6">
        {/* Слайды */}
        <div className="relative h-64 md:h-96 overflow-hidden rounded-lg">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === current ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              {slide.type === "image" ? (
                <Image
                                  src={slide.src}
                                  alt={`Slide ${index + 1}`}
                                  width={1000}
                                  height={1000}
                                  className="w-full h-full object-cover"
                                />
              ) : (
                <video
                  src={slide.src}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              )}
            </div>
          ))}
        </div>

        {/* Контролы */}
        <div className="flex justify-center items-center pt-4 space-x-4">
          <button
            type="button"
            onClick={prevSlide}
            className="flex justify-center items-center p-2 bg-gray-800 rounded-full hover:bg-gray-700 text-white"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>

          <button
            type="button"
            onClick={nextSlide}
            className="flex justify-center items-center p-2 bg-gray-800 rounded-full hover:bg-gray-700 text-white"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  );
}
