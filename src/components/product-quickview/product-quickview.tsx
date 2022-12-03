import { Fragment, useState } from "react";
import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import { classNames } from "./../../helpers/ui-data";
import ModalOverlay from "../modal-overlay";
import CloseButton from "./close-button";

const product = {
  name: "Zip Tote Basket",
  price: "$220",
  rating: 3.9,
  href: "#",
  description:
    "The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.",
  imageSrc:
    "https://tailwindui.com/img/ecommerce-images/product-page-03-product-04.jpg",
  imageAlt: "Back angled view with bag open and handles to the side.",
  colors: [
    {
      name: "Washed Black",
      bgColor: "bg-gray-700",
      selectedColor: "ring-gray-700",
    },
    { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
    {
      name: "Washed Gray",
      bgColor: "bg-gray-500",
      selectedColor: "ring-gray-500",
    },
  ],
};

export default function ProductQuickview() {
  const [open, setOpen] = useState(true);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <>
      <ModalOverlay open={open} setOpen={setOpen}>
        <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
          <div className="sm:col-span-4 lg:col-span-5">
            <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="object-center object-cover"
              />
            </div>
          </div>
          <div className="sm:col-span-8 lg:col-span-7">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">
              {product.name}
            </h2>

            <section aria-labelledby="information-heading" className="mt-3">
              <h3 id="information-heading" className="sr-only">
                Product information
              </h3>

              <p className="text-2xl text-gray-900">{product.price}</p>

              {/* Reviews */}
              <div className="mt-3">
                <h4 className="sr-only">Reviews</h4>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={`{${
                          product.rating > rating
                            ? "text-gray-400"
                            : "text-gray-200"
                        } h-5 w-5 flex-shrink-0`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{product.rating} out of 5 stars</p>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="sr-only">Description</h4>

                <p className="text-sm text-gray-700">{product.description}</p>
              </div>
            </section>

            <section aria-labelledby="options-heading" className="mt-6">
              <h3 id="options-heading" className="sr-only">
                Product options
              </h3>

              <form>
                {/* Colors */}
                <div>
                  <h4 className="text-sm text-gray-600">Color</h4>

                  <RadioGroup
                    value={selectedColor}
                    onChange={setSelectedColor}
                    className="mt-2"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a color
                    </RadioGroup.Label>
                    <div className="flex items-center space-x-3">
                      {product.colors.map((color) => (
                        <RadioGroup.Option
                          key={color.name}
                          value={color}
                          className={({ active, checked }) =>
                            classNames(
                              color.selectedColor,
                              active && checked ? "ring ring-offset-1" : "",
                              !active && checked ? "ring-2" : "",
                              "-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
                            )
                          }
                        >
                          <RadioGroup.Label as="p" className="sr-only">
                            {color.name}
                          </RadioGroup.Label>
                          <span
                            aria-hidden="true"
                            className={`${color.bgColor} h-8 w-8 border border-black border-opacity-10 rounded-full`}
                          />
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full bg-mainPink border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-deepPink focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-deepPink"
                  >
                    Add to bag
                  </button>
                </div>

                <p className="absolute top-4 left-4 text-center sm:static sm:mt-6">
                  <a
                    href={product.href}
                    className="font-medium text-mainPink hover:text-deepPink"
                  >
                    View full details
                  </a>
                </p>
              </form>
            </section>
          </div>
        </div>
      </ModalOverlay>
    </>
  );
}
