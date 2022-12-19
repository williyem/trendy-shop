import { EyeIcon } from "@heroicons/react/outline";
import { Drawer } from "antd";
import { useState } from "react";
import { ORDER } from "../../../../types/order.type";
import OrderDetails from "./OrderDetails";

type Iprops = {
  order: ORDER;
};

const MoreBtn = ({ order }: Iprops) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <span>
        <button
          onClick={() => setOpenDrawer(true)}
          className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-mainPink focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <EyeIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
          More
        </button>
      </span>

      <Drawer
        closable={false}
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
      >
        <OrderDetails order={order} setOpenDrawer={setOpenDrawer} />
      </Drawer>
    </>
  );
};

export default MoreBtn;
