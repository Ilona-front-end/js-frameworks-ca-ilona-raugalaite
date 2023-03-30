import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchItems } from '../../store/modules/cartSlice';

function Homepage() {
  const { items } = useSelector(store => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems())
  }, [dispatch]);

  return (
    <>
    </>
  );
}

export default Homepage;
