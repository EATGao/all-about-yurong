import './App.css';
import Header from './Header/Header';
import Home from './Pages/Home/Home';
import Footer from './Footer/Footer'
import About from './Pages/About/About'
import Project from './Pages/Project/Project';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div className="app">
      <Header />
      <div className='app_body'>
        <Home />
        <About />
        <Project />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
