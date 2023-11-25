import { nanoid } from 'nanoid';
import { useState } from 'react';
import './Question.css'

function Question({ iQu, question, selectChoice, isShowAnswer }) {

    const choices = question.answers;

    function getChoices() {
        const choicesEl = []
        choices.forEach((choice, iCh) => {
            choicesEl.push(
                <button
                    key={nanoid()}
                    className={`answer-btn ${(!isShowAnswer) ?
                        (choice.selected ? "answer-selected" : "") :
                        (
                            (choice.val === question.correct_answer) ?
                                "answer-green" :
                                (choice.selected ? "answer-red" : "")
                        )
                        }`}
                    onClick={() => selectChoice(iQu, iCh)}
                >{choice.val}</button>
            );
        });
        return choicesEl;
    }

    return (
        <div className='question'>
            <p>{question.question}</p>
            <div className="answers">
                {getChoices()}
            </div>
        </div>
    );
}

export default Question;
