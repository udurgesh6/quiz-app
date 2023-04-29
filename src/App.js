import "./App.css";
import { useState, useEffect } from "react";
import Question from "./Question";
function App() {
  const [questionDetails, setQuestionDetails] = useState([
    {
      question: "Who is the PM?",
      id: 1,
      option1: "Modi",
      option2: "Rahul",
      option3: "Samay",
      option4: "Sonia",
      correct_answer: "Modi",
      user_answer: "",
    },
    {
      question: "What is the capital?",
      id: 2,
      option1: "Delhi",
      option2: "Mumbai",
      option3: "Pune",
      option4: "Bangalore",
      correct_answer: "Delhi",
      user_answer: "",
    },
    {
      question: "What is national animal?",
      id: 2,
      option1: "Tiger",
      option2: "Lion",
      option3: "Cat",
      option4: "Dog",
      correct_answer: "Tiger",
      user_answer: "",
    },
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
  return (
    <div className="App">
      {currentQuestionIndex === null && (
        <div>
          <p>Are you interested in taking the quiz?</p>
          <button onClick={() => setCurrentQuestionIndex(0)}>Yes</button>
        </div>
      )}
      {currentQuestionIndex !== null && (
        <Question
          questionDetails={questionDetails}
          currentQuestionIndex={currentQuestionIndex}
          setQuestionDetails={setQuestionDetails}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
        />
      )}
      {/* {currentQuestionIndex !== null &&
        currentQuestionIndex === questionDetails.length && (
          <div>Your score</div>
        )} */}
    </div>
  );
}

export default App;
