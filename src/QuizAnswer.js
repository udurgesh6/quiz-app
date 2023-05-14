import React, { useContext } from "react";
import { QuizContext } from "./contexts/QuizContext";
import CheckImg from "./assets/check.png";
import ThumbsImg from "./assets/thumbs.gif";
const QuizAnswer = () => {
  const { quizQuestions } = useContext(QuizContext);
  console.log(quizQuestions);
  let answeredCorrectly = 0;
  quizQuestions.forEach((element) => {
    if (element.correct_answer === element.user_answer) {
      answeredCorrectly = answeredCorrectly + 1;
    }
  });
  return (
    <div
      className={`overflow-y-auto mt-3 py-3 h-[550px] w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-t-lg flex flex-col items-center px-5 bg-[url('https://cdn-apps.drimify.com/upload/media/1/4/0001/01/background-57ce7f232d927_1653923457.png')] bg-cover bg-center`}
    >
      <img src={CheckImg} height={40} width={40} />
      <p className="text-3xl text-white font-bold mt-2 mb-2">
        CONGRATULATIONS!
      </p>
      <img src={ThumbsImg} height={250} />
      <p className="text-2xl font-bold text-white mb-3 text-center mt-3">
        You Scored {answeredCorrectly}/{quizQuestions.length} (
        {answeredCorrectly * 10} pts)
      </p>
      <div>
        {quizQuestions.map((question_detail, current_index) => (
          <div className="text-md font-semibold text-white mb-2 text-left ">
            {question_detail.correct_answer === question_detail.user_answer ? (
              <p className="text-left">
                You answered question number {current_index + 1} correctly.
              </p>
            ) : (
              <p className="text-left">
                You answered question number {current_index + 1} incorrectly.
                The correct answer is {question_detail.correct_answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizAnswer;
