import { useState } from 'react';
import './QuizStart.css';

function QuizStart({ toggleQuiz }) {
    return (
        <div className='quiz-start'>
            <h1>Quizzical</h1>
            <h2>You will have one of the best quizzes in your life.</h2>
            <button onClick={toggleQuiz}>Start quiz</button>
        </div>
    );
}

export default QuizStart;
