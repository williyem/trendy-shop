// import NewProductBtn from "./components/NewProductBtn";
import Table from "../../../components/Table/table";
import NewProductBtn from "./components/new-product-btn";
// import { tableOptions } from "./data";

export const tableOptions = [{ header: "ID", accessor: "id" }];

const AdminProductsComponent = () => {
  return (
    <div>
      <NewProductBtn />
      <Table loading={false} data={[]} columns={tableOptions} />
    </div>
  );
};

export default AdminProductsComponent;
