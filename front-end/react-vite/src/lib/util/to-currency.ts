export const toCurrency = (input: number) => {
  let data = `${input}`;

  for (let x = data.length - 3; x > 0; x = x - 3) {
    data = data.slice(0, x) + "," + data.slice(x);
  }

  const result = `$${data}`;

  return result;
};
