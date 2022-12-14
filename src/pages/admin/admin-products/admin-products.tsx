import { useEffect } from "react";
import Table from "../../../components/Table/table";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getProductByCategory } from "../../../redux/slices/products-slice";
import NewProductBtn from "./components/new-product-btn";
import { tableOptions } from "./data";

const AdminProductsComponent = () => {
  const { products, loading } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(getProductByCategory(""));
    };

    fetchProducts();
  }, [dispatch]);

  return (
    <div>
      <NewProductBtn />
      <Table loading={loading} data={products ?? []} columns={tableOptions} />
    </div>
  );
};

export default AdminProductsComponent;
