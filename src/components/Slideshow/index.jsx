import { useRef, useState, useEffect } from 'react';

function Slideshow() {
  const images = [
    'https://picsum.photos/id/237/200/300',
    'https://picsum.photos/id/238/200/300',
    'https://picsum.photos/id/239/200/300',
    'https://picsum.photos/id/240/200/300',
  ];

  const indexRef = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(indexRef.current);
  
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    indexRef.current = (indexRef.current + 1) % images.length;
    setCurrentIndex(indexRef.current);
  };

  const handlePrev = () => {
    indexRef.current = (indexRef.current - 1 + images.length) % images.length;
    setCurrentIndex(indexRef.current);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-[300px] h-[450px] flex items-center justify-center bg-gray-200 shadow-lg">
        <img src={images[currentIndex]} alt={`Image ${currentIndex}`} className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="mt-4 flex gap-[20px]">
        <button onClick={handlePrev} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">
          Previous
        </button>
        <button onClick={handleNext} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">
          Next
        </button>
      </div>
    </div>
  );
}

export default Slideshow;
