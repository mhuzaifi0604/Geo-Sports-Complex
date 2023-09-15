import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Home from './Components/Home'
import Client_Panel from './Components/Client_Panel'
import Customer_Panel from './Components/Customer_Panel'
import Admin_Panel from './Components/Admin_Panel'

function App() {
 

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/client-panel' element={<Client_Panel/>} />
          <Route path='/customer-panel' element={<Customer_Panel />} />
          <Route path='/admin-panel' element={<Admin_Panel/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
