import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import { Navbar, Footer } from './components';
import { GlobalStyles } from './globalStyles';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';


const App = () => {
  return (
    
      <Router>
          <GlobalStyles />
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path='/services' element={<Services/>} />
            <Route path='/products' element={<Products/>} />
          </Routes>
          <Footer />
      </Router>
        
    
  );
}

export default App;
