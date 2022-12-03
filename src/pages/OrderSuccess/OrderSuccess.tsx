import React from "react";
import { NavLink } from "react-router-dom";
import SuccessIcon from "../../assets/icons/success.icon";

type Props = {};

const OrderSuccess = (props: Props) => {
  return (
    <>
      <div className="min-h-full pt-16 pb-12 flex flex-col bg-white">
        <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex-shrink-0 flex justify-center">
            <span className="inline-flex">
              <span className="sr-only">Workflow</span>
              <SuccessIcon />
            </span>
          </div>
          <div className="py-16">
            <div className="text-center">
              <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide"></p>
              <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                Congratulations 🎉 🎉 🎊
              </h1>
              <p className="mt-2 text-base text-gray-500">
                Your order was successfully placed. Our operation team will call
                you to confirm the order.
              </p>
              <div className="mt-6">
                <NavLink
                  to="/"
                  className="text-base font-medium text-mainPink hover:text-darkPink"
                >
                  Go back<span aria-hidden="true"></span>
                </NavLink>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default OrderSuccess;
