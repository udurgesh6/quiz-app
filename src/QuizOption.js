import React from "react";
const QuizOption = ({ option, user_answer, onAnswerSelect }) => {
  return (
    <div class="flex items-center mb-1">
      <input
        id={option}
        type="radio"
        value={option}
        name="default-radio"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        onClick={(e) => onAnswerSelect(e.target.value)}
        checked={option === user_answer}
      />
      <label
        for={option}
        class="ml-2 text-sm font-medium text-gray-200 dark:text-gray-300"
      >
        {option}
      </label>
    </div>
  );
};

export default QuizOption;
