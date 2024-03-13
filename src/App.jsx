import {useState } from 'react';
import './App.css';
import { question } from './question';
import { hardOptions } from './hardQuestion';
import QestionOfMath from './components/qestionOfMath';
import QuestionCard from './components/QuestionCard';
import FinalResults from './components/FinalResults';

export default function App() {
  const [showResults, setShowResults] = useState(false); // Changed from showFinaResult to showResults
  const [score, setScore] = useState(0);
  const [currentQustions, setCurrentQustions] = useState(0)
  const [qustionTobeRender, setQustionTobeRender] = useState(question)
  const [isHardMode, setIsHardMode] = useState(false);
  const [showMathQuestion, setShowMathQuestion] = useState(false);
  const optionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }
    if (currentQustions + 1 < qustionTobeRender.length) {
      setCurrentQustions(currentQustions + 1)
    } else {
      setShowResults(true)
    }
  }
  const restartGame = () => {
    setScore(0)
    setCurrentQustions(0)
    setShowResults(false)
    setIsHardMode(false);
    setQustionTobeRender(question); // Reset to the 'question' array
    setShowMathQuestion(false)
  }
  const nextGame = () => {
    if (score >= 3 && !isHardMode) {
      setIsHardMode(true);
      setQustionTobeRender(hardOptions)
      setScore(0)
      setCurrentQustions(0)
      setShowResults(false)
    } else {
      alert('your score is too low Please try again')
      restartGame()
    }
  }

  const startMathGame = () => {
    setScore(0)
    setCurrentQustions(0)
    setShowMathQuestion(true)
  }

  return (
    <div className='container'>
      <h1>Morocco And Math Q & A</h1>
      <h2>Current Score: {score}</h2>

      {showMathQuestion ? (
        <QestionOfMath
          // currentQustions={currentQustions}
          // setCurrentQustions={setCurrentQustions}
          // setScore={setScore}
          // score={score}
          // setShowResults={setShowResults}
          // restartGame={restartGame}
          // showResults={showResults}
          restartGame={restartGame}
          currentQustions={currentQustions}
          setCurrentQustions={setCurrentQustions}
          setScore={setScore}
          score={score}
          setShowResults={setShowResults}
        />
      ) : (
        <>
          {showResults ? (
            <FinalResults
              score={score}
              totalQuestions={qustionTobeRender.length}
              restartGame={restartGame}
              nextGame={nextGame}
              isHardMode={isHardMode}
              startMathGame={startMathGame}
            />
          ) : (
            <QuestionCard
              question={qustionTobeRender[currentQustions]}
              optionClick={optionClick}
            />
          )}
        </>
      )
      }

    </div>
  );
}
