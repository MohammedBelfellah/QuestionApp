/* eslint-disable react/prop-types */

function FinalResults({ score, totalQuestions, restartGame, nextGame, isHardMode, startMathGame }) {
    return (
        <div className="final-results">
            <h1>Final Results</h1>
            <h2>
                {score} out of {totalQuestions} correct - {((score / totalQuestions) * 100)} %
            </h2>
            <div className='ActionBtn'>
                {!isHardMode ? (
                    <>
                        <button onClick={restartGame} className='RestartBtn'>Restart game</button>
                        {nextGame && (
                            <button onClick={nextGame} className='NextBtn'>Next game</button>
                        )}
                    </>
                ) : (
                    <button onClick={startMathGame} className='RestartBtn'>Proceed to Math Game</button>
                )}
            </div>
        </div>
    );
}

// Default values for props
FinalResults.defaultProps = {
    nextGame: null,
    isHardMode: false,
    startMathGame: null
};

export default FinalResults;
