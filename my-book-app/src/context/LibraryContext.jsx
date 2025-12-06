import React, { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';


const LibraryContext = createContext();

export const LibraryProvider= function ({ children}){
  const [library, setLibrary] = useLocalStorage('myLibrary', []);


const addToLibrary = function(book){
if (!library.find(b => b.id === book.id)) {
    setLibrary([...library,book]);
  }
}

const removeFromLibrary= function(bookId){
  setLibrary(library.filter(b =>b.id !== bookId))
}

const isInLibrary = function(bookId) {
    return library.some(b => b.id === bookId);}


return (
  <LibraryContext.Provider value={{ library, addToLibrary, removeFromLibrary, isInLibrary }}>
    {children}
  </LibraryContext.Provider>
);
}
export function useLibrary() {
  const context = useContext(LibraryContext);
  if (!context) {
    throw new Error('useLibrary must be used within LibraryProvider');
  }
  return context;
}
