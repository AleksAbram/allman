import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Basket.css';
function BasketRow({item, size}) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const deleteItem = () => {
    dispatch({type: 'DELETE_FROM_BASKET', payload: item.id})
  }

  const minusHandler = (s) => {
   return () => setQuantity((prevState) => prevState + s > 0 ? prevState + s : prevState);
  }


  return (
    <div className="basket-row">
      <img src={`http://localhost:4000/${item.item_images[0].item_image_url}`} className="basket-item-image" />
      <div className="basket-item-info">
        <div className="basket-item-name">{item.item_name}</div>
        <div className="basket-item-price">{item.item_price}</div>
        <div className="basket-item-size">Размер: {size}</div>
      </div>
      <div className="basket-row-buttons">
        <div className="quantity-group">
          <div onClick={minusHandler(-1)} className="plus-minus">&#xFF0D;</div>
          <div className="quantity unselectable">{quantity}</div> 
          <div onClick={minusHandler(1)} className="plus-minus">&#xFF0B;</div>
        </div>
      <div onClick={deleteItem} className="basket-delete-button">X</div>
      </div>
    </div>
  );
}

export default BasketRow;
