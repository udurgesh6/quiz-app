import { useState, useEffect, useContext } from "react";
import Quiz from "./assets/quiz.png";
import Modal from "./Modal";
import { QuizContextProvider } from "./contexts/QuizContext";
function App() {
  return (
    <QuizContextProvider>
      <div className="h-screen flex flex-col items-center justify-center ">
        <div>
          <img src={Quiz} className="h-[300px]" />
          <p className="text-gray-700 text-xl font-bold text-center mb-2">
            Interactive Quiz
          </p>
          <Modal />
        </div>
      </div>
    </QuizContextProvider>
  );
}

export default App;
