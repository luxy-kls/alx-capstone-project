import { useState } from 'react';
import { useEffect } from 'react';

 function useFetch (fetchFunction, params=[]){
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
  const fetchData = async () =>{
    setLoading(true);
    setError(null);
  try {
  const result = await fetchFunction(...params);
  
  setData(result);
  } catch (err) {
    setError(err.message)
  } finally {
    setLoading(false);
  }
  }
  
  
  fetchData();
}, [fetchFunction, ...params]);

return { data, loading, error};}

export default useFetch;