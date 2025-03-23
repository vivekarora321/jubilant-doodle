import React from 'react';
import './Landing.css';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
    const navigate = useNavigate();
    
    const navHome = (e) => {
        e.preventDefault();
        navigate('/login');
    };

    return (
        <div className='land_app'>
            <div className='head'>
                <h1 onClick={navHome}>Fruit.ai</h1>
                <h2>"Be healthy"</h2>
                <button onClick={navHome} className="get-started-button">Get Started</button>
            </div>
        </div>
    );
}

export default Landing;
