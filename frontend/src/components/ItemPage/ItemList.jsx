import { useSelector } from 'react-redux';
import ItemCard from './ItemCard';
import "./ItemList.css";

function ItemList() {
  const items = useSelector((state) => state.item.list);

  return (
        items.map((item) => <ItemCard item={item} key={item.id} />)
  );
}

export default ItemList;
