import React from 'react'
import Home from './components/Home/Home'
import {Routes, Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Chat from './components/Chat/Chat';
import Translate from './components/Translate/Translate';
import About from './components/About/About';
import Faq from './components/FAQ/FAQ';
import Landing from './components/Landing/Landing';

const App = () => {
  return (
    <>

      <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/chat" element={<Chat/>} />
          <Route path="/translate" element={<Translate/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/faq" element={<Faq/>} />
    </Routes>
    </>
  )
}

export default App