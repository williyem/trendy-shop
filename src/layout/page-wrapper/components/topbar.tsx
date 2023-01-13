import { classNames } from "../../../helpers/ui-data";

import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import { MenuIcon, ShoppingCartIcon, XIcon } from "@heroicons/react/outline";
import TopNotificationBar from "./TopNotificationBar";
import useCart from "../../../hooks/useCart";
import Cart from "../../../components/cart/cart";
import { NavLink, useNavigate } from "react-router-dom";

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
    { name: "All", href: "/products" },
    { name: "Clothing", href: "/products" },
    { name: "Accessories", href: "/products" },
  ],
};

export default function Topbar() {
  const navigate = useNavigate();
  const [showTopNotificationBar, setShowTopNotificationBar] = useState(true);
  const [open, setOpen] = useState<boolean>(false);
  const [showCart, setShowCart] = useState<boolean>(false);

  const { cartLength } = useCart();

  return (
    <>
      <Cart open={showCart} setOpen={setShowCart} />
      <div className="bg-transparent z-50 w-full top-0">
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
                </Tab.Group>

                <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <span
                        onClick={() => {
                          navigate(page.href, {
                            state: {
                              categoryName:
                                page?.name === "All"
                                  ? null
                                  : page.name?.toLowerCase(),
                            },
                          });

                          setOpen(false);
                        }}
                        className="-m-2 p-2 block font-medium text-gray-900"
                      >
                        {page.name}
                      </span>
                    </div>
                  ))}
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

            <div className="bg-transparent">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="border-b border-gray-200">
                  <div className="h-10 flex items-center justify-between">
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
                          {navigation.pages.map((page) => (
                            <NavLink
                              key={page.name}
                              to={"/products"}
                              state={{
                                categoryName:
                                  page?.name?.toLowerCase() !== "all"
                                    ? page?.name
                                    : "",
                              }}
                              className="flex items-center text-sm font-medium text-mainBrown hover:text-mainPink"
                            >
                              {page.name}
                            </NavLink>
                          ))}
                        </div>
                      </Popover.Group>
                    </div>

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
