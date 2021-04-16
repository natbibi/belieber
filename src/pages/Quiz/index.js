import React, { useEffect, useState } from "react";
import "./style.css";

function Quiz() {
  // const [showAnswer, setShowAnswer ] = useState();
  // const [questions, setQuestions ] = useState()
  const [index, setIndex] = useState(0);

  const facts = [
    {
      id: 1,
      question: "What is Justin's half-brother's name?",
      answer: "Jaxon",
    },
    {
      id: 2,
      question: "Who did Justin date before Selena?",
      answer: "Jasmine Villegas",
    },
    {
      id: 3,
      question:
        "Which singer also wanted to mentor Justin, although Usher ultimately won out?",
      answer: "Justin Timberlake",
    },
    {
      id: 4,
      question: "Which Canadian city is Justin from?",
      answer: "Stratford",
    },
    {
      id: 5,
      question:
        "Justin has a diamond necklace with a pendant of which cartoon character?",
      answer: "Stewie from Family Guy",
    },
    {
      id: 6,
      question: "Which TV show did Justin guest star in?",
      answer: "C.S.I",
    },
    {
      id: 7,
      question: "Which TV show did Justin guest star in?",
      answer: "C.S.I",
    },
    {
      id: 8,
      question: "Which TV show did Justin guest star in?",
      answer: "C.S.I",
    },
    {
      id: 9,
      question: "Which TV show did Justin guest star in?",
      answer: "C.S.I",
    },

    {
      id: 10,
      question: "Which TV show did Justin guest star in?",
      answer: "C.S.I",
    },
  ];

  useEffect(() => {
    function getFact() {
      setIndex(Math.floor(Math.random() * 10));
    }

    getFact();

    const stream = setInterval(getFact, 10000);
    return () => clearInterval(stream);
  }, []);

  return (
    <div>
      <h1>How well do you know JB?</h1>

      <h3 id="question">{facts[index].question}</h3>
      <p id="reveal-answer"> {facts[index].answer}</p>
    </div>
  );
}

export default Quiz;
