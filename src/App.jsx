import React from 'react'
import Landing from './Pages/LandingPage/Landing'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (

    <Routes>

      <Route path='/' element= { <Landing/> }/>


    </Routes>



   
   
  )
}

export default App