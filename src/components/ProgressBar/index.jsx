import React, { useRef, useState } from "react";

function ProgressBar() {
  const progressRef = useRef(0);
  const [progress, setProgress] = useState(progressRef.current);

  const handleAddProgress = () => {
    if (progressRef.current < 100) {
      progressRef.current += 10;
      setProgress(progressRef.current);
    }
  };

  const handleResetProgress = () => {
    progressRef.current = 0;
    setProgress(progressRef.current);
  };

  const getProgressColor = () => {
    if (progress >= 100) return "bg-red-500";
    if (progress >= 51) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="w-96 bg-gray-300 rounded-full h-8 mb-4">
        <div
          className={`${getProgressColor()} h-8 rounded-full`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="flex gap-4">
        <button
          onClick={handleAddProgress}
          className={`bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 ${
            progress >= 100 && "cursor-not-allowed opacity-50"
          }`}
          disabled={progress >= 100}
        >
          Add Progress
        </button>
        <button
          onClick={handleResetProgress}
          className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default ProgressBar;
