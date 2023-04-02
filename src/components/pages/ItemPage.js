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

  // Discount calculation
  let discountOnItem = 0;
  if (singleItem.price && singleItem.discountedPrice) {
    discountOnItem = Math.round(singleItem.price - singleItem.discountedPrice);
  }

  return (
    <>
      <div className="bg-white">
        <div className="pb-16 pt-6 sm:pb-24">
          <div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
              <div className="lg:col-span-5 lg:col-start-8">
                <div className="flex justify-between">
                  <h1 className="text-xl font-medium text-gray-900">{singleItem.title}</h1>
                  <p className="text-xl font-medium text-gray-900">{singleItem.discountedPrice} NOK</p>
                </div>
                {/* Reviews */}
                <div className="mt-4">
                  <h2 className="sr-only">Rating</h2>
                  <div className="flex items-center">
                    <p className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                      Average rating {singleItem.rating} stars
                      <span className="sr-only">stars</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
                <h2 className="sr-only">Image</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 lg:gap-8">
                  <img key={singleItem.id} src={singleItem.imageUrl} alt={singleItem.title} className="lg:col-span-2 lg:row-span-2" />
                </div>
              </div>

              <div className="mt-8 lg:col-span-5">
                <button
                  type="submit"
                  className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to cart
                </button>

                {/* Discount */}
                {discountOnItem > 0 && (
                  <div className="mt-10">
                    <h2 className="text-lg font-medium text-gray-900">Discount:</h2>
                    <div className="text-sm font-medium text-gray-700">Price went down and you save <span className="text-red-700">{discountOnItem}</span> NOK</div>
                  </div>
                )}

                {/* Product details */}
                <div className="mt-4">
                  <h2 className="text-lg font-medium text-gray-900">Description:</h2>
                  <div className="text-sm font-medium text-gray-700">{singleItem.description}</div>
                </div>

                {/* Reviews in details */}
                <div className="mt-4">
                  <h2 className="text-lg font-medium text-gray-900 mb-2">Recent reviews:</h2>
                  <div className="flex items-center">
                    <div>
                      {/* {singleItem.reviews.map((rev) => (
                        <div key={rev.id} className="group mb-4">
                          <p className="text-sm text-gray-900 flex items-center mb-2">
                            <span className="inline-block h-8 w-8 overflow-hidden rounded-full bg-gray-100">
                              <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                              </svg>
                            </span>
                            <span className="px-4">{rev.username}</span>
                          </p>
                          <p className="text-sm font-medium text-yellow-600">{rev.rating} stars</p>
                          <p className="text-sm font-medium text-gray-700">Comment: {rev.description}</p>
                        </div>
                      ))} */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemPage;
