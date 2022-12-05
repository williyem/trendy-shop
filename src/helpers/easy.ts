//TODO:extract this function later
export const removeItem = (index: any, fileArr: any[], setFileArr: any) => {
  const pictureArr = [...fileArr];
  pictureArr.splice(index, 1);
  setFileArr(pictureArr);
};
