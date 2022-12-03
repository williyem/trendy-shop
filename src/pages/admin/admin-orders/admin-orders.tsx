// import Table from "../../components/Table/table";
// import useFetchOrders from "../../hooks/useFetchOrders";
import Table from "../../../components/Table/table";
// import { tableOptions } from "./data";

export const tableOptions = [
  { Header: "ID", accessor: "id" },
  { Header: "Recipient Name", accessor: "name" },
  { Header: "Recipient Phone", accessor: "phone" },
  { Header: "Status", accessor: "status" },
  { Header: "Date", accessor: "createdAt" },
  {
    Header: "Total Price",
    accessor: "totalPrice",
    Cell: (data: any) => {
      return <span>GH₵ {data?.value}</span>;
    },
  },
  { Header: "Total QTY", accessor: "" },
  { Header: "Actions", accessor: "", Cell: () => {} },
];

type Props = {};

const AdminOrdersComponent = (props: Props) => {
  // const { orders, loading } = useFetchOrders();

  return (
    <div>
      <Table loading={false} data={[]} columns={tableOptions} />
    </div>
  );
};

export default AdminOrdersComponent;
