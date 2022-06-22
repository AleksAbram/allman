import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToBasketAC } from "../../redux/actionCreators/basketAC";
import action from "../../redux/thunk/asyncItem";
import "./ItemPage.css";

function ItemPage() {
  const {id} = useParams();
  const dispatch = useDispatch();
  const sizes = useSelector((state) => state.item.sizes);
  const items = useSelector((state) => state.item.list);
  const [selectedSize, setSelectedSize] = useState('');
  const [item, setItem] = useState(null);
  //const basket = useSelector

  const handleBasketAdd = () => {
    const payload = {item, size: selectedSize};
    dispatch({type: 'ADD_TO_BASKET', payload})
    console.log(payload);
  }



  useEffect(() => {
    dispatch(action.sizesFetch());
    const currentItem = items.filter((item) => item.id === Number(id))[0];
    if (!currentItem) {
      dispatch(action.itemFetch(id));
    } else {
      setItem(currentItem);
    }
  }, [items, dispatch, id])

  const handleSelect = (e) => {
    setSelectedSize(e.target.value);
  }

  return (
    <div className="item-container">
      {item && <>
      <img className="item-image" src={`http://localhost:4000${item.item_images[0].item_image_url}`} />
      <div className="info">
        <div className="name-price">
          <div className="info-name">{item.item_name}</div>
          <div className="info-price">{item.item_price}</div>
        </div>
        <div className="size">
          <div className="info-size-label">Выберите размер:</div>
          <select value={selectedSize} onChange={handleSelect} className="size-select">
          {sizes.filter((size) => size.typeId === item.typeId).map((size) =>     
              <option key={size.id} value={size.size_title}>
                {size.size_title}
              </option>
          )}
          </select>
        </div>
        <div className="details">
          <div className="detail">{item.item_description}</div>
          <div className="detail">{item.item_details}</div>
          <div className="detail">{item.item_care}</div>
        </div>
        <div onClick={handleBasketAdd}className="basket-button op-08">Добавить<br />в корзину</div>
      </div>
      </>
}
    </div>
  );
} 

export default ItemPage;
