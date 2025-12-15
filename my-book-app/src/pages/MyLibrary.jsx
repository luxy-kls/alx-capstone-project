import React from 'react';
import { useLibrary } from '../context/LibraryContext';
import BookGrid from '../components/BookGrid';
import '../styles/MyLibrary.css'


function MyLibrary() {
  //using context
const { library, removeFromLibrary } = useLibrary();

if (library.length === 0) {
  return (
    <div className="my-library page-fade-in">
      <h1>My Library</h1>
      <p>📚 Your library is empty!</p>
      <p>Start adding books to see them here.</p>
    </div>
  );
}
  return(
   <div className="my-library page-fade-in">
     <h1>My Library</h1>
    <p>You have {library.length} book{library.length !== 1 ? 's' : ''} saved</p>
    <BookGrid 
  books={library} 
  showRemoveButton={true}
  onRemove={removeFromLibrary}
/>
   </div>
  );
}

export default MyLibrary;