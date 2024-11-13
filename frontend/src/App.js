import React from 'react';
import QuizCreator from './components/QuizCreator';
import QuizTaker from './components/QuizTaker';

const App = () => {
    return (
        <div>
            <h1>Personalized Quiz Generator</h1>
            <QuizCreator />
            <QuizTaker quizId={1} />
        </div>
    );
};

export default App;