import Header from '../Header/Header';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth from '../Authorization/Authorization';
// import Map from '../YM/YandexMap';
import DetailPage from '../../pages/detail/DetailPage';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import AboutMe from '../AboutMe/AboutMe';
import Barbershop from '../Barbershop/Barbershop';
import GiftCertificates from '../GiftCertificates/GiftCertificates';
import ItemListPage from '../ItemListPage/ItemListPage';
import ItemPage from '../ItemPage/ItemPage';
import {useDispatch} from 'react-redux'
import {useEffect} from 'react'
import { checkAuthFetch } from '../../redux/thunk/asyncUser';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(checkAuthFetch())
  }, [dispatch])
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
        {/* <Route path="/items" element={<ItemPage />} /> */}
        <Route path="/items" element={<ItemListPage type={1}/>} />
        <Route path="/items/:id" element={<ItemPage/>} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
