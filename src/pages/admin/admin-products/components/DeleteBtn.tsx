import { TrashIcon } from "@heroicons/react/outline";
import { Modal, notification } from "antd";
import { useState } from "react";
import { useAppDispatch } from "../../../../redux/hooks";
import {
  deleteProduct,
  getProductByCategory,
} from "../../../../redux/slices/products-slice";
import { PRODUCT } from "../../../../types/product.type";

type IProps = {
  product: PRODUCT;
};

const DeleteBtn = ({ product }: IProps) => {
  const dispatch = useAppDispatch();
  const [deleteProductLoading, setDeleteProductLoading] =
    useState<boolean>(false);

  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleDeleteProduct = () => {
    setDeleteProductLoading(true);
    dispatch(deleteProduct({ productId: product?._id }))
      .unwrap()
      .then((data: any) => {
        if (data?.data) {
          dispatch(getProductByCategory(""));
          setDeleteProductLoading(false);
          notification.success({
            message: "product deleted successfully",
          });
          setOpenDeleteModal(false);
        }
      });
  };

  return (
    <>
      <button
        onClick={() => setOpenDeleteModal(true)}
        className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <TrashIcon className="w-5 h-5" />
      </button>

      <Modal
        centered
        footer={false}
        open={openDeleteModal}
        onOk={() => setOpenDeleteModal(false)}
        onCancel={() => setOpenDeleteModal(false)}
      >
        <div>
          <h1 className="font-semi-bold text-xl">
            Are you sure you want to delete this {product?.name} ?
          </h1>

          <div className="flex space-x-3 justify-end mt-4">
            <button
              disabled={deleteProductLoading}
              onClick={handleDeleteProduct}
              className="bg-red-600 text-white rounded-md py-2 px-6 disabled:bg-gray-400"
            >
              Yes
            </button>
            <button
              disabled={deleteProductLoading}
              onClick={() => setOpenDeleteModal(false)}
              className="bg-blue-600 text-white rounded-md py-2 px-6 disabled:bg-gray-400"
            >
              No
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DeleteBtn;
