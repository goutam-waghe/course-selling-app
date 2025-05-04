import React from 'react'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Home from './pages/Home.jsx'
import Header from './components/Header.jsx'
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
