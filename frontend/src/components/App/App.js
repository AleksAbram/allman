import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth from '../Authorization/Authorization';
import Map from '../YM/YandexMap';
import DetailPage from '../../pages/detail/DetailPage';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import ItemPage from '../ItemPage/ItemPage';
import Header from '../Header/Header';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/map" element={<Map />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<ItemPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
