import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { errorToast, successToast } from "../components/toastify/toastify";
import { storage } from "./firebase-config";

// Create a storage reference from our storage service

export const uploadImage = (images):any => {
  let promises = [];
  let urls = [];
  images.map((image) => {
    const productsRef = ref(storage, `products/${image[0].name}`);
    const uploadTask = uploadBytesResumable(productsRef, image[0]);
    promises.push(uploadTask);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        if (snapshot.state === "paused") {
          errorToast("photo upload paused");
        }
      },
      (error) => {
        console.log("Error: " + error);
        errorToast("photo upload failed");
      },
      () => {
        getDownloadURL(uploadTask?.snapshot.ref).then((downloadURL) => {
          urls.push(downloadURL);
          //   return [...urls, downloadURL];
        });
      }
    );
    return urls;
  });

  return urls;
  // Promise.all(promises)
  //   .then((response) => {
  //     console.log("promise response: ", response);

  //     successToast("All images uploaded");
  //   })
  //   .catch((err) => errorToast("image upload failed"));
};

// Create
