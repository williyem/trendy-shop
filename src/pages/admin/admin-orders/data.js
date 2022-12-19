import MoreBtn from "./components/MoreBtn";

export const tableOptions = [
  {
    Header: "Recipient Name",
    accessor: "name",
    Cell: (data) => {
      return (
        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium capitalize">
          {data?.value}
        </span>
      );
    },
  },
  { Header: "Recipient Phone", accessor: "phone" },
  { Header: "Location", accessor: "location" },
  { Header: "Landmark", accessor: "landmark" },
  {
    Header: "Status",
    accessor: "status",
    Cell: (data) => {
      return (
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-white ${
            data?.value === "NOT DELIVERED"
              ? "bg-red-400"
              : data?.value === "IN PROGRESS"
              ? "bg-yellow-400"
              : "bg-green-400"
          }`}
        >
          {data?.value}
        </span>
      );
    },
  },
  {
    Header: "Total Price",
    accessor: "totalPrice",
    Cell: (data) => {
      return <span>GH₵ {data?.value}</span>;
    },
  },
  {
    Header: "Actions",
    accessor: "",
    Cell: (data) => {
      return <MoreBtn order={data?.row?.original} />;
    },
  },
];
