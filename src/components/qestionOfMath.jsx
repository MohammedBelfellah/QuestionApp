/* eslint-disable react/prop-types */
import { useState } from 'react'
import { MathOptions } from '../mathQusstion';
import { useOnkeyPress } from '../hooks/useOnkeyPress';

export default function QestionOfMath({ restartGame, currentQustions, setCurrentQustions, setScore, score }) {
    const [userAnswer, setUserAnswer] = useState("")
    

    const checkIsCorrect = () => {
        const currentQuestion = MathOptions[currentQustions];
        const userAnswerInt = parseInt(userAnswer);
        const correctAnswerInt = parseInt(currentQuestion.correctAnswer);
        if (!isNaN(userAnswerInt)) {
            if (userAnswerInt === correctAnswerInt) {
                setScore((prevScore) => prevScore + 1);
            }
            if (currentQustions + 1 < MathOptions.length) {
                setUserAnswer(""); // Clear the user's answer after verifying
                setCurrentQustions(currentQustions + 1);
            } else {
                alert(`${score + 1} out of ${MathOptions.length} correct , click OK to restart`)
                restartGame()
            }
        } else {
            alert("Please enter a valid number for the answer.");
        }
    }
    useOnkeyPress(checkIsCorrect, "Enter")

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
