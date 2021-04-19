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
      question: "He won his first Grammy award in 2015 for what song?",
      answer: "Where Are Ü Now",
    },
    {
      id: 8,
      question: "What was the profession of Justin’s father?",
      answer: "MMA fighter",
    },
    {
      id: 9,
      question: "What was the first single released from his album, “Purpose?”",
      answer: "What Do You Mean",
    },

    {
      id: 10,
      question: "What is Justin’s star sign?",
      answer: "Pisces",
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
      <h1>Are you a true Belieber?</h1>
      <p className="hover-to-reveal">
        Questons change every 10 seconds, hover to reveal answer
      </p>

      <h3 id="question">{facts[index].question}</h3>

      {/* <span className="answer">hover over to reveal answer: </span> */}
      <p id="reveal-answer"> {facts[index].answer}</p>
    </div>
  );
}

export default Quiz;
