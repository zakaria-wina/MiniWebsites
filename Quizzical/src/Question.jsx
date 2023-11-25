import { useState } from 'react';
import './Question.css'

function Question() {
    return (
        <div className='question'>
            <p>Hello Eveyone Here</p>
            <div className="answers">
                <input type="button" value="hello" />
                <input type="button" value="hello" />
                <input type="button" value="hello" />
                <input type="button" value="hello" />
            </div>
        </div>
    );
}

export default Question;
