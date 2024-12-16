import { Link } from "react-router-dom";

export function NextButton({ 
    data, 
    setCurrentIndex, 
    currentIndex, 
    setShowAnswer, 
    showAnswer, 
    setSelectedAnswer,
    score,
    length
    }){
        
    function handleNext(){
        setCurrentIndex(prevIndex => prevIndex + 1);
        setShowAnswer(false);
        setSelectedAnswer(null);
    }

    function handleEnd(){
        setShowAnswer(false);
        setSelectedAnswer(null);
    }

    return (
        <>
            {currentIndex < length ? showAnswer && (
                <button className="mt-5 p-2 bg-gray-600 text-white" onClick={handleNext}>
                    <p>Next <i className="fa-solid fa-arrow-right"></i></p>
                </button>
            ) : showAnswer && (
                <Link to='/Quiz/score' state={{ score: {score}, length: {length} }}>
                    <button className="mt-5 p-2 bg-gray-600 text-white" onClick={handleEnd}>
                        <p>End Quiz <i className="fa-solid fa-arrow-right"></i></p>
                    </button>
                </Link>
            )}
        </>
    )
}