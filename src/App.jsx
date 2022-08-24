

import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from "./components/Header/Header"
import Footer from './components/Footer/Footer'
import Home from './containers/Home/Home'
import Login from './containers/User/Login/Login'
import Signup from './containers/User/SignUp/Signup'
import './App.scss'

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
