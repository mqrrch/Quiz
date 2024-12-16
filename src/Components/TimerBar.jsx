export function TimerBar({ timer }) {
    return(
        <div className="w-1/2 h-4 mb-4 border-2 border-solid border-gray-700 rounded-full">
            <div className="bg-gray-600 h-3 rounded-full" 
            style={{width: `${timer * 10}%`, transition: 'width 1ms linear'}}></div>
        </div>
    )
}