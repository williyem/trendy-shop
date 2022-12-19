import { useState } from "react";
import { useAppDispatch } from "../../../../redux/hooks";
import { ORDER } from "../../../../types/order.type";
import {
  changeOrderStatus,
  getOrders,
} from "../../../../redux/slices/order-slice";
import { notification } from "antd";
import { RotateSpinner } from "react-spinners-kit";
type Iprops = {
  order: ORDER;
  setOpenDrawer: (prop: boolean) => void;
};

const OrderDetails = ({ order, setOpenDrawer }: Iprops) => {
  const dispatch = useAppDispatch();
  const [changeStatusLoading, setChangeStatusLoading] =
    useState<boolean>(false);
  const [selectedStatus, setSelectedStatus] = useState<string>(
    order?.status ?? ""
  );

  const handleOrderStatusChange = () => {
    setChangeStatusLoading(true);
    dispatch(
      changeOrderStatus({ orderId: order?._id, newStatus: selectedStatus })
    )
      .unwrap()
      .then((data: any) => {
        if (data?.data) {
          dispatch(getOrders());
          setChangeStatusLoading(false);
          notification.success({
            message: "order status changed successfully",
          });
          setOpenDrawer(false);
        }
      });
  };

  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-md">
      <div className="px-2 py-5">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          ORDER INFORMATION
        </h3>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-white px-4 py-5 sm:gap-4">
            {order?.items?.map((product: any) => (
              <li key={product?._id} className="flex py-6">
                <div className="h-18 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    src={product?.photos?.[0]}
                    alt={product.description}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3 className="text-sm">
                        <a href={product.href}>{product.name}</a>
                      </h3>
                      <p className="text-sm">
                        GHS {parseInt(String(product?.price))}
                      </p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500 ">
                      {product?.category}
                    </p>
                  </div>
                </div>
              </li>
            ))}
            <dt className="text-sm font-medium text-gray-500">Change Status</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <select
                defaultValue={order?.status}
                className="w-full p-2 bg-gray-200 mt-2 rounded-md"
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <option value="DELIVERED">Delivered</option>
                <option value="NOT DELIVERED">Not Delivered</option>
                <option value="IN PROGRESS">In Progress</option>
              </select>

              <button
                onClick={handleOrderStatusChange}
                disabled={changeStatusLoading}
                className="bg-mainPink text-white w-full p-2 rounded-md mt-3 flex justify-center disabled:bg-gray-500 disabled:cursor-wait"
              >
                {changeStatusLoading ? (
                  <RotateSpinner color="white" size={30} />
                ) : (
                  <span>submit</span>
                )}
              </button>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default OrderDetails;
