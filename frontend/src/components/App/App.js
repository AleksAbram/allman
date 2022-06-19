import Header from '../Header/Header';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth from '../Authorization/Authorization';
import Map from '../YM/YandexMap';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Map/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
