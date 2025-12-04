import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import '../styles/SearchResults.css'
import ErrorMessage from '../components/ErrorMessage';
import LoadingSpinner from '../components/LoadingSpinner';
import BookGrid from '../components/BookGrid';
import { searchBooks } from '../utils/api';


function SearchResults(){
  // setting states
  const [books, setBooks] = useState([]);
  const [loading, setLoading]= useState(true);
  const [error, setError] = useState(null);
  
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q')
  
  useEffect(()=>{
      if (!query) return;
    const fetchSearchResults = async ()=>{
      try {
        setLoading(true);
        
        const results = await searchBooks(query)
        setBooks(results.items || []);
        
      } catch(err){
        setError(err.message) 
      } finally {
        setLoading(false);
      }
    }
    fetchSearchResults();
  }, [query]);
  
  //Adding conditional statements
  if (loading) return <LoadingSpinner />
  if (error) return <ErrorMessage message={ error } />

  
 return (
   <div className="search-results">
     <h1>Search Results</h1>
    <p>Found {books.length} books for "{query}"</p>
    {books.length === 0 ? (
  <p>No books found</p>
) : (
  <BookGrid books={books} />
)}
   </div>
 );
}

export default SearchResults;