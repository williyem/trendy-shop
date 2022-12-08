import { TrashIcon } from "@heroicons/react/solid";

interface IProp {
  fileName: string;
  removeItem: (index: number) => void;
  index: number;
}
const FileList = ({ fileName, removeItem, index }: IProp) => {
  return (
    <>
      <div className="w-[95%] flex px-2 min-h-[36px] h-10 bg-white shadow mb-2 rounded-md items-center">
        <div className="w-full flex">
          <div className="mr-2 text-xs text-gray-700 h-full items-center flex">
            {fileName}
          </div>
        </div>

        <span className="h-full items-center flex text-red-400">
          <TrashIcon
            onClick={() => {
              removeItem(index);
            }}
            className="h-3 w-3 cursor-pointer hover:text-red-800"
          />
        </span>
      </div>
    </>
  );
};

export default FileList;
