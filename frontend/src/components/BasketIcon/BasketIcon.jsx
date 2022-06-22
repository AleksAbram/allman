import React from 'react';
import { useSelector } from 'react-redux';
import './BasketIcon.css'

const BasketIcon = () => {
  const basket  = useSelector((state) => state.basket.basket);
  return (
    <div className="bagCont">
    <img src="/img/BAG.png" alt="x" className="bag" />
    <span>{basket.length}</span>
  </div>
  );
};

export default BasketIcon;