import React, { useState, useEffect } from 'react';
import { searchByCategory } from '../utils/api';
import BookGrid from '../components/BookGrid';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import '../styles/Browse.css'

function Browse(){
  //setting up states 
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('fiction')
  const [loading, setLoading ] = useState(true);
  const [error, setError] = useState(null);
  
  //Defining Categories 
  const categories = [
  'Fiction',
  'Non-Fiction', 
  'Mystery',
  'Romance',
  'Science Fiction',
  'Fantasy',
  'Biography',
  'History',
  'Self-Help',
  'Horror'
];

useEffect(() => {
  const fetchBooks = async () => {
    try {
      setLoading(true);
      const result = await searchByCategory(selectedCategory, 0, 20);
      setBooks(result.items || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  fetchBooks(); 
}, [selectedCategory]);

if (loading) return <LoadingSpinner />;
if (error) return <ErrorMessage message={error} />;

  return (
  <div className="browse">
    
    {/* Sidebar with categories */}
    <div className="browse-sidebar">
      <h2>Categories</h2>
      {categories.map((category) => (
        <button
          key={category}
          className={`category-btn ${selectedCategory === category.toLowerCase() ? 'active' : ''}`}
          onClick={() => setSelectedCategory(category.toLowerCase())}
        >
          {category}
        </button>
      ))}
    </div>
    
    {/* Main content */}
    <div className="browse-content">
      <h1>Browse {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Books</h1>
      <p>Found {books.length} books</p>
      <BookGrid books={books} />
    </div>
    
  </div>
);
} 

export default Browse;