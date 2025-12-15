import React from 'react';
import BookCard from './BookCard';
import './BookGrid.css';

function BookGrid({ books, showRemoveButton, onRemove }) {
  // If no books, show empty state
  if (!books || books.length === 0) {
    return (
      <div className="no-books">
        <p>📚 No books found</p>
      </div>
    );
  }
   
  return (
    <div className="book-grid">
      {books.map((book) => (
        <BookCard 
  key={book.id} 
  book={book}
  showRemoveButton={showRemoveButton}
  onRemove={onRemove}
/>
      ))}
    </div>
  );
}

export default BookGrid;
