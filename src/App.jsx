import { useEffect, useState } from 'react';
import './App.css';
import { question } from './question';
import { hardOptions } from './hardQuestion';

export default function App() {
  const [showResults, setShowResults] = useState(false); // Changed from showFinaResult to showResults
  const [score, setScore] = useState(0);
  const [currentQustions, setCurrentQustions] = useState(0)
  const [qustionTobeRender, setQustionTobeRender] = useState(question)
  const [isHardMode, setIsHardMode] = useState(false);
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
    setQustionTobeRender(question);
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

  const restartGameOver = () => {
    if (isHardMode) {
      restartGame(); // Restart from the first question in easy mode
    } else {
      alert('Cannot restart game over from first game in easy mode. Please proceed to hard mode to access harder questions.');
    }
  }

  return (
    <div className='container'>
      <h1>Morocco Q & A</h1>
      <h2>Current Score: {score}</h2>
      {showResults ? (
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {qustionTobeRender.length} correct - ({(score / qustionTobeRender.length) * 100}) %
          </h2>
          <div className='ActionBtn'>
            {!isHardMode ? (
              <>
                <button onClick={() => {
                  restartGame()
                }} className='RestartBtn' >Restart game
                  <span className='restart'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                  </span>
                </button>
                <button onClick={nextGame} className='NextBtn'>Next game
                  <span className='restart'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
                    </svg>
                  </span>
                </button>
              </>
            ) : (
              <>
                <button onClick={() => {
                  restartGameOver()
                }} className='RestartBtn' > Restart from first game
                  <span className='restart'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                  </span>
                </button>
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="question-card">
          <h2>{qustionTobeRender[currentQustions].text}</h2>
          <ul>
            {
              qustionTobeRender[currentQustions].options?.map((option) => {
                return (
                  <li key={option.id}
                    onClick={() => { optionClick(option.isCorrect) }}>
                    {option.text}
                  </li>)
              })
            }
          </ul>
        </div>
      )}
    </div>
  );
}
