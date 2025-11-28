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
  
  
}