import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import QuizIni from "./assets/quiz_initial.png";
import {
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
export default function Example({ takeQuizModal, setTakeQuizModal }) {
  const cancelButtonRef = useRef(null);

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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                      <Dialog.Title
                        as="h3"
                        className=" font-semibold leading-6 text-gray-900 text-lg "
                      >
                        Interactive Quiz
                      </Dialog.Title>
                      <div
                        className={`mt-3 h-[400px] w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-t-lg flex flex-col items-center justify-center px-5 bg-[url('https://cdn-apps.drimify.com/upload/media/1/4/0001/01/background-57ce7f232d927_1653923457.png')] bg-cover bg-center`}
                        // style={{ backgroundImage: `url{${QuizIni}}` }}
                      >
                        <p className="font-semibold text-gray-200 text-md">
                          This demo presents examples of different applications
                          with each new question. The only limit is your
                          creativity!
                        </p>
                        <button className="mt-4 bg-gradient-to-r from-gray-100 to-gray-200 text-black font-semibold py-2 px-4 rounded-xl w-full">
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
