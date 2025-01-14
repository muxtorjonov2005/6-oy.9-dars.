import React from 'react'
import './App.css'
import InputValid from './components/InputValid'
import Slideshow from './components/Slideshow'
import OpenModal from './components/OpenModal'
import ProgressBar from './components/ProgressBar'
import Scrol from './components/ScrolAnimatsiya'

function App() {
  return (
    <div>
      <InputValid/>
      <Slideshow/>
      <OpenModal/>
      <ProgressBar/>
      <Scrol/>
    </div>
  )
}

export default App