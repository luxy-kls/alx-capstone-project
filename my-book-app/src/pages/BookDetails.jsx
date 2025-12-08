import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/BookDetails.css'
import { getBookById } from '../utils/api';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { useLibrary } from '../context/LibraryContext';



function BookDetails(){
  // setting up states for BookDetails
  const [book, setBook] = useState(null);
  const [loading , setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const { id } = useParams();
  
    //using context
  const { addToLibrary, isInLibrary } = useLibrary();
  const bookSaved = isInLibrary(id);
  
    useEffect(()=>{
      const fetchBook = async ()=>{
        try {
          setLoading(true);
          
          //fetching data
          const data = await getBookById(id);
          setBook(data);
          setLoading(false);
        } catch (error){
          setError(error.message);
          setLoading(false);
        }
      }
      fetchBook();
    },[id] )
    
    if(loading) return <LoadingSpinner />;
    if(!book) return <ErrorMessage message="Book not found"/>;
    if(error) return <ErrorMessage message={error} />;
    
  
  const { volumeInfo } = book;
const {
  title,
  authors,
  description,
  imageLinks,
  averageRating,
  categories,
  publisher,
  publishedDate,
  pageCount,
  language
} = volumeInfo;

const thumbnail = imageLinks?.thumbnail || 'placeholder'

  return(
       <div className="book-details page-fade-in">
      
      {/* Header Section */}
    <div className="book-details-header">
      {/* Book Cover */}
      <div className="book-details-image">
        <img src={thumbnail} alt={title} />
      </div>
      
      {/* Book Info Panel */}
      <div className="book-details-info">
        <h1>{title}</h1>
        
        <p className="book-author">
          by {authors ? authors.join(', ') : 'Unknown Author'}
        </p>
        
        {averageRating && (
          <div className="book-rating">
            ⭐ {averageRating} / 5
          </div>
        )}
        
        {categories && categories.length > 0 && (
          <div className="book-categories">
            {categories.map((category, index) => (
              <span key={index} className="category-badge">
                {category}
              </span>
            ))}
          </div>
        )}
        
        <button 
        className="add-to-library-btn success-btn "
        onClick={() => addToLibrary(book)}
        disabled={bookSaved}
>
  {bookSaved ? '✓ In Library' : 'Add to My Library'}
</button>
      </div>
    </div>
    
    {/* Description Section */}
    <div className="book-description">
      <h2>About This Book</h2>
      {description ? (
  <div dangerouslySetInnerHTML={{ __html: description }} />
) : (
  <p>No description available.</p>
)}
    </div>
    
    {/* Book Details Section */}
    <div className="book-metadata">
      <h2>Book Details</h2>
      <div className="metadata-grid">
        {publisher && (
          <div className="metadata-item">
            <strong>Publisher:</strong> {publisher}
          </div>
        )}
        
        {publishedDate && (
          <div className="metadata-item">
            <strong>Published:</strong> {publishedDate}
          </div>
        )}
        
        {pageCount && (
          <div className="metadata-item">
            <strong>Pages:</strong> {pageCount}
          </div>
        )}
        
        {language && (
          <div className="metadata-item">
            <strong>Language:</strong> {language.toUpperCase()}
          </div>
        )}
      </div>
    </div>
    
    </div>
  );
  
    
}

export default BookDetails;
