interface InputObject {
  [key: string] : unknown
};

export const removeUndefinedValuesFromObject = (obj: InputObject) => {
  Object.keys(obj).forEach(key => !obj[key] && delete obj[key])
  return obj;
};