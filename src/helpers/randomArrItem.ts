const randomArrItem = (arr: unknown[], removeItem?: boolean) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  if (removeItem) {
    arr.splice(randomIndex, 1);
  }

  return item;
};

export default randomArrItem;
