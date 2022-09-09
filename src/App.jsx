

import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from "./components/Header/Header"
import Footer from './components/Footer/Footer'
import Home from './containers/Home/Home'
import Login from './containers/User/Login/Login'
import Signup from './containers/User/SignUp/Signup'
import Profile from './containers/User/Profile/Profile'
import './App.scss'
import Product from './containers/Products/Product'
import Address from './containers/Address/Address'

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Product/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/address' element={<Address/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
