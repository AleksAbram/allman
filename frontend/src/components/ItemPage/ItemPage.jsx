import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { addToBasketAC } from "../../redux/actionCreators/basketAC";
import action from "../../redux/thunk/asyncItem";
import "./ItemPage.css";
import SimpleImageSlider from "react-simple-image-slider";


function ItemPage() {
  const {id} = useParams();
  const dispatch = useDispatch();
  const sizeSelect = useRef();
  const navigate = useNavigate()
  const sizes = useSelector((state) => state.item.sizes);
  const items = useSelector((state) => state.item.list);
  const [selectedSize, setSelectedSize] = useState('');
  const [item, setItem] = useState(null);
  const basket = useSelector((state) => state.basket.basket);
  const [buttonText, setButtonText] = useState(`Добавить \n в корзину`);
  const [buttonTextAdmin, setButtonTextAdmin] = useState(`Редактировать`);
  const user = useSelector((state) => state.user)
  console.log(user);
  function handleAdmin () {
    navigate(`/admin/items/${id}`)
  }

  const handleBasketAdd = () => {
    if (basket.some((item) => item.item.id === Number(id))) {
      return;
    }
    if (!selectedSize) {
      sizeSelect.current.style["border-color"]="red";

      sizeSelect.current.style.color="red";
      setTimeout(() => {
        sizeSelect.current.style["border-color"]="black";
        sizeSelect.current.style.color="black";
        setTimeout( () => {
          sizeSelect.current.style["border-color"]="red";
          sizeSelect.current.style.color="red";
        }, 1000)
      }, 1000)

      return;
    }
    const payload = {item, size: selectedSize};
    dispatch({type: 'ADD_TO_BASKET', payload})
    
  }

  useEffect(() => {
    if (basket.some((item) => item.item.id === Number(id))) {
      setButtonText('Уже \n в корзине')
    }
  }, [basket, id])


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
    sizeSelect.current.style["border-color"]="black";
    sizeSelect.current.style.color="black";
  }

  return (
    <div className="item-container">
      {item && <>
        <div className="slider-container">
        <SimpleImageSlider
          width={'34vw'}
          height={'42vw'}
          object-fit={'scale-down'}
          images={item?.item_images.map((image) => ({url: `http://localhost:4000${image.item_image_url}`}))}
          autoPlay={true}
          loop={true}
          slideDuration={2}
        />
        </div>
      {/* <img className="item-image" src={`http://localhost:4000${item.item_images[0].item_image_url}`} /> */}
      <div className="info">
        <div className="name-price">
          <div className="info-name">{item.item_name}</div>
          <div className="info-price">{item.item_price}</div>
        </div>
        <div className="size pointer">
          <div className="info-size-label">Выберите размер:</div>
          <select ref={sizeSelect} value={selectedSize} onChange={handleSelect} className="size-select">
          <option value={-1}>...</option>  
          {sizes.filter((size) => size.typeId === item.typeId).map((size) =>     
              <option key={size.id} value={size.size_title}>
                {size.size_title}
              </option>
          )}
          </select>
        </div>
        <div className="details">
          <div className="detail">{item.item_description}</div>
          <div className="detail">{item.item_details.split('<br>').join('\n')}</div>
          <div className="detail">{item.item_care}</div>
        </div>
        {
          user.user !== 'Admin' 
          ?
          (  
            <div onClick={handleBasketAdd} className="basket-button op-08 pointer">{buttonText}</div>
          )
          :
          (
            <div onClick={handleAdmin} className="basket-button op-08 pointer">{buttonTextAdmin}</div>
          )
        }
      </div>
      </>
}
    </div>
  );
} 

export default ItemPage;
