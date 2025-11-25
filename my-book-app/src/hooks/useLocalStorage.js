import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue){
  
  const [storedValue, setStoredValue] = useState(()=>{
    try {
      //get item from localStorage
      const item = window.localStorage.getItem(key);
      
      // parse and return 
      return item ? JSON.parse(item) : initialValue;
    } catch(error) {
      console.error('Error loading from local storage', error);
      return initialValue;
    }
  });
  
  // saving to local storage if there is change in value
  useEffect(()=>{
    try{
      //stringifying value to save 
      window.localStorage.setItem(key, JSON.stringify(storedValue) );
    } catch(error){
      console.error('Error saving to localStorage', error);
    }
  }, [key, storedValue] ) //run when ley or value changes
  
  
  return [storedValue, setStoredValue];
}

export default useLocalStorage;