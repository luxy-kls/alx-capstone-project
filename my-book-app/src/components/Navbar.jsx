import React ,{ useState, useEffect  } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useTheme from '../context/ThemeContext.jsx';
import './Navbar.css'


function Navbar() {
  const [searchQuery ,setSearchQuery] = useState("");
  const {theme, toggleTheme} = useTheme();
  
  useEffect(() => {
  // Apply theme to the HTML element
  document.documentElement.setAttribute('data-theme', theme);
}, [theme]);  // Run whenever theme changes
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    
    if(searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`);
      setSearchQuery(''); // to clear after search has completed
    }
  }
 return (
    <nav className='navbar'>
      <div className="navbar-container">
        <Link className="navbar-logo" to="/">Bookhub</Link>
        
        <ul className="navbar-menu">
          <Link to="/">Home</Link>
          <Link to="/browse">Browse</Link>
          <Link to="/library">My Library</Link>
        </ul>
        
        <div className="navbar-search">
          <form onSubmit={handleSearch}>
            <input 
              type="text" 
              placeholder="Search books..." 
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
        </div>
        <button onClick={toggleTheme} className="theme-toggle">
  {theme === 'light' ? '🌙' : '☀️'}
</button>
      </div>
    </nav>
  );
}

export default Navbar;
