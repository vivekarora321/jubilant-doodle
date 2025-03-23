
import React, { useState } from 'react';
import axios from 'axios';
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import './Translate.css';

const Translate = () => {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('es'); // Default to Spanish

  const handleTranslate = async () => {
    const apiKey = 'AIzaSyBrBqBEN9lp3PZJckRbsBEE4YpJMEzb3Ic'; // Replace with your Google API Key

    try {
      const response = await axios.post(
        `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`,
        {
          q: text, // The text to be translated
          target: targetLanguage, // Target language (e.g., 'es' for Spanish)
        }
      );

      const translated = response.data.data.translations[0].translatedText;
      setTranslatedText(translated);
    } catch (error) {
      console.error('Error translating text:', error);
    }
  };

  const navigate=useNavigate();

  const navBack = (e) =>{
    e.preventDefault();
    navigate('/home');
  }

  return (
    <div className='translate-app'>
      <div className="trans-head">
          <h2 className="arr"><IoArrowBackCircleSharp onClick={navBack} /></h2>
          <h2 className="trans">Translate</h2>
        </div>
      <div className="translator-container">
        <div>

        {translatedText && (
          <div className="translated-text">
            <h3>Translated Text:</h3>
            <p>{translatedText}</p>
          </div>
        )}
        </div>
      <textarea
        className="text-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to translate"
      />
      <select
        className="language-select"
        value={targetLanguage}
        onChange={(e) => setTargetLanguage(e.target.value)}
      >
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="zh">Chinese</option>
        <option value="hi">Hindi</option>
        {/* Add more languages */}
      </select>
      <button className="translate-button" onClick={handleTranslate}>
        Translate
      </button>

    </div>
    </div>
  );
};

export default Translate;
