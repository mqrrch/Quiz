import { useState, useEffect } from "react";

export default function useTimer(initialTime, showAnswer, onTimesUp, resetTimerTrigger) {
    const [timer, setTimer] = useState(initialTime)

    useEffect(() => {
        setTimer(initialTime)
    }, [resetTimerTrigger, initialTime])

    useEffect(() => {
        if (showAnswer) return;

        const timerId = setInterval(() => {
            setTimer((prevTime) => {
                if (prevTime === 1){
                    clearInterval(timerId)
                    onTimesUp()
                }
                return prevTime - 1
            })
        }, 1000)

        return () => clearInterval(timerId)
    }, [showAnswer, onTimesUp])

    return timer;
}