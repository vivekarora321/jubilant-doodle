import React from 'react'
import './Home.css';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate=useNavigate();
    
    const navChat = (e) =>{
        e.preventDefault();
        navigate('/chat');
    }
    const navtrans = (e) =>{
        e.preventDefault();
        navigate('/translate');
    }
    const navFAQ = (e) =>{
        e.preventDefault();
        navigate('/faq');
    }
    const navAbout = (e) =>{
        e.preventDefault();
        navigate('/about');
    }
  return (
    <div className="app">
    <div className="header">
      <h1>Fruit.AI</h1>
      <p>"Be Healthy!"</p>
    </div>
    <div className="grid-container">
      <div className="grid-item chat" onClick={navChat}>chat</div>
      <div className="grid-item translate" onClick={navtrans}>
       Google
      </div>
      <div className="grid-item blur">Blur</div>
      <div className="grid-item faqs" onClick={navFAQ}>FAQs</div>
      <div className="grid-item about" onClick={navAbout}>About</div>
      <div className="grid-item blur">Blur</div>
    </div>
    <div className="dots">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
  )
}

export default Home