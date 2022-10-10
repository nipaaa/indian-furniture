import logo from './logo.svg';
import './App.css';
import Furnitures from './pages/Furnitures';
import Header from './pages/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Inquiry from './pages/Inquiry';
import About from './pages/About';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
      <Route path="/" element={<Furnitures />} />
      <Route path="/login" element={<Login />} />
      <Route path="/inquiry" element={<Inquiry />} />
      <Route path="/about" element={<About />} />
      
      </Routes>
    
    </div>
  );
}

export default App;
