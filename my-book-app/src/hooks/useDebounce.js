import { useState, useEffect } from 'react';

function useDebounce(value, delay=500){
  //state for debouncedValue
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  //effect to take place after delay
  useEffect(()=>{
    //setting timer to activate debouncedValue after delay
    const handler = setTimeout(()=>{
      setDebouncedValue(value)
    }, delay);
    
    // functio  to cancel delay if debounced value changes before delay
    
    return ()=>{
      clearTimeout(handler);
    }
  }, [value, delay]); // re-run if value changes
  
  return debouncedValue
}


export default useDebounce;