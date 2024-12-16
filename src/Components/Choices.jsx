import { useMemo } from "react";

export function Choices({ 
    data, 
    currentIndex, 
    showAnswer, 
    setSelectedAnswer, 
    selectedAnswer, 
    setShowAnswer,
    setScore,
    score
    }){

    let choices;
    
    function shuffleArray(array){
        for (let i = choices.length - 1; i > 0; i--){
            const randomIndex = Math.floor(Math.random() * (i + 1));
            [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
        }
        return array;
    }

    const shuffledChoices = useMemo(() => {
        if (data){
            choices = [...data[currentIndex]['incorrectAnswers'], 
            data[currentIndex]['correctAnswer']]
            return shuffleArray(choices)
        }
        return [];
    }, [data, currentIndex])
     
    function handleAnswer(choice){
        if (showAnswer) return;
        setSelectedAnswer(choice);
        setShowAnswer(true);
        if (choice === data[currentIndex].correctAnswer){
            setScore(prev => prev + 1)
        }
    }

    return (
        <div>
            {shuffledChoices && shuffledChoices.map((choice, index) => (
                <div key={index}
                className={`choice border-2 border-solid border-gray-500 
                    rounded-lg p-2 mb-2 hover:bg-gray-300 cursor-pointer 
                    transition-all duration-500 
                    ${showAnswer && choice === data[currentIndex].correctAnswer
                        ? "bg-green-300 hover:bg-green-400"
                        : choice === selectedAnswer && "bg-red-300 hover:bg-red-400"
                    }`}
                onClick={() => handleAnswer(choice)}
                disabled={showAnswer}>
                    <p>{choice}</p>
                </div>
            ))}
        </div>
    )
}