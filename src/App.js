import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
// import Footer from './components/Footer';
// import Header from './components/Header';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import About from './components/About';
import Header from './components/Header';
import Resume from './components/Resume';
import Footer from './components/Footer'


function App() {
  const [categories] = useState([
    {
    name: 'About Me'
  },
    {
      name: 'Portfolio'
    },
    {
      name: 'Contact'
    },
    {
      name: 'Resume'
    },
  ]);

    const [currentCategory, setCurrentCategory] = useState(categories[0]);



  return (
    <div>
      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      />
      
      <main>

        {currentCategory.name === "About Me" ? <About /> : <></>}
        {currentCategory.name === "Portfolio" ? <Portfolio /> : <></>}
        {currentCategory.name === "Contact" ? <ContactForm /> : <></>}
        {currentCategory.name === 'Resume' ? <Resume /> : <></>}
      </main>
      <Footer/>
    </div>
  );
}

export default App;