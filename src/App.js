import './App.css';
import Header from './Header/Header';
import Home from './Pages/Home/Home';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;
