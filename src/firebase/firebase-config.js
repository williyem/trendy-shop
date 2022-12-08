// import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";

//Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const storage = getStorage(app);

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDshI2LKdmvhuK5TFOQYqf-NzN5Z51nqDA",
  authDomain: "shop-d908f.firebaseapp.com",
  projectId: "shop-d908f",
  storageBucket: "shop-d908f.appspot.com",
  messagingSenderId: "187912534553",
  appId: "1:187912534553:web:35b2a166f466ef35704888",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
