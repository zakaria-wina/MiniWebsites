import { useState } from 'react';
import QuizStart from './QuizStart.jsx';
import Quiz from './Quiz.jsx';

function App() {
    const [isInQuizz, setIsInQuizz] = useState(false);
    function enableQuiz() {
        setIsInQuizz(oldIsInQuiz => !oldIsInQuiz);
    }
    return (
        (isInQuizz) ?
            <Quiz /> :
            <QuizStart enable={enableQuiz}/>
    );
}

export default App;
