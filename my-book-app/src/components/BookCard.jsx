import React from 'react';
import { Link } from 'react-router-dom';
import './BookCard.css';

function BookCard({ book, showRemoveButton, onRemove }){
  //book data destructured
  const { id, volumeInfo } = book;
  const { title, authors, imageLinks, averageRating, categories} = volumeInfo;
  const thumbnail = imageLinks?.thumbnail || 'https://via.placeholder.com/128x192?text=No+Cover';
  
  const handleRemove = (e) => {
  e.preventDefault(); // Prevent navigation to book details
  e.stopPropagation(); // Stop event from bubbling
  if (onRemove) {
    onRemove(id);
  }
};
  
  return (
    <Link to={`/books/${id}`} className='book-card'>
      {/* Image section*/}
      <div className="book-card-image">
        <img src={thumbnail} alt={title}/>
      </div>
      
      {/*Content*/}
      <div className="book-card-content">
        <h3 className = "book-card-title">{title}</h3>
        
        {/*Author*/}
        <p className="book-card-author">{authors ? authors.join(', ') : 'Unknown author' } </p>
        
        {/*Rating*/}
        {averageRating && (
          <div className = 'book-card-rating'>⭐️ {averageRating}
          </div>) }
          
          {/*Caregories*/}
          {categories && categories[0] && (
            <span className = "book-card-category"> {categories[0]} </span>
          ) }
          {/* Remove Button */}
          {showRemoveButton && (
         <button 
        onClick={handleRemove}
        className="remove-btn danger-btn">
    Remove from Library
  </button>
)}
      </div>
      
      
    </Link>
  );
}

export default BookCard;