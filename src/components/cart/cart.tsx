import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import useCart from "../../hooks/useCart";
import { removeFromCart, setCart } from "../../redux/slices/cart-slice";
import { useNavigate } from "react-router-dom";

interface props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Cart({ open, setOpen }: props) {
  const { cartItems, total } = useCart();

  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Shopping cart
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <svg
                              className="h-6 w-6"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul className="-my-6 divide-y divide-gray-200">
                            {cartItems.map((product) => (
                              <li key={product.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={product?.photos[0]}
                                    alt={product.description}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href={product.href}>
                                          {product.name}
                                        </a>
                                      </h3>
                                      <p className="ml-4">
                                        GHS {parseInt(product.price).toFixed(2)}
                                      </p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {product.category}
                                    </p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-700 ">
                                      Qty{" "}
                                      <select
                                        value={product?.quantity}
                                        className=" max-w-full rounded-sm border border-gray-400  px-2 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-mainPink focus:border-mainPink sm:text-sm"
                                        onChange={(e) => {
                                          const cartItemsCopy = [...cartItems];

                                          const newProduct = {
                                            ...product,
                                            quantity: parseFloat(
                                              e.target.value
                                            ),
                                          };

                                          const indexOfProduct =
                                            cartItems.findIndex(
                                              (item: any) =>
                                                item.id === product.id
                                            );

                                          cartItemsCopy.splice(
                                            indexOfProduct,
                                            1,
                                            newProduct
                                          );
                                          dispatch(setCart(cartItemsCopy));
                                        }}
                                      >
                                        {Array.from(
                                          { length: product?.inStock },
                                          (_, i) => i + 1
                                        ).map((num: any) => {
                                          return (
                                            <>
                                              <option
                                                value={num}
                                                key={num}
                                                selected={
                                                  product?.quantity === num
                                                }
                                              >
                                                {num}
                                              </option>
                                            </>
                                          );
                                        })}
                                      </select>
                                    </p>

                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-mainPink hover:text-deepPink"
                                        onClick={() =>
                                          dispatch(removeFromCart(product))
                                        }
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>GHS {total.toFixed(2)}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Delivery Fee yet to be added
                      </p>
                      <button
                        disabled={cartItems.length === 0}
                        className="mt-6 disabled:bg-gray-500 disabled:cursor-not-allowed w-full flex items-center justify-center rounded-md border border-transparent bg-mainPink px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-deepPink "
                        onClick={() => {
                          navigate("/checkout");
                        }}
                      >
                        {/* <span className="flex items-center justify-center rounded-md border border-transparent bg-mainPink px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-deepPink"> */}
                        Checkout
                        {/* </span> */}
                      </button>

                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-mainPink"
                            onClick={() => setOpen(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
