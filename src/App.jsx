import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import { BrowserRouter } from 'react-router-dom'
import Header from "./components/Header/Header"

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </div>
  )
}

export default App
