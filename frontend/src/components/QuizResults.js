import React from 'react';

const QuizResults = ({ score, total }) => {
    return (
        <div>
            <h2>Quiz Results</h2>
            <p>Your score: {score}/{total}</p>
        </div>
    );
};

export default QuizResults;