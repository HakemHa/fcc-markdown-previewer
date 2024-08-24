import { configureStore } from "@reduxjs/toolkit";
import markReducer from "./slice";

const store = configureStore({ reducer: { markdown: markReducer } });

export default store;