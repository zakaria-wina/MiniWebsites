import { useState } from 'react';
import Question from './Question.jsx';
import './Quiz.css'

function Quiz() {
    const questions = ["One", "Two", "Three", "Four", "Five", "One", "Two", "Three", "Four", "Five"];
    return (
        <div className="quiz">
            {questions.map(question => <Question />)}
            <button>Check answers</button>
        </div>
    );
}

export default Quiz;
