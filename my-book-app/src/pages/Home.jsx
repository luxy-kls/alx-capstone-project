import React from 'react';
import '../styles/Home.css';
import { useState, useEffect } from 'react';
import getTrendingBooks from '../utils/api';
import searchByCategory from '../utils/api';
import BookGrid from '../components/BookGrid';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';


function Home(){
  // setting up state variables
  const [trendingBooks, setTrendingBooks] = useState([]);
  const [fictionBooks, setFictionBooks] = useState([]);
  const loading = useState( true );
  const error = useState(null);
  
  
  
}

export default Home;