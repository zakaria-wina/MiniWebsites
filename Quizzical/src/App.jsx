import { useState } from 'react';
import QuizStart from './QuizStart.jsx';
import Quiz from './Quiz.jsx';

function App() {
    const [isInQuizz, setIsInQuizz] = useState(false);
    const [quizOptions, setQuizOptions] = useState({
        category: "",
        difficulty: "",
        amount: "5"
    });

    function toggleQuiz() {
        setIsInQuizz(oldIsInQuiz => !oldIsInQuiz);
    }

    function changeQuizOptions(event) {
        const { name, value } = event.target;
        console.log(name, value);
        setQuizOptions(prevQuizOptions => {
			return {
				...prevQuizOptions,
				[name]: value
			}
		});
    }
    return (
        (isInQuizz) ?
            <Quiz
                toggleQuiz={toggleQuiz}
                quizOptions={quizOptions}
            /> :
            <QuizStart
                toggleQuiz={toggleQuiz}
                changeQuizOptions={changeQuizOptions}
            />
    );
}

export default App;
