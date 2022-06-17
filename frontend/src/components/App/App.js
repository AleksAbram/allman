// import Header from '../Header/Header';
import NavState from '../../context/navState';
import MainMenu from '../MainMenu/MainMenu';
import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Auth from '../Authorization/Authorization';
function App() {
  return (
    // <BrowserRouter>
    //   <Header />
    //   <Routes>
    //     {/* <Route path="/auth" element={<Auth/>} /> */}
    //   </Routes>
    // </BrowserRouter>
    <NavState>
      <MainMenu />
    </NavState>
  );
}

export default App;
