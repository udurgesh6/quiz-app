import React, { useContext } from "react";
import { QuizContext } from "./contexts/QuizContext";
import QuizOption from "./QuizOption";
import ProgressBar from "react-bootstrap/ProgressBar";
import CheckImg from "./assets/check.png";

const QuestionOption = () => {
  const {
    quizQuestions,
    setQuizQuestions,
    setCurrentQuestionIndex,
    currentQuestionIndex,
  } = useContext(QuizContext);
  const onAnswerSelect = (answer_selected) => {
    let temp_quizQuestions = [...quizQuestions];
    temp_quizQuestions[currentQuestionIndex].user_answer = answer_selected;
    setQuizQuestions(temp_quizQuestions);
  };
  return (
    <div
      className={`mt-3 h-[400px] w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-t-lg flex flex-col items-center justify-center px-5 bg-[url('https://cdn-apps.drimify.com/upload/media/1/4/0001/01/background-57ce7f232d927_1653923457.png')] bg-cover bg-center`}
      // style={{ backgroundImage: `url{${QuizIni}}` }}
    >
      <img src={CheckImg} height={40} width={40} className="mb-3" />
      <ProgressBar
        now={((currentQuestionIndex + 1) / quizQuestions.length) * 100}
        label={`${currentQuestionIndex + 1}/${quizQuestions.length}`}
        style={{ width: "100%" }}
        variant="success"
        animated={true}
      />
      <p className="text-lg font-semibold text-gray-200 mb-2 mt-3">
        {quizQuestions[currentQuestionIndex].question}
      </p>

      <div className="flex flex-col ">
        <QuizOption
          option={quizQuestions[currentQuestionIndex].option1}
          user_answer={quizQuestions[currentQuestionIndex].user_answer}
          onAnswerSelect={onAnswerSelect}
        />
        <QuizOption
          option={quizQuestions[currentQuestionIndex].option2}
          user_answer={quizQuestions[currentQuestionIndex].user_answer}
          onAnswerSelect={onAnswerSelect}
        />
        <QuizOption
          option={quizQuestions[currentQuestionIndex].option3}
          user_answer={quizQuestions[currentQuestionIndex].user_answer}
          onAnswerSelect={onAnswerSelect}
        />
        <QuizOption
          option={quizQuestions[currentQuestionIndex].option4}
          user_answer={quizQuestions[currentQuestionIndex].user_answer}
          onAnswerSelect={onAnswerSelect}
        />
      </div>
      <div className="flex flex-row mt-5 justify-between w-full">
        <button
          class="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded mr-3"
          disabled={currentQuestionIndex === 0}
          onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
        >
          Previous
        </button>

        <button
          class="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
        >
          {currentQuestionIndex === quizQuestions.length - 1
            ? "Submit"
            : "Next"}
        </button>
      </div>
    </div>
  );
};

export default QuestionOption;
