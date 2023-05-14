import { createContext, useState } from "react";

const QuizContext = createContext();

const QuizContextProvider = ({ children }) => {
  const [quizQuestions, setQuizQuestions] = useState([
    {
      id: 1,
      question: "Whos is the PM?",
      option1: "Rahul",
      option2: "Samay",
      option3: "Raina",
      option4: "Gaurav",
      correct_answer: "Samay",
      user_answer: "",
    },
    {
      id: 1,
      question: "Whos is the CM?",
      option1: "Modi",
      option2: "Kejri",
      option3: "Reena",
      option4: "Saurav",
      correct_answer: "MOdi",
      user_answer: "",
    },
    {
      id: 1,
      question: "What is the capital of India?",
      option1: "Delhi",
      option2: "Mumbai",
      option3: "Pune",
      option4: "Agra",
      correct_answer: "Delhi",
      user_answer: "",
    },
  ]);
  return (
    <QuizContext.Provider value={{ quizQuestions, setQuizQuestions }}>
      {children}
    </QuizContext.Provider>
  );
};

export { QuizContext, QuizContextProvider };
