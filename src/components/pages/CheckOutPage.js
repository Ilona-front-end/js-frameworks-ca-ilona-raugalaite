import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteOrder } from "../../store/modules/basketSlice";
import { Link } from "react-router-dom";

export default function CheckOutPage() {
  const dispatch = useDispatch();
  const {itemsInBasket, amountOfItemsInBasket} = useSelector((state) => state.basket);
  // console.log('itemsInBasket', itemsInBasket);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:px-0">
        <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>
        
        {amountOfItemsInBasket === 0 && <div>empty</div>}
        {amountOfItemsInBasket >= 1 && 
        <form className="mt-12">
          <section aria-labelledby="cart-heading">
            <h2 id="cart-heading" className="sr-only">Items in your shopping cart</h2>

            <div className="divide-y divide-gray-200 border-b border-t border-gray-200">
              {itemsInBasket.map((itemInBasket, index) => (
                <div key={index} className="flex py-6">
                  <div className="flex-shrink-0">
                    <img
                      src={itemInBasket.imageUrl}
                      alt={itemInBasket.title}
                      className="h-24 w-24 rounded-md object-cover object-center sm:h-32 sm:w-32"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col sm:ml-6">
                    <div>
                      <div className="flex justify-between">
                        <h4 className="text-sm"><span className="font-medium text-gray-700 hover:text-gray-800">{itemInBasket.title}</span></h4>
                        <p className="ml-4 text-sm font-medium text-gray-900">{itemInBasket.discountedPrice} NOK</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">Discounted Price {itemInBasket.discountedPrice}</p>
                      <p className="mt-1 text-sm text-gray-500">Price before {itemInBasket.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Order summary */}
          <section aria-labelledby="summary-heading" className="mt-10">
            <h2 id="summary-heading" className="sr-only">Order summary</h2>

            <div>
              <dl className="space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-base font-medium text-gray-900">Subtotal</dt>
                  <dd className="ml-4 text-base font-medium text-gray-900">$96.00</dd>
                </div>
              </dl>
              <p className="mt-1 text-sm text-gray-500">Shipping and taxes will be calculated at checkout.</p>
            </div>
            {/* Check out button */}
            <div className="mt-10">
              <button
                type="submit"
                className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Checkout
              </button>
            </div>
            {/* Delete button */}
            <div className="mt-10">
              <button
                type="button"
                className="w-full rounded-md border border-transparent bg-red-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                onClick={()=>dispatch(deleteOrder(itemsInBasket))}
              >
                Delete order
              </button>
            </div>

            <div className="mt-6 text-center text-sm">
              <div>
                <span className="mx-2">or</span>
                <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </Link>
              </div>
            </div>
          </section>

        </form>
        }   
      </div>
    </div>
  )
}