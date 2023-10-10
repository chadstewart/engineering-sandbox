import { client } from "../services/database";

const ROW_LIMIT = 25;

export const orders = () => {
  return client.query(`SELECT * FROM orders LIMIT ${ROW_LIMIT};`);
};