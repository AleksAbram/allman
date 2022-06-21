import { useNavigate } from "react-router-dom";
import "./ItemList.css"

function ItemCard({ item }) {

  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(`/items/${item.id}`);
  }
  return (
    <div className="item-card">
      <img onClick={clickHandler} className="item-img" src={`http://localhost:4000${item.item_images[0].item_image_url}`} alt="dd" />
      <div className="item-description">{item.item_description}</div>
      <div className="item-price">{item.item_price}</div>
    </div>
  );
}

export default ItemCard;
