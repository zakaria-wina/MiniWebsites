import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import Question from './Question.jsx';
import './Quiz.css'

function Quiz({ toggleQuiz }) {
    const [isShowAnswer, setIsShowAnswer] = useState(false);
    const [questions, setQuestions] = useState([]);
    // const questions = ["One", "Two", "Three", "Four", "Five", "One", "Two", "Three", "Four", "Five"];
    useEffect(function () {
        fetch("https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple")
        .then(res => res.json())
        .then(data => {
            console.log(data.results);
            setQuestions(v => data.results);
        })
    }, []);
    return (
        <div className="quiz">
            {
                questions.map(question => 
                <Question 
                    key={nanoid()}
                    question={question}
                />)
            }
            {
                isShowAnswer ?
                <button
                    className='quiz-btn'
                    onClick={toggleQuiz}
                >Reset Quiz</button> :
                <button
                    className='quiz-btn'
                    onClick={() => setIsShowAnswer(v => !v)}
                >Check answers</button>
            }
        </div>
    );
}

export default Quiz;
