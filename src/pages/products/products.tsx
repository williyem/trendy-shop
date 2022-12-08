import { useAppDispatch } from "../../redux/hooks";
import { setProduct } from "../../redux/slices/products-slice";
import Instock from "../../components/in-stock/in-stock";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiAxios } from "../../helpers/api";
import { URL } from "../../helpers/urls";
import { ClapSpinner } from "react-spinners-kit";
import { addToCart } from "../../redux/slices/cart-slice";

const Products: React.FC = () => {
  const [fetchingProducts, setFetchingProducts] = useState<boolean>(false);
  const [products, setProducts] = useState<any>([]);
  const dispatch = useAppDispatch();
  const location = useLocation();

  const { categoryName } = location.state;

  useEffect(() => {
    const fetchProducts = async () => {
      setFetchingProducts(true);
      const { data } = await apiAxios.get(URL.getProducts + `/${categoryName}`);
      setProducts(data?.data);
      setFetchingProducts(false);
    };

    fetchProducts();
  }, [categoryName]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-6 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 uppercase">
          {categoryName || "Products"}
        </h2>

        {fetchingProducts && (
          <div className="flex justify-center w-ful">
            <ClapSpinner width={80} color="pink" />
          </div>
        )}

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products
            .filter((product: any) => {
              if (!categoryName) return product;
              return (
                product?.category.toLowerCase() === categoryName?.toLowerCase()
              );
            })
            .map((product: any) => (
              <>
                <div key={product.id} className="group relative border-[1px] ">
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
                        <NavLink
                          to={"/product"}
                          onClick={() => dispatch(setProduct(product))}
                        >
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.name}
                        </NavLink>
                      </h3>
                      <div className="mt-1 text-sm text-gray-700 font-medium flex hover:underline">
                        <Instock product={product} />
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
            ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
