import { useState } from 'react';
import QuizStart from './QuizStart.jsx';
import Quiz from './Quiz.jsx';

function App() {
    const [isInQuizz, setIsInQuizz] = useState(false);
    function toggleQuiz() {
        setIsInQuizz(oldIsInQuiz => !oldIsInQuiz);
    }
    return (
        (isInQuizz) ?
            <Quiz toggleQuiz={toggleQuiz}/> :
            <QuizStart toggleQuiz={toggleQuiz}/>
    );
}

export default App;
