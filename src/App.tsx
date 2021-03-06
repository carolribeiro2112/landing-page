import React from 'react';
import GlobalStyle  from './styles/global';
import Header from './components/Header';
import Headline from './components/Headline';
import About from './components/About';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Headline/>
      <About/>
      <Features/>
      <Testimonials/>
      <Footer/>
      <GlobalStyle/>
    </div>
  );
}

export default App;
