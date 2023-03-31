import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchItem } from '../../store/modules/listSlice';

const ItemPage = () => {
  const { singleItem } = useSelector(state => state.list);
  const dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => {
    dispatch(fetchItem(id))
  }, [dispatch, id]);

  return (
    <div>
      <h1 className="text-cyan-700">Item: {singleItem.title}</h1>
    </div>
  );
}

export default ItemPage;

