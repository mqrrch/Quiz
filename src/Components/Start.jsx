import { Link } from "react-router-dom"
import { useSpring, animated } from "@react-spring/web"

export default function Start(){
    const transition = useSpring({
        from: { y: 100, opacity: 0 },
        delay: 100,
        to: { y: 0, opacity: 1 }
    })

    return (
        <>
            <animated.h1 className='text-6xl' style={{...transition}}>Ready?</animated.h1>
            <Link to='/Quiz/questions'>
                <animated.button 
                className='p-3 px-6 my-8 text-lg font-semibold text-white bg-red-500 rounded'
                style={{...transition}}>
                    Start Quiz
                </animated.button>
            </Link>
        </>

    )
}