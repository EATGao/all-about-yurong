import './App.css';
import Header from './Header/Header';
import MainPage from './MainPage';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <MainPage />
      {/*Main*/}
    </div>
  );
}

export default App;
