
const BASE_URL='https://www.googleapis.com/books/v1/volumes';

// SearchBooks function for fetching books
export const searchBooks= async (query, startIndex=0, maxResults =20)=>{
  try {
     const response = await fetch(`${BASE_URL}?q=${encodeURIComponent(query)}&startIndex=${startIndex}&maxResults=${maxResults}`
    );
      const data = await response.json()
      return data;
  } catch(error) {
    console.error("Couldn't find what you were searching for:", error);
    throw error;
  }
}

//fetching book data by id 
export const getBookById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error Fetching Book:", error);
    throw error;
  }
}

// fetching books by category
export const searchByCategory= async (category, startIndex=0, maxResults =20)=>{
  try {
     const response = await fetch(`${BASE_URL}?q=subject:${encodeURIComponent(category)}&startIndex=${startIndex}&maxResults=${maxResults}`
    );
      const data = await response.json()
      return data;
  } catch(error) {
    console.error("Error Finding category:", error);
    throw error;
  }
}

//fetching data by Author
export const searchByAuthor= async (author, startIndex=0, maxResults =20)=>{
  try {
     const response = await fetch(`${BASE_URL}?q=inauthor:${encodeURIComponent(author)}&startIndex=${startIndex}&maxResults=${maxResults}`
    );
      const data = await response.json()
      return data;
  } catch(error) {
    console.error("Error Finding author:", error);
    throw error;
  }
}

//fetching trending Books
export const getTrendingBooks = async () => {
  try {
    const response = await fetch(`${BASE_URL}?q=bestseller&orderBy=relevance&maxResults=20`)
    const data = await response.json();
    return data;
  } catch(error) {
  console.error("Error Finding Trending Books:", error);
  throw error;
}
}
