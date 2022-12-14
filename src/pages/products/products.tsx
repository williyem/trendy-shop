import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  getProductByCategory,
  setProduct,
} from "../../redux/slices/products-slice";

import Instock from "../../components/in-stock/in-stock";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { addToCart } from "../../redux/slices/cart-slice";
import { ClapSpinner } from "react-spinners-kit";

const Products: React.FC = () => {
  const { products, loading } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  const location = useLocation();

  const categoryName = location?.state?.categoryName ?? null;

  useEffect(() => {
    const fetchProducts = async () => {
      categoryName
        ? dispatch(getProductByCategory(categoryName))
        : dispatch(getProductByCategory(""));
    };

    fetchProducts();
  }, [categoryName, dispatch]);

  return (
    <div className="bg-white md:min-h-[350px] 2xl:md:min-h-[650px]">
      <div className="mx-auto max-w-2xl py-6 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 uppercase">
          {categoryName || "Products"}
        </h2>
        {loading && (
          <div className="flex h-full items-center justify-center w-full">
            <ClapSpinner width={80} color="pink" />
          </div>
        )}

        {!loading && (
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products?.length !== 0 ? (
              products
                .filter((product: any) => {
                  if (!categoryName) return product;
                  return (
                    product?.category.toLowerCase() ===
                    categoryName?.toLowerCase()
                  );
                })
                .map((product: any) => (
                  <>
                    <div className="">
                      <div
                        key={product.id}
                        className="group relative border-[1px] "
                      >
                        {/* <ShoppingBagIcon /> */}
                        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                          <img
                            src={product.photos[0]}
                            alt={product.description}
                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                          />
                        </div>
                        <div className="mt-4 flex justify-between p-2">
                          <div>
                            <h3 className="text-sm text-gray-700">
                              <a
                                href={"/product"}
                                onClick={() => dispatch(setProduct(product))}
                              >
                                <span
                                  aria-hidden="true"
                                  className="absolute inset-0"
                                />
                                {product.name}
                              </a>
                            </h3>
                            <div className="mt-1 text-sm text-gray-700 font-medium flex hover:underline">
                              <Instock product={product} />
                            </div>
                          </div>
                          <p className="text-md font-medium text-gray-900">
                            GHS {product.price}
                          </p>
                        </div>
                      </div>
                      <button
                        disabled={product?.inStock === 0}
                        onClick={() => dispatch(addToCart(product))}
                        className="hover:shadow-xl transition duration-300 hover:bg-deepPink disabled:bg-gray-500 disabled: w-full flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-mainPink hover:bg-darkPink focus:outline-none "
                      >
                        <span>Add to cart</span>
                      </button>
                    </div>
                  </>
                ))
            ) : (
              <div className="bg-red-500 w-full h-full"></div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
