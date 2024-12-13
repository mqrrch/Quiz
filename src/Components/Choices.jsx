export function Choices({ data, currentIndex, showAnswer, setSelectedAnswer, selectedAnswer, setShowAnswer }){

    let choices; 
    
    if (data){
        choices = [...data[currentIndex]['incorrectAnswers'], data[currentIndex]['correctAnswer']]
    }

    function handleAnswer(choice){
        if (showAnswer) return;
        setSelectedAnswer(choice);
        setShowAnswer(true);
    }

    return (
        <div>
            {choices && choices.map((choice, index) => (
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