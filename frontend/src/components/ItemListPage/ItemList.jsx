import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import ItemCard from './ItemCard';
import "./ItemList.css";
import Path from './Path';

function ItemList({path}) {
  const items = useSelector((state) => state.item.list);
  // const types = useSelector((state) => state.item.types);


  return (
    <div className="list-container">
      <Path path={path}/>
      <div className="items-list">
          {items.map((item) => <ItemCard item={item} key={item.id}/>)}
      </div>
    </div>
  );
}

export default ItemList;
