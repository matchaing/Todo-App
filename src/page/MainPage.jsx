import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './MainPage.css';

function MainPage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/list');
  };

  return (
    <div className="mainContainer">
      <img src="/logo.png" alt="Logo" />
      <img src="/title.png" alt="Title" />
      <button className="customButton" onClick={handleButtonClick}>
        START
      </button>
    </div>
  );
}

export default MainPage;