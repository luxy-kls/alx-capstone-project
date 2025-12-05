import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Browse from './pages/Browse.jsx';
import BookDetails from './pages/BookDetails.jsx';
import SearchResults from './pages/SearchResults.jsx';
import MyLibrary from './pages/MyLibrary.jsx';
import { LibraryProvider } from './context/LibraryContext.jsx'

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <LibraryProvider>
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/books/:id" element={<BookDetails />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/library" element={<MyLibrary />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </LibraryProvider>
  );
}


export default App;