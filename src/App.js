import React,{useState, useEffect} from 'react'
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
  const [showBtn, setShowBtn] = useState (false)
  

   useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);
   const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  
  const [data, setData] =useState (DocsData)
  
  return (
    <div className="App">
       {showBtn && (
        <button onClick={scrollToTop} className="back-to-top">
          <i class="fas fa-chevron-circle-up up" ></i>
        </button>
      )}
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
