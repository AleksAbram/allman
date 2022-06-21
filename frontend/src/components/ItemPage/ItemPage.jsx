import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import action from "../../redux/thunk/asyncItem";
import "./ItemPage.css";

function ItemPage() {
  const {id} = useParams();
  const dispatch = useDispatch();
  const sizes = useSelector((state) => state.item.sizes);
  const items = useSelector((state) => state.item.list);
  const [selectedSize, setSelectedSize] = useState('');

  useEffect(() => {
    console.log(items);
    dispatch(action.sizesFetch());
  }, [])

  const handleSelect = (e) => {
    setSelectedSize(e.target.value);
  }

  return (
    <div className="item-container">
      <img className="item-image" src={items[id - 1].item_images[0].item_image_url} />
      <div className="info">
        <div className="name-price">
          <div className="info-name">{items[id - 1].item_name}</div>
          <div className="info-price">{items[id - 1].item_price}</div>
        </div>
        <div className="size">
          <div className="info-size-label">Выберите размер:</div>
          <select onChange={handleSelect} className="size-select">
          {sizes.filter((size) => size.typeId === items[0].typeId).map((size) =>     
              <option key={size.id} value={size.size_title}>
                {size.size_title}
              </option>
          )}
          </select>
        </div>
        <div className="details">
          <div className="detail">{items[id-1].item_description}</div>
          <div className="detail">{items[id-1].item_details}</div>
          <div className="detail">{items[id-1].item_care}</div>
        </div>
        <div className="basket-button op-08">Добавить<br />в корзину</div>
      </div>
    </div>
  );
} 

export default ItemPage;
