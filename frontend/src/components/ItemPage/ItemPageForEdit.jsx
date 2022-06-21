import { useRef, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import action from "../../redux/thunk/asyncItem";
import {useForm} from 'react-hook-form';
import "./ItemPage.css";

function ItemPageForEdit() {
  const {id} = useParams();
  const image = useRef();
  const dispatch = useDispatch();
  const sizes = useSelector((state) => state.item.sizes);
  const items = useSelector((state) => state.item.list);
  const [selectedSize, setSelectedSize] = useState('');
  const [item, setItem] = useState(null);
  const { register, handleSubmit } = useForm();
  const [newImage, setNewImage] = useState(null);

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

  const changeHandler = (e) => {
    setItem((prevState) => {
      const newItem = {...prevState};
      newItem[e.target.name] = e.target.value;
      return newItem;
  })
}

  const fileChange = (e) => {
    setNewImage(window.URL.createObjectURL(e.target.files[0]))
  }

  return (
    <>
      {item && <div className="item-container">
      <img ref={image} className="item-image" src={newImage ? newImage : item.item_images[0].item_image_url} />
      <div className="edit-info">
        <form encType="multipart/form-data" id="itemForm" className="item-form" onSubmit={handleSubmit(handleSubmit)}>
        
            <input name="item_name" className="item-input" value={item.item_name} onChange={changeHandler} type="text"/>
            <input name="item_price" className="item-input" value={item.item_price} onChange={changeHandler}/>
            <textarea rows="4" className="item-input" onChange={changeHandler} name="item_description" value={item.item_description}/>
            <textarea rows="4" name="item_details" className="item-input" value={item.item_details} onChange={changeHandler} type="text"/>
            <input name="item_care" className="item-input" value={item.item_care} onChange={changeHandler} type="text"/>
            <input name="item_images" className="item-input custom-file-input" type="file" multiple={true} onChange={fileChange}accept="image/png, image/jpg, image/gif, image/jpeg"/>

        </form>
            <button type="Submit" className="save-button op-08">Сохранить</button>
      </div>
      </div>
      }
    </>
  );
} 

export default ItemPageForEdit;
