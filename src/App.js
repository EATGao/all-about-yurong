import './App.css';
import Header from './Header/Header';
import Home from './Pages/Home/Home';
import Sidebar from './Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <Header />
      <div className='app_body'>
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
