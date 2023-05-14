import React, { useContext } from "react";
import { QuizContext } from "./contexts/QuizContext";
import {
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

const BeginQuiz = () => {
  const { setCurrentQuestionIndex } = useContext(QuizContext);
  return (
    <div
      className={`mt-3 h-[400px] w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-t-lg flex flex-col items-center justify-center px-5 bg-[url('https://cdn-apps.drimify.com/upload/media/1/4/0001/01/background-57ce7f232d927_1653923457.png')] bg-cover bg-center`}
      // style={{ backgroundImage: `url{${QuizIni}}` }}
    >
      <p className="font-bold text-gray-200 text-lg text-center">
        This demo presents examples of different applications with each new
        question. The only limit is your creativity!
      </p>
      <button
        className="mt-4 bg-gradient-to-r from-gray-100 to-gray-200 text-black font-semibold py-2 px-4 rounded-xl w-[70%]"
        onClick={() => setCurrentQuestionIndex(0)}
      >
        Begin Quiz
      </button>
      <div className=" w-full mt-4 flex flex-row items-center justify-between">
        <div className="flex flex-row">
          <LinkedinShareButton
            source="https://www.linkedin.com/in/durgeshupadhyay/"
            url="https://www.linkedin.com/in/durgeshupadhyay/"
          >
            <LinkedinIcon round={true} />
          </LinkedinShareButton>
          <TwitterShareButton url="https://twitter.com/udurgesh6">
            <TwitterIcon round={true} />
          </TwitterShareButton>
        </div>
        <p className="text-gray-200">Made with Quizify</p>
      </div>
    </div>
  );
};

export default BeginQuiz;
