import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import action from '../../redux/thunk/asyncItem';
import ItemList from './ItemList';

function ItemListPage() {
  const dispatch = useDispatch();
  const { type } = useParams();
  const [path, setPath] = useState([]);
  //console.log(id);
  // const items = useSelector((state) => state.item.list);
  const types = useSelector((state) => state.item.types);
  const itemError = useSelector((state) => state.item.error);
  
  const getTypeById = (id) => {
   // console.log(types, id);
    return types.find((type) => type.id === id);
    // return types[types.find((type1) => type1.id === id)];
  } 

  const getParents = (type) => {
    const parentId = getTypeById(type).type_parent;
    if (parentId) {
      return `${getParents(parentId)} > ${getTypeById(parentId).type_name}`
    }
    else{
      return getTypeById(parentId).type_name;
    }
  }

  const getPath = (id) => {
    const parentId = getTypeById(id).type_parent;
    const name = getTypeById(id).type_name;
    if (!parentId)
      return [{id, name}];
    return [...getPath(parentId), {id, name}];
  } 


  const getItemPath = (id) => {
    return `${getParents(id)} > ${getTypeById(id).type_name}`;
   // return `> ${getTypeById(id).type_name}`

  }

  // const pathClick = (e) => {
  //   console.log(e);
  //   console.log(`http://localhost:4000/items/types/${e.target.id}`);
  // }

  useEffect(() => {
    console.log(type);
    dispatch(action.itemsFetch(type));
    dispatch(action.typesFetch());
    console.log("types: ", types);
    setPath(getPath(Number(type)));




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
            {/* <div className="path">
              {path.map((seg) => 
                <div id={seg.id} className="path-seg" key={seg.id} onClick={pathClick}>{seg.name}</div>
              )} 
            </div> */}
            <ItemList path={path}/>
          </>
      }
    </>
  );
}

export default ItemListPage;
