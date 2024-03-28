import { configureStore } from "@reduxjs/toolkit";
import Reducers from "../Reducers";

const store = configureStore({
  reducer: Reducers,
});

export default store;
