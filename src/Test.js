import jsonData from "./compononent/quiz.json";

import { useState, useEffect } from "react";
const Test = () => {
  const [Question, setQuestion] = useState([]);
  const [Answer, setCurrent] = useState([
    {
      questionAnswer: [
        { questionTest: "Elon musk", isCorrect: true },
        { questionTest: "Bill Gate", isCorrect: false },
        { questionTest: "Mark zugarbeg", isCorrect: false },
        { questionTest: "alico dangote", isCorrect: false },
      ],
    },
    {
      questionAnswer: [
        { questionTest: "import (useState) from ./react", isCorrect: false },
        { questionTest: "import [useState] from ./react", isCorrect: false },
        { questionTest: "import useState from ./react", isCorrect: false },
        { questionTest: "import {useState} from ./react", isCorrect: true },
      ],
    },
    {
      questionAnswer: [
        { questionTest: "by adding a function inside", isCorrect: false },
        { questionTest: "By useing timeout for it", isCorrect: false },
        {
          questionTest: "by adding dependence in the useEffect",
          isCorrect: true,
        },
        { questionTest: "none of the above", isCorrect: false },
      ],
    },
    {
      questionAnswer: [
        { questionTest: "uesEffect(() => {})", isCorrect: false },
        { questionTest: "uesEffect(() => {},[])", isCorrect: true },
        { questionTest: "uesEffect() => {})", isCorrect: false },
        { questionTest: "uesEffect([], () => {})", isCorrect: false },
      ],
    },
    {
      questionAnswer: [
        { questionTest: "create-react-app filename", isCorrect: false },
        { questionTest: "react-app-create filename", isCorrect: false },
        { questionTest: "npm create-react-app filename", isCorrect: false },
        { questionTest: "npx create-react-app filename", isCorrect: true },
      ],
    },
  ]);
  const [isPending, setIsPending] = useState(true);
  const [c, setCurrentQuestion] = useState(0);
  const [ans, setCurrentAnswer] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      fetch(jsonData)
        .then((res) => {
          if (!res.ok) {
            throw Error("please check ur network and try again");
          }
          return res.json();
        })
        .then((data) => {
          setQuestion(data);
          setIsPending(false);
        })
        .catch((err) => {
          // console.log(err.mesage);
        });
    }, 1000);
  }, []);

  const handleClick = () => {
    const nextquest = c + 1;
    const nextans = ans + 1;
    if (nextquest < Question.length && nextans < Answer.length) {
      setCurrentQuestion(nextquest);
      setCurrentAnswer(nextans);
    } else {
      alert("u don reach");
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setCurrentAnswer(0);
  };

  //Destructuring Assignmnent

  const [questionOne] = [jsonData];

  return (
    <div>
      {/* {isPending && <h2>loading...</h2>} */}
      {/* {console.log(questionData)} */}
      <h1>{/* {questionText} */}</h1>
      {Question && (
        <div>
          <div>
            <h1>{/* {questionAnswer.questionTest} */}</h1>
          </div>
        </div>
      )}
      ;<button onClick={handleClick}>click me</button>
      <button onClick={handleReset}>Reset me</button>
    </div>
  );
};

export default Test;
