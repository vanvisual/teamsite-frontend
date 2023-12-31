import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import AboutPage from './Pages/AboutPage/AboutPage';
import Footer from './Components/Footer/Footer';
import Contact from './Pages/Contact/Contact';

function App() {
  return (

    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutPage />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
