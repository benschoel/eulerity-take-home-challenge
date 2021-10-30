import { configureStore } from "@reduxjs/toolkit";
import petsSliceReducer from "./slices/petsSlice";

export default configureStore({
    reducer: {
        pets: petsSliceReducer,
    },
});
