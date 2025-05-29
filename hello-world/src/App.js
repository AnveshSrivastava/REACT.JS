import './App.css';
import Navbar from './components/Navbar/Navbar';
import TextForm from './components/TextForm/TextForm';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  
  return (

      <Router>
        <Navbar title="TextUtils" aboutText="About" searchBar={true} />
        <Routes>
          <Route path="/" element={<TextForm heading ="Anvesh"/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
  );
}

export default App;
