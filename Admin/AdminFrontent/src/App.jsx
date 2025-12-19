
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {IndexAdmin} from './index'
import {About_us} from './admin_about'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
           <Route path="/" element={<IndexAdmin />} />
           <Route path="/about_us" element={<About_us/>} />
 </Routes>
 </Router>
      {/* <h1>Hellow</h1> */}

    </>
  )
}

export default App
