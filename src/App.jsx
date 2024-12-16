import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Start from './Components/Start'
import Quiz from './Components/Quiz'
import Score from './Components/Score'

function App() {

  return (
    <>
      <BrowserRouter>
        <div className='w-screen h-screen flex flex-col justify-center items-center'>
          <Routes>
            <Route path='/Quiz/' element={<Start />} />
            <Route path='/Quiz/questions' element={<Quiz />} />
            <Route path='/Quiz/score' element={<Score />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
