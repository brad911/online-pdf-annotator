import React from 'react'
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Home from './Pages/Home';


function App() {
return <div>
  <Routes>
    <Route path='/' Component={Home}> </Route>
  </Routes>
</div>
}

export default App 