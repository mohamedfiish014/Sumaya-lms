import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const SlidesImage = () => {
  const courses = [
    {
      name: "Web Development",
      title: "Learn the essentials of web development",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5eH2V8OKWHpH-1U2KbS0KSfPGG1ESHjx_FA&s"
    },
    {
      name: "Graphic Design",
      title: "Become a professional graphic designer",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtA4W-HNaYtjVqDaaQOm68HTM4dJap2GxM4w&s"
    },
    {
      name: "Forex",
      title: "Master the art of Forex trading",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbgJz_bBUNk9DyQaDnThFoGxUJG5uLR3vGug&s"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Move every 4 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? courses.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === courses.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-10">
      <div className="relative h-80 md:h-96 overflow-hidden rounded-lg shadow-lg">
        {courses.map((course, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-500 ${index === currentIndex ? 'transform translate-x-0' : 'transform translate-x-full'}`}
          >
            <img src={course.image} alt={course.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0  bg-opacity-50 flex flex-col items-center justify-center p-4">
              <h3 className="text-white text-3xl font-bold mb-2 bg-blue-500">{course.name}</h3>
              <p className="text-white text-xl text-center">{course.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button onClick={prevSlide} className="text-white bg-gray-800 bg-opacity-75 rounded-full p-2 hover:bg-opacity-100">
          <FaChevronLeft className="w-5 h-5" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <button onClick={nextSlide} className="text-white bg-gray-800 bg-opacity-75 rounded-full p-2 hover:bg-opacity-100">
          <FaChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default SlidesImage;
