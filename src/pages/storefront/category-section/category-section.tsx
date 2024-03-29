import React from "react";
import { NavLink } from "react-router-dom";
import { categories } from "../../../helpers/ui-data";

const CategorySection: React.FC = () => {
  return (
    <>
      <section
        aria-labelledby="category-heading"
        className="pt-24 sm:pt-32 xl:max-w-7xl xl:mx-auto xl:px-8"
      >
        <div className="px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0">
          <h2
            id="category-heading"
            className="text-2xl font-extrabold tracking-tight text-gray-900"
          >
            Shop by Category
          </h2>
          <NavLink
            to="/products"
            className="hidden text-sm font-semibold text-mainPink hover:text-deepPink sm:block"
          >
            Browse all products<span aria-hidden="true"> &rarr;</span>
          </NavLink>
        </div>

        <div className="mt-4 flow-root">
          <div className="-my-2">
            <div className="box-content py-2 relative h-80 overflow-x-auto xl:overflow-visible">
              <div className="absolute min-w-screen-xl px-4 flex space-x-8 sm:px-6 md:relative md:px-8 md:space-x-0 md:grid md:grid-cols-2 md:gap-x-8">
                {categories.map((category) => (
                  <NavLink
                    state={{ categoryName: category.name }}
                    key={category.name}
                    to={category.href}
                    className="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 md:w-auto"
                  >
                    <span aria-hidden="true" className="absolute inset-0">
                      <img
                        src={category.imageSrc}
                        alt=""
                        className="w-full h-full object-center object-cover"
                      />
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                    />
                    <span className="relative mt-auto text-center text-xl font-bold text-white">
                      {category.name}
                    </span>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 px-4 sm:hidden">
          <span className="block text-sm font-semibold text-mainPink hover:text-deepPink">
            Browse all categories<span aria-hidden="true"> &rarr;</span>
          </span>
        </div>
      </section>
    </>
  );
};

export default CategorySection;
