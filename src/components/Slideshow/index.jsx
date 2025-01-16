import { useRef, useState, useEffect } from "react";

function Slideshow() {
  const images = [
    "https://picsum.photos/id/237/200/300",
    "https://picsum.photos/id/238/200/300",
    "https://picsum.photos/id/239/200/300",
    "https://picsum.photos/id/240/200/300",
  ];

  const indexRef = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(indexRef.current);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  function handleNext() {
    indexRef.current = (indexRef.current + 1) % images.length;
    setCurrentIndex(indexRef.current);
  };

  function handlePrev() {
    indexRef.current = (indexRef.current - 1 + images.length) % images.length;
    setCurrentIndex(indexRef.current);
  };

  return (
    <div className="w-1/2 relative mx-auto">
      <button
        onClick={handlePrev}
        className="absolute bg-white text-black top-1/2 border-2 rounded-3xl p-2"
      >
        Previous
      </button>
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex}`}
        className="w-[800px] h-[600px]"
      />
      <button
        onClick={handleNext}
        className=" absolute right-0 bg-white top-1/2 text-black border-2 rounded-2xl p-2"
      >
        Next
      </button>
    </div>
  );
}

export default Slideshow;
