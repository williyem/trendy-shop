/* This example requires Tailwind CSS v2.0+ */
import { useState } from "react";
import ModalOverlay from "../../../components/modal-overlay";
const products = [
  {
    id: 1,
    name: "Cold Brew Bottle",
    description:
      "This glass bottle comes with a mesh insert for steeping tea or cold-brewing coffee. Pour from any angle and remove the top for easy cleaning.",
    href: "#",
    quantity: 1,
    price: "GHS 32.00",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/confirmation-page-05-product-01.jpg",
    imageAlt: "Glass bottle with black plastic pour top and mesh insert.",
  },
];

export default function OrderItem() {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <>
      <ModalOverlay open={open} setOpen={setOpen}>
        <div className="bg-white">
          <div className="max-w-3xl mx-auto px-4 py-2 sm:px-6 sm:py-4 lg:px-8">
            <div className="max-w-xl">
              <h1 className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
                Thank you!
              </h1>
              <p className="mt-2 text-2xl font-extrabold tracking-tight sm:text-4xl">
                It's on the way!
              </p>
              <p className="mt-2 text-base text-gray-500">
                Your order #14034056 will arrive soon.
              </p>

              <dl className="mt-6 text-md flex font-medium">
                <dt className="text-gray-900">Rider's Contact:</dt>
                <dd className="text-indigo-600 mx-2">+233 256 2562544</dd>
              </dl>
            </div>

            <div className="mt-6 border-t border-gray-200">
              <h2 className="sr-only">Your order</h2>

              <h3 className="sr-only">Items</h3>
              {products.map((product) => (
                <div
                  key={product.id}
                  className="py-10 border-b border-gray-200 flex space-x-6"
                >
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="flex-none w-20 h-20 object-center object-cover bg-gray-100 rounded-lg sm:w-40 sm:h-40"
                  />
                  <div className="flex-auto flex flex-col">
                    <div>
                      <h4 className="font-medium text-gray-900">
                        <a href={product.href}>{product.name}</a>
                      </h4>
                      <p className="mt-2 text-sm text-gray-600">
                        {product.description}
                      </p>
                    </div>
                    <div className="mt-6 flex-1 flex items-end">
                      <dl className="flex text-sm divide-x divide-gray-200 space-x-4 sm:space-x-6">
                        <div className="flex">
                          <dt className="font-medium text-gray-900">
                            Quantity
                          </dt>
                          <dd className="ml-2 text-gray-700">
                            {product.quantity}
                          </dd>
                        </div>
                        <div className="pl-4 flex sm:pl-6">
                          <dt className="font-medium text-gray-900">Price</dt>
                          <dd className="ml-2 text-gray-700">
                            {product.price}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              ))}

              <div className="sm:ml-40 sm:pl-6">
                <h3 className="sr-only">Your information</h3>

                <h4 className="sr-only">Addresses</h4>
                <dl className="grid grid-cols-2 gap-x-6 text-sm py-5">
                  <div>
                    <dt className="font-medium text-gray-900">
                      Delivery Address:
                    </dt>
                    <dd className="mt-2 text-gray-700">
                      <address className="not-italic">
                        <span className="block">Emma Watson</span>
                        <span className="block">AB223 Oxford Street</span>
                        <span className="block">Achimota, Accra</span>
                      </address>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-900">
                      Payment Method:
                    </dt>
                    <dd className="mt-2 text-gray-700">
                      <address className="not-italic">
                        <span className="block">MTN Mobile Money</span>
                        <span className="block">+233 3456789</span>
                        <span className="block">John Packes</span>
                      </address>
                    </dd>
                  </div>
                </dl>

                <h4 className="sr-only">Payment</h4>
                {/* <dl className="grid grid-cols-2 gap-x-6 border-t border-gray-200 text-sm py-10">
                  <div>
                    <dt className="font-medium text-gray-900">
                      Payment method
                    </dt>
                    <dd className="mt-2 text-gray-700">
                      <p>Apple Pay</p>
                      <p>Mastercard</p>
                      <p>
                        <span aria-hidden="true">•••• </span>
                        <span className="sr-only">Ending in </span>1545
                      </p>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-900">
                      Shipping method
                    </dt>
                    <dd className="mt-2 text-gray-700">
                      <p>DHL</p>
                      <p>Takes up to 3 working days</p>
                    </dd>
                  </div>
                </dl> */}

                <h3 className="sr-only">Summary</h3>

                <dl className="space-y-3 border-t border-gray-200 text-sm pt-5">
                  <div className="flex justify-between">
                    <dt className="font-medium text-gray-900">Subtotal</dt>
                    <dd className="text-gray-700">GHS 36.00</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="flex font-medium text-gray-900">
                      Discount
                      <span className="rounded-full bg-gray-200 text-xs text-gray-600 py-0.5 px-2 ml-2">
                        CUSTOMER
                      </span>
                    </dt>
                    <dd className="text-gray-700">-GHS 18.00 (50%)</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="font-medium text-gray-900">Delivery</dt>
                    <dd className="text-gray-700">GHS 5.00</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="font-medium text-gray-900">Total</dt>
                    <dd className="text-gray-900">GHS 23.00</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </ModalOverlay>
    </>
  );
}
