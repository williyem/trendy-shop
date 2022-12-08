//TODO:extract this function later
export const removeItem = (index: any, fileArr: any[], setFileArr: any) => {
  const pictureArr = [...fileArr];
  pictureArr.splice(index, 1);
  setFileArr(pictureArr);
};

// export const updateCartItem = (
//   cartItems: [],
//   product: any,
//   value: number | string | boolean
// ) => {
//   const cartItemsCopy = [...cartItems];

//   let newProduct: Inputs = {
//     ...product,
//     quantity: value,
//   };

//   const indexOfProduct = cartItems.findIndex(
//     (item: any) => item.id === product.id
//   );

//   return cartItemsCopy.splice(indexOfProduct, 1, newProduct);
// };
