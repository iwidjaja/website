import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuizTaker = ({ quizId }) => {
    const [quiz, setQuiz] = useState(null);
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(null);

    useEffect(() => {
        const fetchQuiz = async () => {
            const response = await axios.get(`/quizzes/${quizId}`);
            setQuiz(response.data);
        };
        fetchQuiz();
    }, [quizId]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let newScore = 0;
        quiz.questions.forEach((q) => {
            if (answers[q.id] === q.correct_answer) {
                newScore += 1;
            }
        });
        setScore(newScore);
    };

    if (!quiz) return <div>Loading...</div>;

    return (
        <div>
            <h1>{quiz.title}</h1>
            <form onSubmit={handleSubmit}>
                {quiz.questions.map((q) => (
                    <div key={q.id}>
                        <p>{q.question_text}</p>
                        {q.options.split(',').map((option, i) => (
                            <label key={i}>
                                <input type="radio" name={q.id} value={option} onChange={(e) => {
                                    setAnswers({ ...answers, [q.id]: e.target.value });
                                }} />
                                {option}
                            </label>
                        ))}
                    </div>
                ))}
                <button type="submit">Submit</button>
            </form>
            {score !== null && <p>Your score: {score}/{quiz.questions.length}</p>}
        </div>
    );
};

export default QuizTaker;