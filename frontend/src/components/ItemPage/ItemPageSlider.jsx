import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import action from "../../redux/thunk/asyncItem";
import "./ItemPage.css";
import SimpleImageSlider from "react-simple-image-slider";

function ItemPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const sizes = useSelector((state) => state.item.sizes);
  const items = useSelector((state) => state.item.list);
  const [selectedSize, setSelectedSize] = useState('');
  const [item, setItem] = useState(null);


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
      <div></div>
      {item && <>
      <div className="slider-container">
        <SimpleImageSlider
          style={{ margin: '0 auto', marginTop: '0px' }}
          width={'50vh'}
          height={'42vw'}
          object-fit={'scale-down'}
          images={[{ url: `http://localhost:4000${item.item_images[0].item_image_url}` }, { url: `http://localhost:4000${item.item_images[1].item_image_url}` }]}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
          loop={true}
          slideDuration={2}
        />
        </div>
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
          <div className="basket-button op-08">Добавить<br />в корзину</div>
        </div>
      </>
      }
    </div>
  );
}

export default ItemPage;
