import { Link, useLocation } from "react-router-dom"
import { useSpring, animated } from "@react-spring/web";

export default function Score() {
    const location = useLocation();
    const { score } = location.state.score || {}
    const { length } = location.state.length || {}

    const transition = useSpring({
        from: { y: 100, opacity: 0 },
        delay: 100,
        to: { y: 0, opacity: 1 }
    })

    return (
        <animated.div 
        className="border-4 border-solid border-gray-500 rounded p-10 justify-items-center"
        style={{...transition}}>
            <p className="text-2xl">You Scored: {score} out of {length + 1}</p>
            <Link to='/Quiz/'>
                <button className="p-3 mt-5 bg-gray-600 rounded text-white text-xl">
                    Play again?
                </button>
            </Link>
        </animated.div>
    )
}