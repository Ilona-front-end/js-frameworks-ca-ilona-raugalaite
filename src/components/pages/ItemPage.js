// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchItem } from '../../store/modules/listSlice';

// export default function ItemPage() {
//   const { items } = useSelector(store => store.list);
//   const dispatch = useDispatch();
//   let { id } = useParams();

//   useEffect(() => {
//     dispatch(fetchItem(id))
//   }, [dispatch, id]);

//   return (
//     <div>
//       <h1>Item: {items.title}</h1>
//     </div>
//   );
// }

// export default ItemPage;

