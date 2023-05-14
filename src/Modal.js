import { Fragment, useRef, useState, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { QuizContext } from "./contexts/QuizContext";
import BeginQuiz from "./BeginQuiz";
import QuestionOption from "./QuestionOption";
import QuizAnswer from "./QuizAnswer";

export default function Example() {
  const [takeQuizModal, setTakeQuizModal] = useState(false);
  const {
    quizQuestions,
    setQuizQuestions,
    setCurrentQuestionIndex,
    currentQuestionIndex,
  } = useContext(QuizContext);
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

  return (
    <Transition.Root show={takeQuizModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => {
          setTakeQuizModal(false);
          setCurrentQuestionIndex(null);
        }}
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
                        <p className=" font-semibold leading-6 text-gray-900 text-lg ">
                          Interactive Quiz
                        </p>
                        <button
                          onClick={() => {
                            setTakeQuizModal(false);
                            setCurrentQuestionIndex(null);
                          }}
                        >
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

                      {currentQuestionIndex === null && <BeginQuiz />}
                      {currentQuestionIndex !== null &&
                        currentQuestionIndex > -1 &&
                        currentQuestionIndex < quizQuestions.length && (
                          <QuestionOption />
                        )}
                      {currentQuestionIndex !== null &&
                        currentQuestionIndex === quizQuestions.length && (
                          <QuizAnswer />
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
