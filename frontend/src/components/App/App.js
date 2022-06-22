import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth from '../Authorization/Authorization';
import Map from '../YM/YandexMap';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import ItemListPage from '../ItemListPage/ItemListPage';
import ItemPage from '../ItemPage/ItemPage';
import Header from '../Header/Header';
import { useDispatch } from 'react-redux';
import action from '../../redux/thunk/asyncItem';
import { useEffect } from 'react';
import ItemPageForEdit from '../ItemPage/ItemPageForEdit';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action.itemsFetch());
  })
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/map" element={<Map />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<ItemListPage type={1}/>} />
        <Route path="/items/:id" element={<ItemPage/>} />

        <Route path="/admin/items/:id" element={<ItemPageForEdit/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
