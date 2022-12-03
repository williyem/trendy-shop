import { XCircleIcon } from "@heroicons/react/outline";

type Props = {
  setShowTopNotificationBar: (prop: boolean) => void;
};

const TopNotificationBar = ({ setShowTopNotificationBar }: Props) => {
  return (
    <div className="bg-mainPink">
      <div className="max-w-7xl mx-auto h-10 px-4 flex items-center justify-between sm:px-6 lg:px-8">
        <div>
          <XCircleIcon
            className="w-8 h-8 text-white cursor-pointer"
            onClick={() => setShowTopNotificationBar(false)}
          />
        </div>

        <div>
          <p className="flex-1 text-center text-sm mx-auto font-medium text-white lg:flex-none">
            Get free delivery on orders over $100
          </p>
        </div>

        <div>
          <span className="h-6 w-px bg-gray-600" aria-hidden="true" />
          <span className="text-sm font-medium text-white hover:text-gray-100">
            Sign in
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopNotificationBar;
