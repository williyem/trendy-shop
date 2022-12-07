import { classNames, currencies } from "../../../helpers/ui-data";

import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import { MenuIcon, ShoppingCartIcon, XIcon } from "@heroicons/react/outline";
import TopNotificationBar from "./TopNotificationBar";
import useCart from "../../../hooks/useCart";
import Cart from "../../../components/cart/cart";

// const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP']
const navigation = {
  categories: [
    {
      name: "Clothing",
      featured: [
        { name: "men", href: "#" },
        { name: "women", href: "#" },
        { name: "Sneakers", href: "#" },
      ],
      collection: [
        { name: "Everything", href: "#" },
        { name: "Core", href: "#" },
        { name: "New Arrivals", href: "#" },
        { name: "Sale", href: "#" },
      ],
      categories: [
        { name: "Unisex", href: "#" },
        { name: "Men", href: "#" },
        // { name: "Bottoms", href: "#" },
        { name: "Women", href: "#" },
        // { name: "Accessories", href: "#" },
      ],
      brands: [
        { name: "Polo", href: "#" },
        { name: "Nike", href: "#" },
        { name: "Victoria Secret", href: "#" },
        { name: "Adidas", href: "#" },
        { name: "others", href: "#" },
      ],
    },
    {
      name: "Accessories",
      featured: [
        { name: "Casual", href: "#" },
        { name: "Outdoor", href: "#" },
      ],
      collection: [
        { name: "Everything", href: "#" },
        { name: "Core", href: "#" },
        { name: "New Arrivals", href: "#" },
        { name: "Sale", href: "#" },
      ],
      categories: [
        { name: "Artwork Tees", href: "#" },
        { name: "Pants", href: "#" },
        { name: "Accessories", href: "#" },
        { name: "Boxers", href: "#" },
        { name: "Basic Tees", href: "#" },
      ],
      brands: [
        { name: "Significant Other", href: "#" },
        { name: "My Way", href: "#" },
        { name: "Counterfeit", href: "#" },
        { name: "Re-Arranged", href: "#" },
        { name: "Full Nelson", href: "#" },
      ],
    },
  ],
  pages: [
    { name: "Others", href: "/products" },
    // { name: "Stores", href: "#" },
  ],
};

export default function Topbar() {
  const [showTopNotificationBar, setShowTopNotificationBar] = useState(true);
  const [open, setOpen] = useState<boolean>(false);
  const [showCart, setShowCart] = useState<boolean>(false);

  const { cartLength } = useCart();

  return (
    <>
      <Cart open={showCart} setOpen={setShowCart} />
      <div className="bg-transparent z-50 w-full top-0">
        {/* Mobile menu */}
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 lg:hidden"
            onClose={setOpen}
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
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex px-4 space-x-8">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "text-deepPink border-deepPink"
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
                    {navigation.categories.map((category, categoryIdx) => (
                      <Tab.Panel
                        key={category.name}
                        className="px-4 pt-10 pb-6 space-y-12"
                      >
                        <div className="grid grid-cols-1 items-start gap-y-10 gap-x-6">
                          <div className="grid grid-cols-1 gap-y-10 gap-x-6">
                            <div>
                              <p
                                id={`mobile-featured-heading-${categoryIdx}`}
                                className="font-medium text-gray-900"
                              >
                                Featured
                              </p>
                              <ul
                                aria-labelledby={`mobile-featured-heading-${categoryIdx}`}
                                className="mt-6 space-y-6"
                              >
                                {category.featured.map((item) => (
                                  <li key={item.name} className="flex">
                                    <a
                                      href={item.href}
                                      className="text-gray-500"
                                    >
                                      {item.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <p
                                id="mobile-categories-heading"
                                className="font-medium text-gray-900"
                              >
                                Categories
                              </p>
                              <ul
                                aria-labelledby="mobile-categories-heading"
                                className="mt-6 space-y-6"
                              >
                                {category.categories.map((item) => (
                                  <li key={item.name} className="flex">
                                    <a
                                      href={item.href}
                                      className="text-gray-500"
                                    >
                                      {item.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="grid grid-cols-1 gap-y-10 gap-x-6">
                            <div>
                              <p
                                id="mobile-collection-heading"
                                className="font-medium text-gray-900"
                              >
                                Collection
                              </p>
                              <ul className="mt-6 space-y-6">
                                {category.collection.map((item) => (
                                  <li key={item.name} className="flex">
                                    <a
                                      href={item.href}
                                      className="text-gray-500"
                                    >
                                      {item.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <p className="font-medium text-gray-900">
                                Brands
                              </p>
                              <ul
                                aria-labelledby="mobile-brand-heading"
                                className="mt-6 space-y-6"
                              >
                                {category.brands.map((item) => (
                                  <li key={item.name} className="flex">
                                    <a
                                      href={item.href}
                                      className="text-gray-500"
                                    >
                                      {item.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
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

        <header className="relative">
          <nav aria-label="Top">
            {showTopNotificationBar && (
              <TopNotificationBar
                setShowTopNotificationBar={setShowTopNotificationBar}
              />
            )}

            {/* Secondary navigation */}
            <div className="bg-transparent">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="border-b border-gray-200">
                  <div className="h-10 flex items-center justify-between">
                    {/* Logo (lg+) */}
                    <div className="hidden lg:flex lg:items-center">
                      <span>
                        <span className="sr-only">Workflow</span>
                        <img
                          className="h-8 w-auto"
                          src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                          alt=""
                        />
                      </span>
                    </div>

                    <div className="hidden z-20 h-full lg:flex">
                      {/* Mega menus */}
                      <Popover.Group className="ml-8 ">
                        <div className="h-full flex justify-center space-x-8">
                          {navigation.categories.map(
                            (category, categoryIdx) => (
                              <Popover key={category.name} className="flex">
                                {({ open }) => (
                                  <>
                                    <div className="relative flex">
                                      <Popover.Button
                                        className={classNames(
                                          open
                                            ? "border-deepPink text-deepPink"
                                            : "border-transparent text-mainBrown hover:text-mainPink",
                                          "relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px"
                                        )}
                                      >
                                        {category.name}
                                      </Popover.Button>
                                    </div>

                                    <Transition
                                      as={Fragment}
                                      enter="transition ease-out duration-200"
                                      enterFrom="opacity-0"
                                      enterTo="opacity-100"
                                      leave="transition ease-in duration-150"
                                      leaveFrom="opacity-100"
                                      leaveTo="opacity-0"
                                    >
                                      <Popover.Panel className="absolute top-full inset-x-0 text-gray-500 sm:text-sm">
                                        {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                        <div
                                          className="absolute inset-0 top-1/2 bg-white shadow-xl"
                                          aria-hidden="true"
                                        />

                                        <div className="relative bg-white">
                                          <div className="max-w-7xl mx-auto px-8">
                                            <div className="grid grid-cols-2 items-start gap-y-10 gap-x-8 pt-10 pb-12">
                                              <div className="grid grid-cols-2 gap-y-10 gap-x-8">
                                                <div>
                                                  <p
                                                    // id={`desktop-featured-heading-${categoryIdx}`}
                                                    className="font-medium text-gray-900"
                                                  >
                                                    Featured
                                                  </p>
                                                  <ul
                                                    aria-labelledby={`desktop-featured-heading-${categoryIdx}`}
                                                    className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                  >
                                                    {category.featured.map(
                                                      (item) => (
                                                        <li
                                                          key={item.name}
                                                          className="flex"
                                                        >
                                                          <a
                                                            href={item.href}
                                                            className="hover:text-gray-800"
                                                          >
                                                            {item.name}
                                                          </a>
                                                        </li>
                                                      )
                                                    )}
                                                  </ul>
                                                </div>
                                                <div>
                                                  <p
                                                    id="desktop-categories-heading"
                                                    className="font-medium text-gray-900"
                                                  >
                                                    Categories
                                                  </p>
                                                  <ul className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                                    {category.categories.map(
                                                      (item) => (
                                                        <li
                                                          key={item.name}
                                                          className="flex"
                                                        >
                                                          <a
                                                            href={item.href}
                                                            className="hover:text-gray-800"
                                                          >
                                                            {item.name}
                                                          </a>
                                                        </li>
                                                      )
                                                    )}
                                                  </ul>
                                                </div>
                                              </div>
                                              <div className="grid grid-cols-2 gap-y-10 gap-x-8">
                                                <div>
                                                  <p
                                                    id="desktop-collection-heading"
                                                    className="font-medium text-gray-900"
                                                  >
                                                    Collection
                                                  </p>
                                                  <ul className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                                    {category.collection.map(
                                                      (item) => (
                                                        <li
                                                          key={item.name}
                                                          className="flex"
                                                        >
                                                          <a
                                                            href={item.href}
                                                            className="hover:text-gray-800"
                                                          >
                                                            {item.name}
                                                          </a>
                                                        </li>
                                                      )
                                                    )}
                                                  </ul>
                                                </div>

                                                <div>
                                                  <p
                                                    id="desktop-brand-heading"
                                                    className="font-medium text-gray-900"
                                                  >
                                                    Brands
                                                  </p>
                                                  <ul
                                                    aria-labelledby="desktop-brand-heading"
                                                    className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                  >
                                                    {category.brands.map(
                                                      (item) => (
                                                        <li
                                                          key={item.name}
                                                          className="flex"
                                                        >
                                                          <a
                                                            href={item.href}
                                                            className="hover:text-gray-800"
                                                          >
                                                            {item.name}
                                                          </a>
                                                        </li>
                                                      )
                                                    )}
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </Popover.Panel>
                                    </Transition>
                                  </>
                                )}
                              </Popover>
                            )
                          )}

                          {navigation.pages.map((page) => (
                            <a
                              key={page.name}
                              href={page.href}
                              className="flex items-center text-sm font-medium text-mainBrown hover:text-mainPink"
                            >
                              {page.name}
                            </a>
                          ))}
                        </div>
                      </Popover.Group>
                    </div>

                    {/* Mobile menu and search (lg-) */}
                    <div className="flex-1 flex items-center lg:hidden">
                      <button
                        type="button"
                        className="-ml-2 bg-white p-2 rounded-md text-gray-400"
                        onClick={() => setOpen(true)}
                      >
                        <span className="sr-only">Open menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>

                    {/* Logo (lg-) */}
                    <span className="lg:hidden">
                      <span className="sr-only">Workflow</span>
                      <img
                        src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                        alt=""
                        className="h-8 w-auto"
                      />
                    </span>

                    <div className="flex-1 flex items-center justify-end">
                      <div className="flex items-center lg:ml-8">
                        <span
                          className="mx-4 h-6 w-px bg-gray-200 lg:mx-6"
                          aria-hidden="true"
                        />

                        <div className="flow-root">
                          <span
                            className="group -m-2 p-2 flex items-center cursor-pointer"
                            onClick={() => setShowCart(true)}
                          >
                            <ShoppingCartIcon
                              className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-deepPink transition duration-300"
                              aria-hidden="true"
                            />
                            <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                              {cartLength}
                            </span>
                            <span className="sr-only">
                              items in cart, view bag
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}
