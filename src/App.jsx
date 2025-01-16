import React from 'react'
import './App.css'
import InputValid from './components/InputValid'
import Slideshow from './components/Slideshow'
import OpenModal from './components/OpenModal'
import ProgressBar from './components/ProgressBar'

function App() {
  return (
    <div className='container'>
      <InputValid/>
      <Slideshow/>
      <OpenModal/>
      <ProgressBar/>
    </div>
  )
}

export default App