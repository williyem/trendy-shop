import useCart from "../../hooks/useCart";
import { useAppDispatch } from "../../redux/hooks";
import { removeFromCart, setCart } from "../../redux/slices/cart-slice";

const products = [
  {
    id: 1,
    name: "High Wall Tote",
    href: "#",
    price: "$210.00",
    color: "White and black",
    size: "15L",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/checkout-page-07-product-01.jpg",
    imageAlt:
      "Front of zip tote bag with white canvas, white handles, and black drawstring top.",
  },
];

export default function Checkout() {
  const { cartItems, total } = useCart();

  const dispatch = useAppDispatch();
  return (
    <div className="bg-white">
      <div>
        <div className="bg-white">
          <div className="max-w-2xl mx-auto pt-2 mb-4 md:pt-16  px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <form className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
              <div>
                <div>
                  <h2 className="text-lg font-medium text-gray-900">
                    Buyer information
                  </h2>
                  <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Full Name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          className="block w-full p-2 border-b border-gray-600  shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {/* <ErrorMessage errors={errors} name="input.name" /> */}
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Address
                      </label>
                      <div className="mt-1">
                        <input
                          // {...register("input.address", {
                          //   required: "Required",
                          // })}
                          type="text"
                          className="block w-full p-2 border-b border-gray-600 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {/* <ErrorMessage errors={errors} name="input.address" /> */}
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone
                      </label>
                      <div className="mt-1">
                        <input
                          // {...register("input.phone", {
                          //   required: "Required",
                          // })}
                          type="text"
                          className="border-b border-gray-600 block w-full p-2  shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {/* <ErrorMessage errors={errors} name="input.phone" /> */}
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="landmark"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Land Mark
                      </label>
                      <div className="mt-1">
                        <input
                          // {...register("input.landMark", {
                          //   required: "Required",
                          // })}
                          type="text"
                          className="block w-full p-2 border-b border-gray-600  shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {/* <ErrorMessage errors={errors} name="input.landMark" /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 lg:mt-0">
                <h2 className="text-lg font-medium text-gray-900">
                  Order summary
                </h2>

                <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                  <ul className="divide-y divide-gray-200 sm:max-w-[90%] mx-auto">
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
                                <a href={product.href}>{product.name}</a>
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
                                    quantity: parseFloat(e.target.value),
                                  };

                                  const indexOfProduct = cartItems.findIndex(
                                    (item) => item.id === product.id
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
                                        selected={product?.quantity === num}
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
                  <dl className="py-6 px-4 space-y-6 sm:px-6">
                    <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                      <dt className="text-base font-medium">Total</dt>
                      <dd className="text-base font-medium text-gray-900">
                        GH₵ {total.toFixed(2)}
                      </dd>
                    </div>
                  </dl>

                  <div className="px-2 flex items-center cursor-pointer">
                    <img
                      src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                      className="h-8 ml-3"
                      alt="secure payment"
                    />
                    <img
                      src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png"
                      className="h-8"
                      alt="secure payment"
                    />
                  </div>

                  <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <button
                      type="submit"
                      className="disabled:bg-gray-500 disabled: w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-mainPink hover:bg-darkPink focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <span>checkout</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
