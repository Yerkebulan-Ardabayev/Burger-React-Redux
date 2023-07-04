import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./category/categorySlice";
import productReducer from "./product/productSlice";
import orderReduсer, { localStorageMiddleware } from "./order/orderSlice";
import modalReduсer from "./modalDelivery/modalDeliverySlice";
import formReduсer from "./Form/formSlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
    order: orderReduсer,
    modal: modalReduсer,
    form: formReduсer,
  },
  middleware: getDefaultMiddleware => 
  getDefaultMiddleware().concat(localStorageMiddleware)
});
