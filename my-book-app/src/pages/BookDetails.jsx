import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/BookDetails.css'
function BookDetails(){
  const { id } = useParams();
    
  return (
    <div className='book-details'>
      <h1>BookDetails</h1>
      <p>This session is under construction 🏗 </p>
    </div>
  )
}

export default BookDetails;
