import { uid } from "uid";

export const productList = [
  {
    id: uid(),
    brend: "XIAOMI",
    element: "21341472702202201",
    name: "phone",
    description: "nice",
    price: 260,
    priceSale: 200,
  },
  {
    id: uid(),
    brend: "Samsung",
    element: "21341472702202201",
    name: "tablet",
    description: "nice",
    price: 300,
    priceSale: 280,
  },
  {
    id: uid(),
    brend: "Apple",
    element: "21341472702202201",
    name: "laptop",
    description: "nice",
    price: 899,
    priceSale: 800,
  },
];

// import axios from "axios";

// export async function productList() {
//   try {
//     await axios
//       .get("https://dummyjson.com/products")
//       .then((res) => res.data.products);
//     // return res;
//   } catch (error) {
//     console.error(error);
//   }
// }
