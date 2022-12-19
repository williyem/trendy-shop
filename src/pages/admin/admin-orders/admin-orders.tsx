import { useEffect } from "react";
import Table from "../../../components/Table/table";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getOrders } from "../../../redux/slices/order-slice";
import { tableOptions } from "./data";

const AdminOrdersComponent = () => {
  const dispatch = useAppDispatch();
  const { loading, orders } = useAppSelector((state) => state.orders);

  useEffect(() => {
    const fetchOrders = async () => {
      dispatch(getOrders());
    };

    fetchOrders();
  }, [dispatch]);

  return (
    <div>
      <Table loading={loading} data={orders} columns={tableOptions} />
    </div>
  );
};

export default AdminOrdersComponent;
