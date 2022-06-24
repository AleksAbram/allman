import React from 'react';
import { useSelector } from 'react-redux';
import './BasketIcon.css'
import { useNavigate } from 'react-router-dom'
const BasketIcon = () => {
  const basket = useSelector((state) => state.basket.basket);
  const navigate = useNavigate()


  return (
    <div className="bagCont">
      <img src="/img/BAG.png" alt="x" className="bag" onClick={(e) => navigate('./basket')} />
      {basket.length > 0 ? <div className='number'>{basket.length}</div> : ''}
    </div>
  );
};

export default BasketIcon;
