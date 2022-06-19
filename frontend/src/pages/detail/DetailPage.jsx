import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const mockData = {
  shorts: {
    title: 'Рубашки',
    description: 'Рубашки от мистера Алекса!'
  }
}
const DetailPage = () => {
  const [data, setData] = useState({})
  const {id} = useParams()

  useEffect(() => {
    setData(mockData[id])
  }, [id])

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
};

export default DetailPage;