import './App.css';
import Header from './Header/Header';
import Home from './Pages/Home/Home';
import Footer from './Footer/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <div className='app_body'>
        <Home />
      </div>
      <Footer />
      
    </div>
  );
}

export default App;
