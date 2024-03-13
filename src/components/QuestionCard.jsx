/* eslint-disable react/prop-types */
import React from 'react';

function QuestionCard({ question, optionClick }) {
    return (
        <div className="question-card">
            <h2>{question.text}</h2>
            <ul>
                {question.options?.map((option) => (
                    <li key={option.id} onClick={() => optionClick(option.isCorrect)}>
                        {option.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default QuestionCard;
