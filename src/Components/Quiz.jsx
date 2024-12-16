import { useState } from "react";
import { Link } from "react-router-dom";
import useAxiosGet from "../Hooks/HttpRequest";
import useTimer from "../Hooks/Timer";
import { TimerBar } from "./TimerBar";
import { Choices } from "./Choices";
import { NextButton } from "./NextButton";

export default function Quiz(){
    const url = 'https://the-trivia-api.com/v2/questions'
    const dataset = useAxiosGet(url)
    const loading = dataset.loading
    const [currentIndex, setCurrentIndex] = useState(0)
    const [showAnswer, setShowAnswer] = useState(false)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    
    let question;
    let data;
    if (dataset.data){
        data = dataset.data
        question = data[currentIndex]['question']['text']
    }

    const timer = useTimer(10, showAnswer, () => setShowAnswer(true), currentIndex)

    return(
        <>
            {loading ? (
                <div className="loader"></div>
            ) : (
                <>
                    <Link to='/Quiz/'>
                        <button className="p-1 px-5 bg-gray-600 text-white absolute top-0 left-0">
                            <i className="fa-solid fa-arrow-left"></i>
                        </button>
                    </Link>

                    <h1 className="mb-5 text-xl">Question No.{currentIndex + 1}</h1>

                    <TimerBar timer={timer} />

                    <h1 className="border-2 border-solid border-gray-500 rounded-lg p-3 text-2xl mb-5 max-w-xl text-center">
                        {question}
                    </h1>

                    <Choices data={data}
                    currentIndex={currentIndex}
                    setShowAnswer={setShowAnswer}
                    showAnswer={showAnswer}
                    setSelectedAnswer={setSelectedAnswer}
                    selectedAnswer={selectedAnswer} />

                    <NextButton showAnswer={showAnswer} 
                    setCurrentIndex={setCurrentIndex} 
                    setShowAnswer={setShowAnswer}
                    setSelectedAnswer={setSelectedAnswer} />
                </>
            )}
        </>
    )
}