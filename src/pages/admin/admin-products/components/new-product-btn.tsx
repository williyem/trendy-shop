import { Drawer } from "antd";
import { useState } from "react";
import NewProductForm from "./new-product-form";

const NewProductBtn = () => {
  const [openNewProductDrawer, setOpenNewProductDrawer] = useState(false);
  return (
    <>
      <div className="flex justify-end">
        <button
          onClick={() => setOpenNewProductDrawer(!openNewProductDrawer)}
          className="bg-mainPink text-white p-2 rounded-md"
        >
          New Product
        </button>
      </div>

      <Drawer
        title="Add New Product"
        open={openNewProductDrawer}
        onClose={() => setOpenNewProductDrawer(false)}
      >
        <NewProductForm />
      </Drawer>
    </>
  );
};

export default NewProductBtn;
