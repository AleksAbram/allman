import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BasketRow from "./BasketRow";





function Basket(){
  const dispatch = useDispatch();
  //const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket.basket);
  const [emptyBasketMessage, setEmptyBasketMessage] = useState('');
  useEffect(() => {
    if (basket.length === 0) {
      setEmptyBasketMessage('Корзина пуста')
    }
  }, [])
  const basketAction = () => {
    dispatch({type: 'CLEAN_BASKET'});
    setEmptyBasketMessage('Заказ оформлен!')
  }
  return (
    <div className="basket">
      <div className='empty-basket-message'>{emptyBasketMessage}</div>  
      {basket.map((item) => <BasketRow key={item.item.id} item={item.item} size={item.size}/>)}

      { (emptyBasketMessage === '') && <div onClick={basketAction} className="basket-action">Заказать</div>}
    </div>
    
  );
}

export default Basket;
