import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import AllPhones from './Pages/AllPhones'
import OnePhone from './Pages/OnePhone' 



function App() {
  

  return (
    <>
     <Routes>
      <Route path='/phones' element={<AllPhones/>}/>
      <Route path='/phones/:id' element={<OnePhone/>}/>
     </Routes>
    </>
  )
}

export default App
