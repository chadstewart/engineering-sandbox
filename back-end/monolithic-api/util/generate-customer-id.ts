export const generateCustomerId = (name: string) => {
  if (name.length < 5) throw new Error("Please add a name that is 5 characters or longer");
  const removeSpaces = name.replaceAll(" ", "");
  const fiveCharacters = removeSpaces.slice(0, 5);
  const allCaps = fiveCharacters.toUpperCase();
  const generatedId = allCaps;
  return generatedId;
};
