import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { animated, useSpring } from "@react-spring/web";
import useAxiosGet from "../Hooks/HttpRequest";
import { Choices } from "./Choices";
import { NextButton } from "./NextButton";

export default function Quiz(){
    const url = 'https://the-trivia-api.com/v2/questions'
    const dataset = useAxiosGet(url)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [timer, setTimer] = useState(10)
    const [showAnswer, setShowAnswer] = useState(false)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    
    let question;
    let data;
    
    if (dataset.data){
        data = dataset.data
        question = data[currentIndex]['question']['text']
    }

    useEffect(() => {
        if (showAnswer) return;

        const timerId = setInterval(() => {
            setTimer((prevTime) => {
                if (prevTime === 1){
                    clearInterval(timerId)
                    setShowAnswer(true)
                }
                return prevTime - 1
            })
        }, 1000)

        return () => clearInterval(timerId)
    }, [showAnswer])

    return(
        <>
            <Link to='/Quiz/'>
                <button className="p-1 px-5 bg-gray-600 text-white absolute top-0 left-0">
                    <i className="fa-solid fa-arrow-left"></i>
                </button>
            </Link>

            <h1>{timer}</h1>

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
            setTimer={setTimer}
            setSelectedAnswer={setSelectedAnswer} />
        </>
    )
}