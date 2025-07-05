import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <div className='px-4'>
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
