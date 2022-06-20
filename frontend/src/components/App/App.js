import Header from '../Header/Header';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth from '../Authorization/Authorization';
import Map from '../YM/YandexMap';
import DetailPage from '../../pages/detail/DetailPage';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import AboutMe from '../AboutMe/AboutMe';
import Barbershop from '../Barbershop/Barbershop';
import GiftCertificates from '../GiftCertificates/GiftCertificates';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path="/map" element={<Map />} /> */}
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe/>} />
        <Route path="/barbershop" element={<Barbershop/>} />
        <Route path="/certificates" element={<GiftCertificates/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
