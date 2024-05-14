
// import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './pages/Menu/Menu';
import Reservation from './pages/TableBooking/Reservation';
import Bloging from './pages/Blog/Bloging';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        
       <Header/>
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/reservation" element={<Reservation/>} />
          <Route path="/blog" element={<Bloging/>} />
          <Route path="/contact" element={<Contact/>} />
         
          {/* Add other routes for additional pages */}
        </Routes>

        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
