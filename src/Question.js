import React from "react";
import "./Question.css";
const Question = ({
  questionDetails,
  currentQuestionIndex,
  setQuestionDetails,
  setCurrentQuestionIndex,
}) => {
  const answerTheQuestion = (option_rec) => {
    let temp_questionDetails = [...questionDetails];
    temp_questionDetails[currentQuestionIndex].user_answer = option_rec;
    setQuestionDetails(temp_questionDetails);
  };
  const submitQuiz = () => {};
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p>{questionDetails[currentQuestionIndex].question}</p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "300px",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <button
          onClick={() =>
            answerTheQuestion(questionDetails[currentQuestionIndex].option1)
          }
          style={{
            backgroundColor:
              questionDetails[currentQuestionIndex].user_answer ===
              questionDetails[currentQuestionIndex].option1
                ? "green"
                : "yellow",
          }}
        >
          {questionDetails[currentQuestionIndex].option1}
        </button>
        <button
          onClick={() =>
            answerTheQuestion(questionDetails[currentQuestionIndex].option2)
          }
          style={{
            backgroundColor:
              questionDetails[currentQuestionIndex].user_answer ===
              questionDetails[currentQuestionIndex].option2
                ? "green"
                : "yellow",
          }}
        >
          {questionDetails[currentQuestionIndex].option2}
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "300px",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <button
          onClick={() =>
            answerTheQuestion(questionDetails[currentQuestionIndex].option3)
          }
          style={{
            backgroundColor:
              questionDetails[currentQuestionIndex].user_answer ===
              questionDetails[currentQuestionIndex].option3
                ? "green"
                : "yellow",
          }}
        >
          {questionDetails[currentQuestionIndex].option3}
        </button>
        <button
          onClick={() =>
            answerTheQuestion(questionDetails[currentQuestionIndex].option4)
          }
          style={{
            backgroundColor:
              questionDetails[currentQuestionIndex].user_answer ===
              questionDetails[currentQuestionIndex].option4
                ? "green"
                : "yellow",
          }}
        >
          {questionDetails[currentQuestionIndex].option4}
        </button>
      </div>

      <button
        onClick={() => {
          if (currentQuestionIndex >= questionDetails.length - 1) {
            submitQuiz();
          } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
          }
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Question;
