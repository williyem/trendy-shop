import { Fragment, useState } from "react";
import { Dialog, Tab, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";

// import CollectionSection from "../collection-section/collection-section";
import Slider from "react-slick";
import {
  classNames,
  currencies,
  navigation,
  settings,
} from "../../helpers/ui-data";
import CategorySection from "./category-section/category-section";
const heroImg = require("../../assets/images/hero.jpg");
const heroImg2 = require("../../assets/images/feature3.jpg");
const heroImg3 = require("../../assets/images/feature2.jpg");

const HeroSection: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 lg:hidden"
          onClose={setMobileMenuOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
              <div className="px-4 pt-5 pb-2 flex">
                <button
                  type="button"
                  className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Links */}
              <Tab.Group as="div" className="mt-2">
                <div className="border-b border-gray-200">
                  <Tab.List className="-mb-px flex px-4 space-x-8">
                    {navigation?.categories.map((category) => (
                      <Tab
                        key={category.name}
                        className={({ selected }) =>
                          classNames(
                            selected
                              ? "text-indigo-600 border-indigo-600"
                              : "text-gray-900 border-transparent",
                            "flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium"
                          )
                        }
                      >
                        {category.name}
                      </Tab>
                    ))}
                  </Tab.List>
                </div>
                <Tab.Panels as={Fragment}>
                  {navigation.categories.map((category) => (
                    <Tab.Panel
                      key={category.name}
                      className="px-4 py-6 space-y-12"
                    >
                      <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                        {category?.featured?.map((item) => (
                          <div key={item.name} className="group relative">
                            <div className="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                              <img
                                src={item.imageSrc}
                                alt={item.imageAlt}
                                className="object-center object-cover"
                              />
                            </div>
                            <a
                              href={item.href}
                              className="mt-6 block text-sm font-medium text-gray-900"
                            >
                              <span
                                className="absolute z-10 inset-0"
                                aria-hidden="true"
                              />
                              {item.name}
                            </a>
                            <p
                              aria-hidden="true"
                              className="mt-1 text-sm text-gray-500"
                            >
                              Shop now
                            </p>
                          </div>
                        ))}
                      </div>
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>

              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                {navigation.pages.map((page) => (
                  <div key={page.name} className="flow-root">
                    <a
                      href={page.href}
                      className="-m-2 p-2 block font-medium text-gray-900"
                    >
                      {page.name}
                    </a>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                <div className="flow-root">
                  <span className="-m-2 p-2 block font-medium text-gray-900">
                    Create an account
                  </span>
                </div>
                <div className="flow-root">
                  <span className="-m-2 p-2 block font-medium text-gray-900">
                    Sign in
                  </span>
                </div>
              </div>

              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                {/* Currency selector */}
                <form>
                  <div className="inline-block">
                    <label htmlFor="mobile-currency" className="sr-only">
                      Currency
                    </label>
                    <div className="-ml-2 group relative border-transparent rounded-md focus-within:ring-2 focus-within:ring-white">
                      <select
                        id="mobile-currency"
                        name="currency"
                        className="bg-none border-transparent rounded-md py-0.5 pl-2 pr-5 flex items-center text-sm font-medium text-gray-700 group-hover:text-gray-800 focus:outline-none focus:ring-0 focus:border-transparent"
                      >
                        {currencies.map((currency) => (
                          <option key={currency}>{currency}</option>
                        ))}
                      </select>
                      <div className="absolute right-0 inset-y-0 flex items-center pointer-events-none">
                        <svg
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                          className="w-5 h-5 text-gray-500"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M6 8l4 4 4-4"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      {/* Hero section */}
      <div className="max-w-full">
        <Slider {...settings}>
          <div className="relative bg-gray-900">
            {/* Decorative image and overlay */}
            <div
              aria-hidden="true"
              className="absolute inset-0 overflow-hidden"
            >
              <img
                src={heroImg}
                alt=""
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gray-900 opacity-60"
            />

            {/* Navigation */}

            <div className="relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-64 lg:px-0">
              <h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-6xl">
                New arrivals are here
              </h1>
              <p className="mt-4 text-xl text-white">
                The new arrivals have, well, newly arrived. Check out the latest
                options from our summer small-batch release while they're still
                in stock.
              </p>
              <span className="mt-8 inline-block bg-mainPink border-[2px] border-white py-3 px-16 text-2xl font-medium text-white hover:bg-gray-100 hover:text-mainPink">
                SHOP
              </span>
            </div>
          </div>
          <div className="relative bg-gray-900">
            {/* Decorative image and overlay */}
            <div
              aria-hidden="true"
              className="absolute inset-0 overflow-hidden"
            >
              <img
                src={heroImg2}
                alt=""
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gray-900 opacity-60"
            />

            {/* Navigation */}

            <div className="relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-64 lg:px-0">
              <h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-6xl">
                New arrivals are here
              </h1>
              <p className="mt-4 text-xl text-white">
                The new arrivals have, well, newly arrived. Check out the latest
                options from our summer small-batch release while they're still
                in stock.
              </p>
              <span className="mt-8 inline-block bg-mainPink border-[2px] border-white py-3 px-16 text-2xl font-medium text-white hover:bg-gray-100 hover:text-mainPink">
                SHOP
              </span>
            </div>
          </div>
          <div className="relative bg-gray-900">
            {/* Decorative image and overlay */}
            <div
              aria-hidden="true"
              className="absolute inset-0 overflow-hidden"
            >
              <img
                src={heroImg3}
                alt=""
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gray-900 opacity-60"
            />

            {/* Navigation */}

            <div className="relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-64 lg:px-0">
              <h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-6xl">
                New arrivals are here
              </h1>
              <p className="mt-4 text-xl text-white">
                The new arrivals have, well, newly arrived. Check out the latest
                options from our summer small-batch release while they're still
                in stock.
              </p>
              <span className="mt-8 inline-block bg-mainPink border-[2px] border-white py-3 px-16 text-2xl font-medium text-white hover:bg-gray-100 hover:text-mainPink">
                SHOP
              </span>
            </div>
          </div>
        </Slider>
      </div>

      <main className="my-4">
        {/* Category section */}
        <CategorySection />
      </main>
    </div>
  );
};

export default HeroSection;
