import React, { useState } from 'react';
import { QuizData } from '../qdata';

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);

  const handleAnswer = (answer) => {
    setUserAnswers([...userAnswers, answer]);
    if (answer === QuizData[currentQuestion].answer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div class='m-0 p-0 row justify-content-center'>
      <h2 class="text-center col-6 m-0 text-primary">Quiz App</h2>
      <div class="border border-warning rounded-2 m-3 p-3 col-md-9">
      {currentQuestion < QuizData.length ? (
        <div>
          <h3>{QuizData[currentQuestion].id}. {QuizData[currentQuestion].question}</h3>
          {QuizData[currentQuestion].options.map((option, index) => (
            <button  class=" btn btn-primary m-1"key={index} onClick={() => handleAnswer(option)}>
             {option}
            </button>

          ))}
        </div>
      ) : (
        <div>
          <h2>Your score is {score} out of {QuizData.length}</h2>
        </div>
      )}
      </div>
      </div>
  );
}

export default QuizApp;
