import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

//pages
import { LoginPage } from "./pages/loginPage"
import { MainPage } from "./pages/mainPage"
//components


function App() {
  const [count, setCount] = useState(0)
  return (
    <Routes>
        <Route path='/' element={<LoginPage/>}></Route>
        <Route path="/clients" element={<MainPage/>}></Route>
    </Routes>
  )
}

export default App
