import React,{useState} from 'react'
import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import News from './Components/News';
import Performance from './Components/Perfomance';
import Docs from './Components/Docs';
import DocsData from './Components/DocsData';
import Footer from './Components/Footer';


function App() {
  const [data, setData] =useState (DocsData)
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <News/>
      <Performance />
      <Docs data={data} />
      <Footer />
    </div>
  );
}

export default App;
