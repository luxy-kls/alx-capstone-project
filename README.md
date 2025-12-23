# 📚 **BookHub - React Book Discovery Platform**

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Animations-1572B6?style=for-the-badge&logo=css3&logoColor=white)

A modern, feature-rich book discovery platform built with React that allows users to search, browse, and manage their personal reading library. Integrated with the Google Books API to access millions of books with real-time data.

---

## ✨ **Features**

### **Core Functionality**
- 🔍 **Advanced Search** - Search through 25+ million books with instant results
- 📖 **Browse by Category** - Explore 8 curated genres (Fiction, Mystery, Science, History, Biography, Fantasy, Romance, Self-Help)
- 📚 **Personal Library** - Save favorite books with localStorage persistence
- 📱 **Fully Responsive** - Seamless experience on desktop, tablet, and mobile devices
- 🌓 **Dark Mode** - Complete light/dark theme system with smooth transitions
- ⚡ **Fast Performance** - Optimized loading states and efficient rendering

### **User Experience**
- ✨ **Smooth Animations** - Professional page transitions and micro-interactions
- 🎨 **Modern UI** - Clean, intuitive interface with thoughtful design
- 💾 **Data Persistence** - Library and theme preferences saved across sessions
- 🚫 **Error Handling** - Graceful error messages and empty states
- 🎯 **Interactive Cards** - Enhanced hover effects with image zoom and shine animations

---

## 🚀 **Live Demo**

https://myreadstack.vercel.app

---

## 📸 **Screenshots**

### Home Page - Light Mode
<img width="1366" height="768" alt="Screenshot (1)" src="https://github.com/user-attachments/assets/b58deb7f-a46d-4656-a007-38098ca9ad6a" />


### Home Page - Dark Mode
<img width="1366" height="768" alt="Screenshot (2)" src="https://github.com/user-attachments/assets/3c1e94a9-5f51-4840-bcbe-a1b7e8f846a6" />


### Book Details Page
<img width="1366" height="768" alt="Screenshot (4)" src="https://github.com/user-attachments/assets/866201c0-4e1c-4417-93a3-6aafb1019aa8" />
<img width="1366" height="768" alt="Screenshot (3)" src="https://github.com/user-attachments/assets/2a195319-4d8d-4ea6-9786-16f342ad04e7" />



### My Library
<img width="1366" height="768" alt="Screenshot (5)" src="https://github.com/user-attachments/assets/388e5459-25ff-4c33-bf56-1b0ec86bb9ac" />
<img width="1366" height="768" alt="Screenshot (6)" src="https://github.com/user-attachments/assets/bd3283ea-4c65-4deb-a95d-a3ae4e9780ec" />


---

## 🛠️ **Built With**

### **Core Technologies**
- **React 18** - UI library with hooks
- **React Router 6** - Client-side routing
- **Vite** - Next-generation build tool
- **Google Books API** - Book data and metadata

### **Key React Patterns**
- **Context API** - Global state management (Library & Theme)
- **Custom Hooks** - Reusable logic (useFetch, useLocalStorage, useDebounce)
- **Component Composition** - Modular, maintainable architecture
- **Functional Components** - Modern React patterns with hooks

### **Styling**
- **CSS3** - Custom styling with animations
- **Flexbox & Grid** - Responsive layouts
- **CSS Animations** - Smooth transitions and effects
- **Dark Mode** - Complete theme system

---

## 📂 **Project Structure**

```
bookhub/
├── src/
│   ├── components/          # Reusable components
│   │   ├── BookCard.jsx     # Individual book display
│   │   ├── BookGrid.jsx     # Grid layout for books
│   │   ├── LoadingSpinner.jsx
│   │   ├── ErrorMessage.jsx
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/               # Page components
│   │   ├── Home.jsx
│   │   ├── Browse.jsx
│   │   ├── BookDetails.jsx
│   │   ├── SearchResults.jsx
│   │   └── MyLibrary.jsx
│   ├── context/             # Context providers
│   │   ├── LibraryContext.jsx
│   │   └── ThemeContext.jsx
│   ├── hooks/               # Custom hooks
│   │   ├── useFetch.js
│   │   ├── useLocalStorage.js
│   │   └── useDebounce.js
│   ├── utils/               # Utility functions
│   │   └── api.js           # API integration
│   ├── styles/              # CSS files
│   ├── App.jsx
│   └── main.jsx
├── public/
├── index.html
├── package.json
└── vite.config.js
```

---

## 🎯 **Key Features Breakdown**

### **1. Search & Discovery**
- Real-time search with debouncing
- Category-based browsing
- Trending books showcase
- Detailed book information pages

### **2. Library Management**
- Add books to personal library
- Remove books with one click
- Persistent storage across sessions
- Empty state handling

### **3. Theme System**
- Light and dark modes
- Smooth color transitions
- Theme persistence
- Comprehensive styling for all components

### **4. Responsive Design**
- Mobile-first approach
- Touch-friendly interactions
- Adaptive layouts
- Optimized for all screen sizes

---

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js (v14 or higher)
- npm or yarn

### **Installation**

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/bookhub.git
cd bookhub
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:5173
```

### **Build for Production**
```bash
npm run build
```

### **Preview Production Build**
```bash
npm run preview
```

---

## 🔑 **API Configuration**

This project uses the **Google Books API** which doesn't require an API key for basic usage. If you want to increase rate limits:

1. Get an API key from [Google Cloud Console](https://console.cloud.google.com/)
2. Create a `.env` file in the root directory:
```env
VITE_GOOGLE_BOOKS_API_KEY=your_api_key_here
```
3. Update `src/utils/api.js` to use the API key

---

## 💡 **Usage**

### **Searching for Books**
1. Use the search bar in the navigation
2. Enter book title, author, or keywords
3. View results with book covers and details

### **Browsing Categories**
1. Navigate to the Browse page
2. Select a category from the sidebar
3. Explore books in that genre

### **Managing Your Library**
1. Click on any book to view details
2. Click "Add to My Library" to save
3. Visit "My Library" to see saved books
4. Click "Remove from Library" to unsave

### **Switching Themes**
- Click the sun/moon icon in the navigation
- Theme preference is automatically saved

---

## 🎨 **Design Philosophy**

### **User-Centric**
- Intuitive navigation
- Clear visual hierarchy
- Consistent design language
- Accessible color contrasts

### **Performance**
- Lazy loading for images
- Debounced search inputs
- Efficient re-rendering
- Optimized animations

### **Modern Aesthetics**
- Clean, minimalist design
- Smooth transitions
- Engaging micro-interactions
- Professional polish

---

## 📚 **Technical Highlights**

### **State Management**
```javascript
// Library Context for global state
const { library, addToLibrary, removeFromLibrary } = useLibrary();

// Theme Context for app-wide theming
const { theme, toggleTheme } = useTheme();
```

### **Custom Hooks**
```javascript
// localStorage persistence
const [data, setData] = useLocalStorage('key', defaultValue);

// API fetching with loading/error states
const { data, loading, error } = useFetch(url);

// Debounced values for search optimization
const debouncedValue = useDebounce(value, delay);
```

### **API Integration**
```javascript
// Modular API functions
searchBooks(query)
getBookById(id)
searchByCategory(category)
getTrendingBooks()
```

---

## 🧪 **Testing**

### **Manual Testing Checklist**
- ✅ Search functionality
- ✅ Category filtering
- ✅ Add/remove from library
- ✅ Theme switching
- ✅ Responsive design
- ✅ localStorage persistence
- ✅ Error handling
- ✅ Loading states

---

## 🔮 **Future Enhancements**

### **Planned Features**
- [ ] Reading progress tracker
- [ ] Reading statistics dashboard
- [ ] Book recommendations
- [ ] Reading lists/collections
- [ ] Social sharing
- [ ] Book notes and reviews
- [ ] Reading goals
- [ ] Advanced filtering options
- [ ] Pagination for large result sets
- [ ] User authentication

---

## 🐛 **Known Issues**

- Google Books API may have rate limits for heavy usage
- Some books may have low-resolution cover images
- Occasional API timeouts during high traffic

---

## 📝 **Lessons Learned**

### **Technical Growth**
- Mastered React Context API for global state
- Built reusable custom hooks
- Implemented comprehensive theme system
- Integrated external REST API
- Created smooth CSS animations

### **Best Practices**
- Component composition and reusability
- Proper error handling throughout
- localStorage for data persistence
- Responsive design principles
- Clean code organization

---

## 🤝 **Contributing**

Contributions are welcome! Please feel free to submit a Pull Request.

### **Steps to Contribute**
1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 **License**

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 **Author**

**Keyman Luxy Sackey**

//- Portfolio: [Your Portfolio URL]
- GitHub: [@yourusername](https://github.com/luxy-kls)
- LinkedIn: [Keyman Luxy Sackey](https://linkedin.com/in/keyman-sackey)
- Email: sackeykeyman@gmail.com

---

## 🙏 **Acknowledgments**

- **Google Books API** - Providing comprehensive book data
- **React Team** - Amazing framework and documentation
- **Vite** - Lightning-fast build tool
- **Community** - Inspiration and learning resources

---

## 📊 **Project Stats**

- **Lines of Code:** ~800+ (all self-written)
- **Components:** 20+
- **Custom Hooks:** 5
- **Pages:** 5
- **Development Time:** ~25 hours
- **API Functions:** 5

---

## 🎓 **Learning Outcomes**

This project demonstrates proficiency in:
- ✅ React fundamentals and advanced patterns
- ✅ Context API and global state management
- ✅ Custom hooks development
- ✅ RESTful API integration
- ✅ Responsive web design
- ✅ Modern CSS (animations, grid, flexbox)
- ✅ localStorage implementation
- ✅ Component architecture
- ✅ Error handling strategies
- ✅ Performance optimization

---

## 💬 **Support**

If you have any questions or run into issues, please open an issue on GitHub or contact me directly.

---

## ⭐ **Show Your Support**

Give a ⭐️ if you like this project!

---

<div align="center">

**Built with ❤️ using React**

*A capstone project demonstrating modern React development*

[Report Bug](https://github.com/luxy-kls/myreadstack/issues) · [Request Feature](https://github.com/luxy-kls/myreadstack/issues)

</div>

---

**Last Updated:** December 2025
