import { useAppDispatch } from "../../redux/hooks";
import { getProducts, setProduct } from "../../redux/slices/products-slice";
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
    category: "ACCESSORY",
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

  // useEffect(() => {
  //   dispatch(getProducts());
  // }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-6 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          clothings
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={product.photos[0]}
                  alt={product.description}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a
                      href={"/product"}
                      onClick={() => dispatch(setProduct(product))}
                    >
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                </div>
                <p className="text-sm font-medium text-gray-900">
                  GHS {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
