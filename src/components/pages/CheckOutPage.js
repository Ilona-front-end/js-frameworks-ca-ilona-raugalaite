import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteOrder } from "../../store/modules/basketSlice";
import { Link } from "react-router-dom";

export default function CheckOutPage() {
  const dispatch = useDispatch();
  const {itemsInBasket, amountOfItemsInBasket} = useSelector((state) => state.basket);
  // console.log('itemsInBasket', itemsInBasket);

// sum price of basket order
  let sumOfPrice = itemsInBasket.reduce((acc, item) => {
    return acc + item.discountedPrice;
  }, 0);
  sumOfPrice = Math.round(sumOfPrice);
  console.log('sumOfPrice', sumOfPrice);


  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:px-0">
        <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>
        {/* If-Else with Conditional Operator  ? : */}
        {amountOfItemsInBasket >= 1 
        ? <form className="mt-12">
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
                        <p className="ml-4 text-sm font-medium text-gray-900">{Math.round(itemInBasket.discountedPrice)} NOK</p>
                      </div>
                      {itemInBasket.discountedPrice === itemInBasket.price ? <span></span> : <p className="mt-1 text-sm text-gray-500">Price before {Math.round(itemInBasket.price)} NOK</p>}
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
                  <dd className="ml-4 text-base font-medium text-gray-900">{sumOfPrice} NOK</dd>
                </div>
              </dl>
              <p className="mt-1 text-sm text-gray-500">Shipping and taxes will be calculated at checkout.</p>
            </div>
            {/* Check out button */}
            <div className="mt-10">
              <Link to="/congratulations">
                <button
                  type="button"
                  className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                  onClick={()=>dispatch(deleteOrder(itemsInBasket))}
                >
                  Checkout
                </button>
              </Link>
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
        : <div className="relative isolate overflow-hidden pt-14">
          <div
            className="absolute inset-x-0 -bottom-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-bottom-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-32 lg:py-48">
            <div className="text-center">
              <h1 className="mx-6 text-4xl font-bold tracking-tight text-black sm:text-6xl">
                No orders at the moment placed
              </h1>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <div className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">
                  <Link to="/">Browse the gifts</Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
        }   
      </div>
    </div>
  )
}
