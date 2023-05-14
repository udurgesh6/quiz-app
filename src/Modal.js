import { Fragment, useRef, useState, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
import { QuizContext } from "./contexts/QuizContext";

export default function Example() {
  const [takeQuizModal, setTakeQuizModal] = useState(false);
  const { quizQuestions, setQuizQuestions } = useContext(QuizContext);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
  const cancelButtonRef = useRef(null);
  if (!takeQuizModal) {
    return (
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl w-full"
        onClick={() => setTakeQuizModal(true)}
      >
        Take this quiz
      </button>
    );
  }

  const onAnswerSelect = (answer_selected) => {
    let temp_quizQuestions = [...quizQuestions];
    temp_quizQuestions[currentQuestionIndex].user_answer = answer_selected;
    setQuizQuestions(temp_quizQuestions);
  };

  return (
    <Transition.Root show={takeQuizModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => setTakeQuizModal(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-1000"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-1000"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-1000"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className=" sm:mt-0 sm:text-left w-full ">
                      <div className="flex flex-row justify-between">
                        <Dialog.Title
                          as="h3"
                          className=" font-semibold leading-6 text-gray-900 text-lg "
                        >
                          Interactive Quiz
                        </Dialog.Title>
                        <button onClick={() => setTakeQuizModal(false)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>

                      {currentQuestionIndex === null && (
                        <div
                          className={`mt-3 h-[400px] w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-t-lg flex flex-col items-center justify-center px-5 bg-[url('https://cdn-apps.drimify.com/upload/media/1/4/0001/01/background-57ce7f232d927_1653923457.png')] bg-cover bg-center`}
                          // style={{ backgroundImage: `url{${QuizIni}}` }}
                        >
                          <p className="font-bold text-gray-200 text-lg text-center">
                            This demo presents examples of different
                            applications with each new question. The only limit
                            is your creativity!
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
                      )}
                      {currentQuestionIndex !== null &&
                        currentQuestionIndex > -1 && (
                          <div
                            className={`mt-3 h-[400px] w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-t-lg flex flex-col items-center justify-center px-5 bg-[url('https://cdn-apps.drimify.com/upload/media/1/4/0001/01/background-57ce7f232d927_1653923457.png')] bg-cover bg-center`}
                            // style={{ backgroundImage: `url{${QuizIni}}` }}
                          >
                            <p className="text-lg font-semibold text-gray-200 mb-2">
                              {quizQuestions[currentQuestionIndex].question}
                            </p>

                            <div className="flex flex-col ">
                              <div class="flex items-center mb-1">
                                <input
                                  id={
                                    quizQuestions[currentQuestionIndex].option1
                                  }
                                  type="radio"
                                  value={
                                    quizQuestions[currentQuestionIndex].option1
                                  }
                                  name="default-radio"
                                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  onClick={(e) =>
                                    onAnswerSelect(e.target.value)
                                  }
                                  checked={
                                    quizQuestions[currentQuestionIndex]
                                      .option1 ===
                                    quizQuestions[currentQuestionIndex]
                                      .user_answer
                                  }
                                />
                                <label
                                  for={
                                    quizQuestions[currentQuestionIndex].option1
                                  }
                                  class="ml-2 text-sm font-medium text-gray-200 dark:text-gray-300"
                                >
                                  {quizQuestions[currentQuestionIndex].option1}
                                </label>
                              </div>
                              <div class="flex items-center mb-1">
                                <input
                                  id={
                                    quizQuestions[currentQuestionIndex].option2
                                  }
                                  type="radio"
                                  value={
                                    quizQuestions[currentQuestionIndex].option2
                                  }
                                  name="default-radio"
                                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  onClick={(e) =>
                                    onAnswerSelect(e.target.value)
                                  }
                                  checked={
                                    quizQuestions[currentQuestionIndex]
                                      .option2 ===
                                    quizQuestions[currentQuestionIndex]
                                      .user_answer
                                  }
                                />
                                <label
                                  for={
                                    quizQuestions[currentQuestionIndex].option2
                                  }
                                  class="ml-2 text-sm font-medium text-gray-200 dark:text-gray-300"
                                >
                                  {quizQuestions[currentQuestionIndex].option2}
                                </label>
                              </div>
                              <div class="flex items-center mb-1">
                                <input
                                  id={
                                    quizQuestions[currentQuestionIndex].option3
                                  }
                                  type="radio"
                                  value={
                                    quizQuestions[currentQuestionIndex].option3
                                  }
                                  name="default-radio"
                                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  onClick={(e) =>
                                    onAnswerSelect(e.target.value)
                                  }
                                  checked={
                                    quizQuestions[currentQuestionIndex]
                                      .option3 ===
                                    quizQuestions[currentQuestionIndex]
                                      .user_answer
                                  }
                                />
                                <label
                                  for={
                                    quizQuestions[currentQuestionIndex].option3
                                  }
                                  class="ml-2 text-sm font-medium text-gray-200 dark:text-gray-300"
                                >
                                  {quizQuestions[currentQuestionIndex].option3}
                                </label>
                              </div>
                              <div class="flex items-center mb-1">
                                <input
                                  id={
                                    quizQuestions[currentQuestionIndex].option4
                                  }
                                  type="radio"
                                  value={
                                    quizQuestions[currentQuestionIndex].option4
                                  }
                                  name="default-radio"
                                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  onClick={(e) =>
                                    onAnswerSelect(e.target.value)
                                  }
                                  checked={
                                    quizQuestions[currentQuestionIndex]
                                      .option4 ===
                                    quizQuestions[currentQuestionIndex]
                                      .user_answer
                                  }
                                />
                                <label
                                  for={
                                    quizQuestions[currentQuestionIndex].option4
                                  }
                                  class="ml-2 text-sm font-medium text-gray-200 dark:text-gray-300"
                                >
                                  {quizQuestions[currentQuestionIndex].option4}
                                </label>
                              </div>
                            </div>
                            <div className="flex flex-row mt-5 justify-between w-full">
                              <button
                                class="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded mr-3"
                                disabled={currentQuestionIndex === 0}
                                onClick={() =>
                                  setCurrentQuestionIndex(
                                    currentQuestionIndex - 1
                                  )
                                }
                              >
                                Previous
                              </button>

                              <button
                                class="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
                                disabled={
                                  currentQuestionIndex ===
                                  quizQuestions.length - 1
                                }
                                onClick={() =>
                                  setCurrentQuestionIndex(
                                    currentQuestionIndex + 1
                                  )
                                }
                              >
                                Next
                              </button>
                            </div>
                          </div>
                        )}
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
