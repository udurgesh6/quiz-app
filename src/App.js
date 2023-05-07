import { useState, useEffect } from "react";
import Quiz from "./assets/quiz.png";
import Modal from "./Modal";
function App() {
  const [takeQuizModal, setTakeQuizModal] = useState(false);
  return (
    <div className="h-screen flex flex-col items-center justify-center ">
      <div>
        <img src={Quiz} className="h-[300px]" />
        <p className="text-gray-700 text-xl font-bold text-center mb-2">
          Interactive Quiz
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl w-full"
          onClick={() => setTakeQuizModal(true)}
        >
          Take this quiz
        </button>
        <Modal
          takeQuizModal={takeQuizModal}
          setTakeQuizModal={setTakeQuizModal}
        />
      </div>
    </div>
  );
}

export default App;
