import { CheckCircleIcon } from "@heroicons/react/solid";
import { XCircleIcon } from "@heroicons/react/outline";

interface props {
  product: any;
}

const Instock = ({ product }: props) => {
  return (
    <>
      {product?.inStock === 0 ? (
        <div className="flex ">
          <XCircleIcon className="text-xs text-red-500  w-5 h-5 mr-2" />
          <span className="text-red-500">out of stock</span>
        </div>
      ) : (
        <div className="flex ">
          <CheckCircleIcon className="text-xs text-green-500 w-5 h-5 mr-2" />
          {product?.inStock} in stock
        </div>
      )}
    </>
  );
};

export default Instock;
