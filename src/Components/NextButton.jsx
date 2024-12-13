export function NextButton({ showAnswer, setCurrentIndex, setShowAnswer, setSelectedAnswer }){
    function handleNext(){
        setCurrentIndex(prevIndex => prevIndex + 1);
        // setTimer(10);
        setShowAnswer(false);
        setSelectedAnswer(null);
    }

    return (
        <>
            {showAnswer && (
                <button className="mt-5 p-2 bg-gray-600 text-white" onClick={handleNext}>
                    <p>Next <i className="fa-solid fa-arrow-right"></i></p>
                </button>
            )}
        </>
    )
}