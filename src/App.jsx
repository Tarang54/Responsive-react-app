import React from 'react';
import Header from './Header.jsx';
import Carousel from './Carousel.jsx';
import Products from './Products.jsx';
import Footer from './Footer.jsx';
import './styles.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Carousel />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
