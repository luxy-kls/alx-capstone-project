import React from 'react';
import './ErrorMessage.css';

function ErrorMessage({ message }){
  return (
    <div className = 'error-message'>
      <span className = 'error-icon'>⚠️</span>
      <p>{ message || "Something went wrong Please try again." } </p>
    </div>
  )
}


export default ErrorMessage;
