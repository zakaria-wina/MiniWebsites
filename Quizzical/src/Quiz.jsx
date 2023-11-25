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
                setQuestions(data.results.map(qu => {
                    return {
                        question: qu.question,
                        answers: [
                            { val: qu.incorrect_answers[0], selected: false },
                            { val: qu.incorrect_answers[1], selected: false },
                            { val: qu.incorrect_answers[2], selected: false },
                            { val: qu.correct_answer, selected: false },
                        ].sort((a, b) => a - b),
                        correct_answer: qu.correct_answer,
                    }
                }));
            })
    }, []);

    function selectChoice(indexQu, indexCh) {
        setQuestions(oldQuestions =>
            oldQuestions.map((qu, iQu) => {
                return {
                    ...qu,
                    answers: qu.answers.map((ch, iCh) => {
                        return {
                            val: ch.val,
                            selected:
                                (iQu === indexQu) ?
                                (iCh === indexCh) :
                                ch.selected
                        }
                    })
                }
            })
        )
    }

    return (
        <div className="quiz">
            {
                questions.map((qu, iQu) =>
                    <Question
                        key={nanoid()}
                        iQu={iQu}
                        question={qu}
                        selectChoice={selectChoice}
                        isShowAnswer={isShowAnswer}
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
                        onClick={() => setIsShowAnswer(true)}
                    >Check answers</button>
            }
        </div>
    );
}

export default Quiz;
