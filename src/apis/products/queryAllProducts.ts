import axios from "axios";
import Product from "../../entity/product";

export default async function getAllProducts(): Promise<Product[]> {
  const res = [] as Product[];
  await axios
    .get("https://api.maiquer.tech/api/evaluation/queryAll")
    .then((response) => {
      console.log(response.data.data);
      for (const i of response.data.data) {
        const p = new Product(i.name, i.Id, i.coverPic, i.realUrl);
        res.push(p);
      }
    })//
    .catch((err) => {
      console.log(err);
    });
  return res;
}
