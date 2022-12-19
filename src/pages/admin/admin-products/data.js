import { EyeIcon, PencilAltIcon } from "@heroicons/react/outline";
import DeleteBtn from "./components/DeleteBtn";

export const tableOptions = [
  {
    Header: "Photo",
    accessor: "photos",
    Cell: ({ value }) => {
      return <img src={value[0]} className="w-10 h-10 rounded-full" alt="" />;
    },
  },
  { Header: "Name", accessor: "name" },
  { Header: "Category", accessor: "category" },
  {
    Header: "GH₵ Price",
    accessor: "price",
    Cell: ({ value }) => {
      return <span>GH₵ {value}</span>;
    },
  },
  {
    Header: "Actions",
    accessor: "",
    Cell: (data) => {
      return (
        <div className="flex space-x-3">
          <button
            type="button"
            className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <EyeIcon className="w-5 h-5" />
          </button>
          <button
            type="button"
            className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <PencilAltIcon className="w-5 h-5" />
          </button>
          <DeleteBtn product={data?.row?.original} />
        </div>
      );
    },
  },
];
