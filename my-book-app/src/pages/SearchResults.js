import React from 'react';
import { useSearchParams } from 'react-router-dom';
import '../styles/SearchResults.css'

function SearchResults(){
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q')
 return (
   <div className="search-results">
     <h1>Results from your search...</h1>
     <p>Search for {query}</p>
     <p>Under construction 🏗</p>
   </div>
 );
}

export default SearchResults;