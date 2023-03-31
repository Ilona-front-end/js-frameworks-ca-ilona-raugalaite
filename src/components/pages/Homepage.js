import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchItems } from '../../store/modules/cartSlice';
import { Link } from 'react-router-dom';

export default function Homepage() {
  const { items } = useSelector(store => store.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems())
  }, [dispatch]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {items.map((item) => (
            <div key={item.id} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <Link to={`item/${item.id}`}>
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </Link>
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{item.title}</h3>
              <p className="mt-1 flex justify-between font-bold">
                <span className="text-lg text-blue-900">{item.discountedPrice} NOK</span>
                {/* <span className="text-lg line-through text-red-700">{item.price} NOK</span> */}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
