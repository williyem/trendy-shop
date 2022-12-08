import { useAppDispatch } from "../../redux/hooks";
import { getProducts, setProduct } from "../../redux/slices/products-slice";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { ShoppingBagIcon, XCircleIcon } from "@heroicons/react/outline";
import Instock from "../../components/in-stock/in-stock";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
const products = [
  {
    id: 1,
    name: "Leather Long Wallet",
    category: "CLOTHING",
    price: "75",
    inStock: 5,
    photos: [
      "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
    ],
    description: "Hand stitched, orange leather long wallet.",
  },
  {
    id: 2,
    name: "Throwback Hip Bag",
    category: "OTHERS",
    price: "90.00",
    inStock: 5,
    photos: [
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    ],
    description:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 3,
    name: "Medium Stuff Satchel",
    category: "ACCESSORY",
    price: "32.00",
    inStock: 5,
    photos: [
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    ],
    description:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  {
    id: 4,
    name: "Leather Long Wallet",
    category: "CLOTHING",
    price: "75",
    inStock: 5,
    photos: [
      "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
    ],
    description: "Hand stitched, orange leather long wallet.",
  },

  {
    id: 5,
    name: "Leather Long Wallet",
    category: "CLOTHING",
    price: "75",
    inStock: 5,
    photos: [
      "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
    ],
    description: "Hand stitched, orange leather long wallet.",
  },
  {
    id: 6,
    name: "Leather Long Wallet",
    category: "CLOTHING",
    price: "75",
    inStock: 5,
    photos: [
      "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
    ],
    description: "Hand stitched, orange leather long wallet.",
  },
  {
    id: 7,
    name: "Throwback Hip Bag",
    category: "OTHERS",
    price: "90.00",
    inStock: 5,
    photos: [
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    ],
    description:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 8,
    name: "Medium Stuff Satchel",
    category: "ACCESSORIES",
    price: "32.00",
    inStock: 5,
    photos: [
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    ],
    description:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];

const Products: React.FC = () => {
  const dispatch = useAppDispatch();

  const { categoryName } = useParams();
  // const existingCategories = ["clothings", "others", "accessories"];

  // useEffect(() => {
  //   // dispatch(getProducts());

  // }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-6 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 uppercase">
          {categoryName || "Products"}
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products
            .filter((product) => {
              if (!categoryName) return product;
              return (
                product?.category.toLowerCase() === categoryName?.toLowerCase()
              );
            })
            .map((product) => (
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
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
