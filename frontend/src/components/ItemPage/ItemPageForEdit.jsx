import { useRef, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import action from "../../redux/thunk/asyncItem";
import "./ItemPage.css";

function ItemPageForEdit() {
  const {id} = useParams();
  const form = useRef();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.item.list);
  const [item, setItem] = useState(null);
  const [image, setImage] = useState(null);
  const [newImage, setNewImage] = useState(null);


  useEffect(() => {

    if (id === '0') {
      const newItem = {
        item_name: '',
        item_price: '',
        item_description: '',
        item_details: '',
        item_care: '',
        item_images: [{item_image_url: '/uploads/image_new_item.PNG'}],
        item_type: 5,
      }
      setItem(newItem);
    } else {
        const currentItem = items.filter((item) => item.id === Number(id))[0];
        if (!currentItem) {
          dispatch(action.itemFetch(id));
        } else {
          setItem(currentItem);
        }
      }
  }, [items, dispatch, id])


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

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    fetch(`http://localhost:4000/api/items/${id}`, {
      method: 'POST',
      body: formData,
    }).then((res) => res.json())
      .then((data) => {
        console.log(data);
      }).catch(error => console.log(error.message));
  };


  return (
    <>
      {item && <div className="item-container">
      <img ref={image} className="item-image" src={newImage ? newImage : `http://localhost:4000${item.item_images[0].item_image_url}`} />
      <div className="edit-info">
        <form onSubmit={submitHandler} encType="multipart/form-data" id="itemForm" className="item-form">
        
            <input name="item_name" className="item-input" value={item.item_name} onChange={changeHandler} type="text" placeholder="наименование"/>
            <input name="item_price" className="item-input" value={item.item_price.replace(/\D+/g, '')} onChange={changeHandler} placeholder="цена"/>
            <textarea rows="4" className="item-input" onChange={changeHandler} name="item_description" value={item.item_description} placeholder="описание товара"/>
            <textarea id="item_details" rows="4" name="item_details" className="item-input" value={item.item_details} onChange={changeHandler} type="text" placeholder="детали"/>
            <input name="item_care" className="item-input" value={item.item_care} onChange={changeHandler} type="text" placeholder="инструкции по уходу"/>
            <input name="item_images" className="item-input custom-file-input" type="file" multiple={true} onChange={fileChange}accept="image/png, image/jpg, image/gif, image/jpeg"/>

            <button type="Submit" className="save-button op-08">Сохранить</button>
        </form>
      </div>
      </div>
      }
    </>
  );
} 

export default ItemPageForEdit;
