import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import { Dropdown } from "antd";
import { Dialog } from "@headlessui/react";

// const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP']
const items = [
  {
    label: (
      <span className="-mx-3 text-red-400 hover:darkPink p-3 w-full">
        About Us
      </span>
    ),
    key: "item-1",
  },
  { label: "Gallery", key: "item-2" },
  { label: "Collabs", key: "item-3" },
  { label: "Contact", key: "item-4" },
  { label: "FAQs", key: "item-5" },
];

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];
const Nav = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <div className="px-6 pt-6 lg:px-4">
        <nav className="flex h-9 items-center justify-between">
          <NavLink to="/" className="-m-1.5 p-1.5">
            <img
              className="h-8"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </NavLink>
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-mainPink lg:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            {/* <Bars4Icon className="h-12 w-8" aria-hidden="true" /> */}x
          </button>
          <div className="hidden lg:flex space-x-8">
            <span className="hover:text-mainPink text-white cursor-pointer font-semibold">
              Home
            </span>

            <span className="hover:text-mainPink text-white cursor-pointer font-semibold">
              Wish List
            </span>
            <Dropdown menu={{ items }}>
              <span className="hover:text-mainPink text-white cursor-pointer font-semibold">
                Explore
              </span>
            </Dropdown>
          </div>
        </nav>
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
            <div className="flex h-9 items-center justify-between">
              <div className="flex">
                <a href="/" className="-m-1.5 p-1.5">
                  <img
                    className="h-8"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </a>
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  {/* <XMarkIcon className="h-6 w-6" aria-hidden="true" /> */} y
                </button>
              </div>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6"></div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
    </>
  );
};

export default Nav;
