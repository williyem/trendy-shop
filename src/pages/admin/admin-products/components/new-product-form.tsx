import { useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

enum PRODUCT_CATEGORY {
  CLOTHING,
  ACCESSORIES,
  OTHERS,
}

type Inputs = {
  name: string;
  price: number;
  description?: string;
  photos: any;
  category: PRODUCT_CATEGORY;
};

const NewProductForm = () => {
  // const [fileObj, setFileObj] = useState({});
  // const processFiles = () => {
  //   let files = fileInputRef?.current?.files;
  //   let url = files && URL?.createObjectURL(files[0]);
  //   if (files[0].size / 1024 > 700) {
  //   }
  //   let fileObj = { file: files[0], fileName: files[0].name, url: url };
  //   setFileObj(fileObj);
  // };
  const fileInputRef = useRef<any>(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <div className="">
      <div className="bg-white shadow px-2 sm:rounded-lg">
        <div className="">
          <div className="">
            <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product Name
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  className="block w-full  rounded-md border border-gray-300  p-2 focus:border-mainPink focus:ring-indigo-500 sm:text-sm"
                  placeholder="Ladies Kaba & Slate"
                />
                {errors?.name && (
                  <span className="text-red-500 text-xs">
                    Product is required
                  </span>
                )}
              </div>

              <div>
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-700"
                >
                  Price (GH₵)
                </label>
                <input
                  {...register("price", { required: true, min: 0 })}
                  min={1}
                  type="number"
                  className="block w-full  rounded-md border border-gray-300  p-2 focus:border-mainPink focus:ring-indigo-500 sm:text-sm"
                  placeholder="0.00"
                />
                {errors?.price && (
                  <span className="text-red-500 text-xs">
                    Price is required
                  </span>
                )}
              </div>
              <div className="">
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700"
                >
                  Category
                </label>
                <select
                  {...register("category", { required: true })}
                  className="block w-full  rounded-md border border-gray-300  p-2 focus:border-mainPink focus:ring-indigo-500 sm:text-sm"
                >
                  <option value="CLOTHING">Clothing</option>
                  <option value="ACCESSORIES">Accessories</option>
                  <option value="OTHERS">Others</option>
                </select>
                {errors.category && (
                  <span className="text-red-500 text-xs">
                    category is required
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <div className="mt-1">
                  <textarea
                    {...register("description", { required: true })}
                    rows={3}
                    className="p-3 shadow-sm focus:ring-indigo-500 focus:border-mainPink block w-full sm:text-sm border border-gray-300 rounded-md"
                    placeholder="Beautiful African ladies wear made in Ghana"
                    defaultValue={""}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Photo
                </label>
                <div className="mt-1 relative flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  {/* <img
                    src={!!fileObj ? `${fileObj?.url}` : `${agentInfo?.photo}`}
                    alt=""
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null;
                      currentTarget.src = "noImage";
                    }}
                    className={`h-full w-full rounded-full`}
                  /> */}
                  <div className="space-y-1 text-center">
                    <svg
                      onClick={() => fileInputRef.current.click()}
                      className="mx-auto h-12 w-12 text-gray-400 hover:text-gray-700 transition duration-500 cursor-pointer"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600 justify-center items-center">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span
                          className="text-center w-full mx-auto"
                          onClick={() => fileInputRef.current.click()}
                        >
                          Upload a file
                        </span>
                        <input
                          type="file"
                          {...register("photos")}
                          // className="sr-only"
                          multiple={false}
                          ref={fileInputRef}
                          className="hidden"
                          // onChange={() => {
                          //   processFiles();
                          // }}

                          // type="file"
                        />
                      </label>
                      {/* <p className="pl-1">or drag and drop</p> */}
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-5 space-x-5 p-3">
                <button
                  type="submit"
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-mainPink hover:bg-darkPink focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Add Product
                </button>
                <button
                  type="button"
                  className="bg-white p-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProductForm;
