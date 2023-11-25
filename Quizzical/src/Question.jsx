import { nanoid } from 'nanoid';
import { useState } from 'react';
import './Question.css'

function Question({ question }) {
    const [choices, setChoices] = useState(() => {
        const currChoices = question.incorrect_answers
            .map(v => { return { val: v, selected: false } });
        currChoices.push({ val: question.correct_answer, selected: false });
        return currChoices.sort((a, b) => a - b);
    });

    console.log(choices);

    function selectChoice(index) {
        setChoices(oldChoices => 
            oldChoices.map((choice, i) => { return {
                val: choice.val,
                selected: (i === index)
            }})
        )
    }

    function getChoices() {
        const choicesEl = []
        choices.forEach((choice, index) => {
            choicesEl.push(<button
                key={nanoid()}
                className={`answer-btn ${choice.selected && 'answer-selected'}`}
                onClick={() => selectChoice(index)}
            >{choice.val}</button>);
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
