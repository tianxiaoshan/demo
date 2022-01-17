import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Layout'
import Activity from './pages/Activity'
import Login from './pages/Login'
import './App.scss'
const App = () => {
  return (
    <Router>
      <div className="App">
        {/* <Link to="/login">登录</Link>
        <Link to="/home">首页</Link> */}
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/activity" element={<Activity />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </Router>
  )
}
export default App
