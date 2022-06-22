import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import action from '../../redux/thunk/asyncItem';
import ItemList from './ItemList';

function ItemListPage() {
  const dispatch = useDispatch();
  const { type } = useParams();
  //console.log(id);
  // const items = useSelector((state) => state.item.list);
  const types = useSelector((state) => state.item.types);
  const itemError = useSelector((state) => state.item.error);
  
  const getTypeById = (id) => {
    console.log(types, id);
    console.log(types.find((type) => type.id === id));
    return types[types.find((type) => type.id === id)];
  } 

  const getParents = (type) => {
    const parentId = getTypeById(type).type_parent;
    if (parentId) {
      return `${getParents(parentId)} > ${getTypeById(parentId).type_name}`
    }
    
  }
  const getItemPath = () => {
    return `${getParents(type)} > ${getTypeById(type).type_name}`
  }

  useEffect(() => {
    console.log(type);
    dispatch(action.itemsFetch(type));
    dispatch(action.typesFetch());
    console.log("types: ", types);
    //console.log(getItemPath(type));


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
          :
          <> 

            <ItemList />
          </>
      }
    </>
  );
}

export default ItemListPage;
