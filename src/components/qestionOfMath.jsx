/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { MathOptions } from '../mathQusstion';
import { question } from '../question';

export default function QestionOfMath({ restartGame,currentQustions, setCurrentQustions, setScore, score, setShowResults }) {
    const [userAnswer, setUserAnswer] = useState("")
    const checkIsCorrect = () => {
        const currentQuestion = MathOptions[currentQustions];
        const userAnswerInt = parseInt(userAnswer);
        if (!isNaN(userAnswerInt)) {
            if (userAnswerInt === currentQuestion.correctAnswer) {
                setScore(score + 1);
            }
            if (currentQustions + 1 < MathOptions.length) {
                setUserAnswer(""); // Clear the user's answer after verifying
                setCurrentQustions(currentQustions + 1);
            } else {
                alert(`your score ${score}  thanks bro resatart over  `);
                restartGame()
            }
        } else {
            alert("Please enter a valid number for the answer.");
        }
    }
    return (
        <>
            <div className=' container'>
                <div className='question-card'>
                <h1> {MathOptions[currentQustions].text}</h1>
                    <input value={userAnswer}
                        onChange={(e) => {
                            setUserAnswer(e.target.value);
                        }}
                        type="text" />
                    <button onClick={checkIsCorrect} >Next</button>
                </div>
            </div>
        </>
    )
}
