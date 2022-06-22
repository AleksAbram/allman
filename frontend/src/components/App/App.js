import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth from '../Authorization/Authorization';


import Map from '../YM/YandexMap';

import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import AboutMe from '../AboutMe/AboutMe';
import Barbershop from '../Barbershop/Barbershop';
import GiftCertificates from '../GiftCertificates/GiftCertificates';
import ItemListPage from '../ItemListPage/ItemListPage';
import ItemPage from '../ItemPage/ItemPage';
import { checkAuthFetch } from '../../redux/thunk/asyncUser';
import Header from '../Header/Header';
import { useDispatch } from 'react-redux';
import action from '../../redux/thunk/asyncItem';
import { useEffect } from 'react';
import ItemPageForEdit from '../ItemPage/ItemPageForEdit';
import Basket from '../Basket/Basket';



function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuthFetch())
    //dispatch(action.itemsFetch());
  }, [dispatch])
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path="/map" element={<Map />} /> */}

        <Route path="/map" element={<Map />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe/>} />
        <Route path="/barbershop" element={<Barbershop/>} />
        <Route path="/certificates" element={<GiftCertificates/>} />
        {/* <Route path="/items" element={<ItemPage />} /> */}
        {/* <Route path="/items" element={<ItemListPage type={1}/>} /> */}
        <Route path="/items/types/:type" element={<ItemListPage />} />

        <Route path="/items/:id" element={<ItemPage/>} />
        <Route path="/basket" element={<Basket/>} />
        <Route path="/admin/items/:id" element={<ItemPageForEdit/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
