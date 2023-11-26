import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import Question from './Question.jsx';
import './Quiz.css'

function Quiz({ toggleQuiz, quizOptions }) {

    const [isShowAnswer, setIsShowAnswer] = useState(false);
    const [message, setMessage] = useState("");
    const [questions, setQuestions] = useState([]);

    useEffect(function () {
        fetch(
            `https://opentdb.com/api.php?
                amount=${quizOptions.amount}&
                category=${quizOptions.category}&
                difficulty=${quizOptions.difficulty}&
                type=multiple
            `
        )
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
        setMessage("");
        setQuestions(oldQuestions =>
            oldQuestions.map((qu, iQu) => {
                return {
                    ...qu,
                    answers: qu.answers.map((ch, iCh) => {
                        return {
                            val: ch.val,
                            selected: (iQu === indexQu) ? (iCh === indexCh) : ch.selected
                        }
                    })
                }
            })
        )
    }

    function checkAnswers() {
        if (questions.every(qu => qu.answers.some(ans => ans.selected))) {
            setMessage("Amazing !");
            setIsShowAnswer(true);
        } else {
            setMessage("You have to check all the answers");
        }
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
                    >Quiz Again</button> :
                    <button
                        className='quiz-btn'
                        onClick={checkAnswers}
                    >Check answers</button>
            }
            {
                message && <p className={isShowAnswer ? 'message-finish' : 'message-warning'}>{message}</p>
            }
        </div>
    );
}

export default Quiz;
