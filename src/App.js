import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <main>
      <Home />
      <About />
      <Services />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default App;