import { useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import FileList from "./file-list";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../../firebase/firebase-config";
import {
  errorToast,
  successToast,
} from "../../../../components/toastify/toastify";
import { useAppDispatch } from "../../../../redux/hooks";
import { Inputs } from "../../../../redux/slices/products-slice";
// import ButtonLoader from "../../../../components/button-loader/button-loader";
import { removeItem } from "../../../../helpers/easy";

const NewProductForm = () => {
  const [fileArr, setFileArr] = useState<any>([]);
  const [imgUrls, setImgUrls] = useState<any>([]);
  const [trigger, setTrigger] = useState<any>([]);
  const [dataToSend, setDataToSend] = useState<any>({});
  const dispatch = useAppDispatch();
  const fileInputRef = useRef<any>(null);
  const processFiles = (e: any) => {
    let files = [...fileArr, fileInputRef?.current?.files];
    setFileArr(files);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setDataToSend(data);
    let promises: any = [];

    fileArr.forEach((image: any, index: number) => {
      const productsRef = ref(storage, `products/${image[0].name}`);
      const uploadTask = uploadBytesResumable(productsRef, image[0]);
      promises.push(uploadTask);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          errorToast("operation failed");
        },
        async () => {
          await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImgUrls((prev: any) => [...prev, downloadURL]);
          });
        }
      );
    });

    Promise.all(promises)
      .then((res: any) => {
        setTrigger(!trigger);

        successToast("operation successful");
      })
      .catch((err) => {
        errorToast(err?.message);
      });
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
                  <option value="">select category</option>
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
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-700"
                >
                  Number of them in stock
                </label>
                <input
                  {...register("inStock", { required: true, min: 0 })}
                  min={1}
                  type="number"
                  className="block w-full  rounded-md border border-gray-300  p-2 focus:border-mainPink focus:ring-indigo-500 sm:text-sm"
                  placeholder="0.00"
                />
                {errors?.inStock && (
                  <span className="text-red-500 text-xs">
                    This field is required
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
                <div className="flex justify-between mt-8 ">
                  <label className="text-sm font-medium text-gray-700">
                    Photos
                  </label>
                  <span
                    className=" inline-flex justify-center py-1 px-2 border border-transparent shadow-sm text-xs font-medium cursor-pointer text-white bg-mainPink hover:bg-deepPink focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-deepPink"
                    onClick={() => fileInputRef.current.click()}
                  >
                    Select Image
                  </span>
                </div>
                <div className="mt-1 relative bg-gray-100 px-3 pt-5 pb-5 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1">
                    {fileArr.map((file: any, index: number) => {
                      return (
                        <span key={index}>
                          {/* <span>{file[0].name}</span> */}
                          <FileList
                            fileName={file[0].name}
                            index={index}
                            removeItem={(e) =>
                              removeItem(e, fileArr, setFileArr)
                            }
                          />
                        </span>
                      );
                    })}

                    <input
                      type="file"
                      // {...register("photos")}
                      // className="sr-only"
                      multiple={false}
                      ref={fileInputRef}
                      className="hidden"
                      onChange={processFiles}
                    />
                    {/* </label> */}
                    {/* <p className="pl-1">or drag and drop</p> */}
                    {/* </div> */}
                    {/* <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p> */}
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-5 space-x-5 p-3">
                <button
                  // disabled={crudLoading}
                  type="submit"
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-mainPink hover:bg-darkPink focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-deepPink"
                >
                  {/* {crudLoading && <ButtonLoader />} */}
                  Add Product
                </button>
                <button
                  type="button"
                  className="bg-white p-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-deepPink"
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
