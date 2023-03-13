import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Movies from './components/Movies/Movies';
import Details from './pages/Details/Details';
import Footer from './pages/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/movie/:id' element={<Details />}/>
          <Route path='/movies/:type' element={<Movies />}/>
          <Route path='*' element={<h2>404 Opps Error Page!!</h2>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
