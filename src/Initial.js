import React from "react";
import Button from "react-bootstrap/Button";
// sm md lg xl 2xl 3xl
const Initial = ({ setCurrentQuestionIndex }) => {
  return (
    <div className="border border-indigo-600 h-[200px] p-3 bg-white rounded-md flex flex-col items-center justify-center">
      <p className="text-gray-700 font-bold mb-3 text-md">
        Are you interested in taking the quiz?
      </p>
      <button
        class="bg-blue-500 hover:bg-blue-600 text-white font-semibold hover:font-bold py-2 px-4 rounded animate-bounce"
        onClick={() => setCurrentQuestionIndex(0)}
      >
        Yes
      </button>
    </div>
  );
};

export default Initial;
