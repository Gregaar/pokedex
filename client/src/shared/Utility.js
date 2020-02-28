export const updateObject = (oldObject, updatedProps) => {
  return {
    ...oldObject,
    ...updatedProps,
  };
};

export const updateArray = (oldArray, updatedProps) => {
  return [...oldArray, ...updatedProps];
};

export const goToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
