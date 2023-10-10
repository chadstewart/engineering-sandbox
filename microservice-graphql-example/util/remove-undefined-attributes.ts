interface InputObject {
  [key: string] : any
};

export const removeUndefinedValuesFromObject = (obj: InputObject) => {
  Object.keys(obj).forEach(key => !obj[key] && delete obj[key])
  return obj;
};