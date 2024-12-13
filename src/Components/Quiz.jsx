import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { animated, useSpring } from "@react-spring/web";
import useAxiosGet from "../Hooks/HttpRequest";

export default function Quiz(){
    const url = 'https://the-trivia-api.com/v2/questions'
    const dataset = useAxiosGet(url)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [timer, setTimer] = useState(10)
    
    let question;
    let choices;
    let data;
    
    if (dataset.data){
        data = dataset.data
        question = data[currentIndex]['question']['text']
        choices = [...data[currentIndex]['incorrectAnswers'], data[currentIndex]['correctAnswer']]
    }

    useEffect(() => {
        
    })
    
    return(
        <>
            <Link to='/Quiz/'>
                <button className="p-1 px-5 bg-gray-600 text-white absolute top-0 left-0">
                    <i className="fa-solid fa-arrow-left"></i>
                </button>
            </Link>

            <h1 className="border-2 border-solid border-gray-500 rounded-lg p-3 text-2xl mb-5 max-w-xl text-center">
                {question}
            </h1>

            <div>
                {choices && choices.map(choice => (
                    <div key={choice}
                    className="choice border-2 border-solid border-gray-500 rounded-lg p-2 mb-2 hover:bg-gray-300 cursor-pointer transition-all duration-500">
                        <p>{choice}</p>
                    </div>
                ))}
            </div>

            <button className="mt-5 p-2 bg-gray-600 text-white">
                <p>Next <i className="fa-solid fa-arrow-right"></i></p>
            </button>


        </>
    )
}