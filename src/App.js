import React, { useState } from "react";
import "./App.css";

function App() {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "Which one of the following river flows between Vindhyan and Satpura ranges?",
      options: [
        { id: 0, text: "Netravati", isCorrect: false },
        { id: 1, text: "Mahanadi", isCorrect: false },
        { id: 2, text: "Son", isCorrect: false },
        { id: 3, text: "Narmada", isCorrect: true },
      ],
    },
    {
      text: "The Central Rice Research Station is situated in?",
      options: [
        { id: 0, text: "Cuttack", isCorrect: true },
        { id: 1, text: "Chennai", isCorrect: false },
        { id: 2, text: "Bangalore", isCorrect: false },
        { id: 3, text: "Quilon", isCorrect: false },
      ],
    },
    {
      text: "Who among the following wrote Sanskrit grammar?",
      options: [
        { id: 0, text: "Panini", isCorrect: true },
        { id: 1, text: "Kalidasa", isCorrect: false },
        { id: 2, text: "Charak", isCorrect: false },
        { id: 3, text: "Aryabhatt", isCorrect: false },
      ],
    },
    {
      text: "The metal whose salts are sensitive to light is?",
      options: [
        { id: 0, text: "Silver", isCorrect: true },
        { id: 1, text: "Zinc", isCorrect: false },
        { id: 2, text: "Copper", isCorrect: false },
        { id: 3, text: "Aluminum", isCorrect: false },
      ],
    },
    {
      text: "The country that has the highest in Barley Production?",
      options: [
        { id: 0, text: "Russia", isCorrect: true },
        { id: 1, text: "India", isCorrect: false },
        { id: 2, text: "France", isCorrect: false },
        { id: 3, text: "China", isCorrect: false },
      ],
    },
    {
      text: "Tsunamis are not caused by",
      options: [
        { id: 0, text: "Hurricanes", isCorrect: true },
        { id: 1, text: "Earthquakes", isCorrect: false },
        { id: 2, text: "Undersea landslides", isCorrect: false },
        { id: 3, text: "Volcanic eruptions", isCorrect: false },
      ],
    },
    {
      text: "With which of the following rivers does Chambal river merge?",
      options: [
        { id: 0, text: "Yamuna", isCorrect: true },
        { id: 1, text: "Narmada", isCorrect: false },
        { id: 2, text: "Ganga", isCorrect: false },
        { id: 3, text: "Banas", isCorrect: false },
      ],
    },
    {
      text: "Where was the electricity supply first introduced in India",
      options: [
        { id: 0, text: "Darjeeling", isCorrect: true },
        { id: 1, text: "Chennai", isCorrect: false },
        { id: 2, text: "Dehradun", isCorrect: false },
        { id: 3, text: "Mumbai", isCorrect: false },
      ],
    },
    {
      text: "Which one of the following ports is the oldest port in India?",
      options: [
        { id: 0, text: " Chennai Port", isCorrect: true },
        { id: 1, text: " Mumbai Port", isCorrect: false },
        { id: 2, text: "Kolkata Port", isCorrect: false },
        { id: 3, text: "Vishakhapatnam Port", isCorrect: false },
      ],
    },
    {
      text: "At which one of the following places do the rivers Alaknanda and Bhagirathi merge to form Ganga?",
      options: [
        { id: 0, text: "Devprayag", isCorrect: true },
        { id: 1, text: " Rudra Prayag", isCorrect: false },
        { id: 2, text: "Karnaprayag", isCorrect: false },
        { id: 3, text: "Vishnuprayag", isCorrect: false },
      ],
    },
    {
      text: "Which of the following is the capital of Arunachal Pradesh?",
      options: [
        { id: 0, text: "Itanagar", isCorrect: true },
        { id: 1, text: "Dispur", isCorrect: false },
        { id: 2, text: "Imphal", isCorrect: false },
        { id: 3, text: "Panaji", isCorrect: false },
      ],
    },
    {
      text: "What is the state flower of Haryana?",
      options: [
        { id: 0, text: "Lotus", isCorrect: true },
        { id: 1, text: "Rhododendron", isCorrect: false },
        { id: 2, text: "Golden Shower", isCorrect: false },
        { id: 3, text: " Not declared", isCorrect: false },
      ],
    },
    {
      text: "Which is the largest coffee-producing state of India?",
      options: [
        { id: 0, text: "Karnataka", isCorrect: true },
        { id: 1, text: "Tamil Nadu", isCorrect: false },
        { id: 2, text: "Kerala", isCorrect: false },
        { id: 3, text: "Arunachal Pradesh", isCorrect: false },
      ],
    },
    {
      text: "Which state has the largest area?",
      options: [
        { id: 0, text: "Rajasthan", isCorrect: true },
        { id: 1, text: "Maharashtra", isCorrect: false },
        { id: 2, text: " Madhya Pradesh", isCorrect: false },
        { id: 3, text: "Uttar Pradesh", isCorrect: false },
      ],
    },
    {
      text: " In what state is Elephant Falls located?",
      options: [
        { id: 0, text: "Meghalaya", isCorrect: true },
        { id: 1, text: "Mizoram", isCorrect: false },
        { id: 2, text: "Manipur", isCorrect: false },
        { id: 3, text: "Orissa", isCorrect: false },
      ],
    },
  ];

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };
  let number = (score / questions.length) * 100;

  return (
    <div className="App">
      <h1> Quiz </h1>

      <h2 className="score">
        Score: {score} <br /> {number.toFixed()}%{" "}
      </h2>

      {showResults ? (
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct
          </h2>
          <h2>({number.toFixed()}%)</h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        <div className="question-card">
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
