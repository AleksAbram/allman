import Header from '../Header/Header';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth from '../Authorization/Authorization';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/auth" element={<Auth/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
