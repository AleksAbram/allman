import './Basket.css';
function BasketRow({item, size}) {


  return (
    <div className="basket-row">
      <img src={`http://localhost:4000/${item.item_images[0].item_image_url}`} className="basket-item-image" />
      <div className="basket-item-info">
        <div className="basket-item-name">{item.item_name}</div>
        <div className="basket-item-price">{item.item_price}</div>
        <div className="basket-item-size">Размер: {size}</div>
      </div>
      <div className="basket-delete-button">X</div>
    </div>
  );
}

export default BasketRow;
