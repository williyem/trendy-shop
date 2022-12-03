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
  return (
    <div className="bg-white">
      <div>
        <div className="bg-white">
          <div className="max-w-2xl mx-auto pt-2 mb-4 md:pt-16  px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <form className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
              <div>
                <div>
                  <h2 className="text-lg font-medium text-gray-900">
                    Shipping information
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
                  <ul className="divide-y divide-gray-200">
                    {products.map((product, index) => (
                      <li key={index} className="flex  p-3">
                        <div className="flex-shrink-0">
                          <img
                            // src={product.images[0].src}
                            src={product.imageSrc}
                            alt={product.imageAlt}
                            className="w-10 rounded-md"
                          />
                        </div>

                        <div className="ml-6 flex-1 flex flex-col">
                          <div className="flex">
                            <div className="min-w-0 flex-1">
                              <h4 className="text-sm">
                                <a
                                  href={product.href}
                                  className="font-medium text-gray-700 hover:text-gray-800"
                                >
                                  {product.name}
                                </a>
                              </h4>
                              <p className="mt-1 text-sm text-gray-500">
                                {product.color}
                              </p>
                              <p className="mt-1 text-sm text-gray-500">
                                {product.size}
                              </p>
                            </div>
                          </div>

                          <div className="flex-1 pt-2 flex items-end justify-between">
                            <p className="mt-1 text-sm font-medium text-gray-900">
                              GH₵ {product.price}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <dl className="py-6 px-4 space-y-6 sm:px-6">
                    <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                      <dt className="text-base font-medium">Total</dt>
                      <dd className="text-base font-medium text-gray-900">
                        GH₵ 500
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
