import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import { BrowserRouter } from 'react-router-dom'
import Header from "./components/Header/Header"
import Footer from './components/Footer/Footer'

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
