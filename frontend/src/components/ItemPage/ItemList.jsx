import { useSelector } from 'react-redux';

function ItemList() {
  const items = useSelector((state) => state.item.list);

  return (
    <ul>
      {
        items.map((item) => (
          <>
            <li key={item.id}>{item.item_description}</li>
            <img src={item.item_images[0].item_image_url} />
          </>
        ))
      }
    </ul>
  );
}

export default ItemList;
