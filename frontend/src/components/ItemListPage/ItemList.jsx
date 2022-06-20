import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ItemCard from './ItemCard';
import "./ItemList.css";

function ItemList() {
  const items = useSelector((state) => state.item.list);
  const types = useSelector((state) => state.item.types);


  return (
    <div className="items-list">
        {items.map((item) => <ItemCard item={item} key={item.id}/>)}
    </div>
  );
}

export default ItemList;
