import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BasketRow from "./BasketRow";





function Basket(){
  const dispatch = useDispatch();
  const [orderCompleted, setOrderCompleted] = useState(false);
  //const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket.basket);
  const [emptyBasketMessage, setEmptyBasketMessage] = useState('');
  useEffect(() => {
    console.log(basket.length, orderCompleted);
    if (basket.length === 0 && !orderCompleted) {
      
      setEmptyBasketMessage('Корзина пуста');
      console.log(emptyBasketMessage);
    }
  }, [basket])

  const basketAction = () => {
    dispatch({type: 'CLEAN_BASKET'});
    setOrderCompleted(true);
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
