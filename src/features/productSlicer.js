import { createSlice } from "@reduxjs/toolkit";
import { productList } from "../data";

const productSlicer = createSlice({
  name: "productlar",
  initialState: productList,

  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    deleteProduct: (state, action) => {
      return state.filter((product) => product.id !== action.payload);
    },
    editProduct: (state, action) => {
      const { id, name, brend, price, priceSale, desc, element } =
        action.payload;
      const utodo = state.find((product) => product.id == id);
      if (utodo) {
        utodo.name = name;
        utodo.element = element;
        utodo.brend = brend;
        utodo.price = price;
        utodo.priceSale = priceSale;
        utodo.desc = desc;
      }
    },
  },
});

export const { addProduct, deleteProduct, editProduct } = productSlicer.actions;
export default productSlicer.reducer;
