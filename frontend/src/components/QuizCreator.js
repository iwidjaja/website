import React, { useState } from 'react';
import axios from 'axios';

const QuizCreator = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [questions, setQuestions] = useState([{ question_text: '', correct_answer: '', options: ['', '', '', ''] }]);

    const handleAddQuestion = () => {
        setQuestions([...questions, { question_text: '', correct_answer: '', options: ['', '', '', ''] }]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const quiz = { title, description, questions };
        await axios.post('/quizzes/', quiz);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Quiz Title" />
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Quiz Description"></textarea>
            {questions.map((q, index) => (
                <div key={index}>
                    <input type="text" value={q.question_text} onChange={(e) => {
                        const newQuestions = [...questions];
                        newQuestions[index].question_text = e.target.value;
                        setQuestions(newQuestions);
                    }} placeholder="Question Text" />
                    <input type="text" value={q.correct_answer} onChange={(e) => {
                        const newQuestions = [...questions];
                        newQuestions[index].correct_answer = e.target.value;
                        setQuestions(newQuestions);
                    }} placeholder="Correct Answer" />
                    {q.options.map((option, i) => (
                        <input key={i} type="text" value={option} onChange={(e) => {
                            const newQuestions = [...questions];
                            newQuestions[index].options[i] = e.target.value;
                            setQuestions(newQuestions);
                        }} placeholder={`Option ${i + 1}`} />
                    ))}
                </div>
            ))}
            <button type="button" onClick={handleAddQuestion}>Add Question</button>
            <button type="submit">Create Quiz</button>
        </form>
    );
};

export default QuizCreator;