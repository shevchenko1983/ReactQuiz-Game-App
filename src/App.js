import React from 'react';
import './App.css';
import QuizWrapper from "./components/QuizWrapper";


const data = [
  {
    title: "What's the capital of Ukraine",
    questions: [ "Moscow", "Harkov", "Kiev"],
    correctAnswer: "Kiev",
  },
  {
    title: "What's the capital of Spain",
    questions: ["Moscow", "Madrid", "Real"],
    correctAnswer: "Madrid",
  },
  {
    title: "What's the capital of Canada",
    questions: ["New York", "Toronto", "Montreal"],
    correctAnswer: "Toronto",
  },
  {
    title: "What's the capital of Italy",
    questions: ["Rome", "Neapol", "Florencia"],
    correctAnswer: "Rome",
  },
];

function App() {

  return (
    <div className="App">
        <QuizWrapper questions={data}/>
    </div>
  );
}

export default App;
