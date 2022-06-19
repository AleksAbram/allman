import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import action from '../../redux/thunk/asyncItem';
import ItemList from './ItemList';

function ItemPage() {
  const dispatch = useDispatch();
  const itemError = useSelector((state) => state.item.error);

  useEffect(() => {
    console.log('useEffect');
    dispatch(action.itemsFetch());

    return () => {
      // TODO: очистить эффект отправки fetch-запроса (отменить запрос)
      // AbortController
    };
  }, [dispatch]);

  return (
    <>
      <h2>items</h2>
      {
        itemError
          ? <p>{itemError}</p>
          : <ItemList />
      }
    </>
  );
}

export default ItemPage;
