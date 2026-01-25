import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link  } from 'react-router-dom'



function App() {
  const [currentView, setCurrentView] = useState("")

  return (
    <>
      <BrowserRouter>
      </BrowserRouter>
    </>
  )
}

export default App
