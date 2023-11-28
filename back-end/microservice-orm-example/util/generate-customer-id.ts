export const generateCustomerId = (name: string) => {
  const removeSpaces = name.replaceAll(" ", "");
  const fiveCharacters = removeSpaces.slice(0, 5);
  const allCaps = fiveCharacters.toUpperCase();
  const generatedId = allCaps;
  return generatedId;
};