import { useState } from 'react';
import quiz from './armstrong-quiz-questions';



const ArmstrongQuiz = () => {
    //const [currentNum, setCurrentNum] = useState(0);
    const currQuestion = quiz[0];
    //const [userAnswer, setUserAnswer] = useState('');


    const getValue = (e) => console.log(e.target.value);

    return (
        <div>
            <h1>How well do you know Louis Armstrong?</h1>
            <div>
                <h2>{currQuestion.id} {currQuestion.question}</h2>
                {currQuestion.answers.map((answer, index) => (
                    <div key={index}>
                        <input
                            className='w-1/2 px-4 py-3 my-4 text-white bg-green-700  rounded-lg font-bold text-sm'
                            type='button'
                            value={answer}
                            onChange={getValue}
                            onClick={getValue}
                        />
                    </div>
                ))}
            </div>

        </div>

    )
}


export default ArmstrongQuiz;