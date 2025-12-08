import React from 'react';
import '../styles/Home.css';
import { useState, useEffect } from 'react';
import { getTrendingBooks, searchByCategory } from '../utils/api';
import BookGrid from '../components/BookGrid';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';


function Home(){
  // setting up state variables
  const [trendingBooks, setTrendingBooks] = useState([]);
  const [fictionBooks, setFictionBooks] = useState([]);
  const [loading, setLoading] = useState( true );
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchBooks =async ()=>{
      try {
        setLoading(true);
        
        // fetching books for trending session
        const trendingData = await getTrendingBooks();
        setTrendingBooks(trendingData.items || []);
        
        // ... for fiction
        const fictionData = await searchByCategory('fiction', 0, 12);
          setFictionBooks(fictionData.items || []);
          setLoading(false);
        
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }
    fetchBooks();
  }, []);
  if(loading) return <LoadingSpinner />;//... to show spinner while loading
  if(error) return <ErrorMessage message={error} />; // ... to show error messages
  
  // for the display session 
  return (
  <div className="home page-fade-in">
    {/* Hero Section */}
    <section className="hero stagger-fade-in">
      <div className="hero-content">
        <h1>📚 Discover Your Next Favorite Book</h1>
        <p>Explore thousands of books, track your reading, and build your personal library</p>
      </div>
    </section>
    
    {/* Trending Books Section */}
    <section className="book-section stagger-fade-in">
      <h2>📖 Trending Now</h2>
      <BookGrid books={trendingBooks.slice(0, 8)} />
    </section>
    
    {/* Fiction Books Section */}
    <section className="book-section stagger-fade-in">
      <h2>✨ Popular Fiction</h2>
      <BookGrid books={fictionBooks.slice(0, 8)} />
    </section>
  </div>
);
  
}

export default Home;