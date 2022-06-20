import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import action from '../../redux/thunk/asyncItem';
import ItemList from './ItemList';

function ItemPage() {
  const dispatch = useDispatch();
  const itemError = useSelector((state) => state.item.error);

  useEffect(() => {
    console.log('useEffect');
    dispatch(action.itemsFetch(1));

    return () => {
      // TODO: очистить эффект отправки fetch-запроса (отменить запрос)
      // AbortController
    };
  }, [dispatch]);

  return (
    <>
      {
        itemError
          ? <p>{itemError}</p>
          : <ItemList />
      }
    </>
  );
}

export default ItemPage;
