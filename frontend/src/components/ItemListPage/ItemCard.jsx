import "./ItemList.css"

function ItemCard({ item }) {
  return (
    <div className="item-card">
      <img className="item-img" src={item.item_images[0].item_image_url} alt="dd" />
      <div className="item-description">{item.item_description}</div>
      <div className="item-price">{item.item_price}</div>
    </div>
  );
}

export default ItemCard;
