import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BasketRow from "./BasketRow";





function Basket(){
  const dispatch = useDispatch();
  //const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket.basket);
  useEffect(() => {
    console.log(basket);
  }, [])
  const basketAction = () => {
    dispatch({type: 'CLEAN_BASKET'});
  }
  return (
    <div className="basket">
      {basket.map((item) => <BasketRow key={item.item.id} item={item.item} size={item.size}/>)}
      <div onClick={basketAction} className="basket-action">Заказать</div>
    </div>
    
  );
}

export default Basket;
