
import { configureStore } from "@reduxjs/toolkit";
import educationReducer from './reducers/educationSlice';

export const store = configureStore({
    reducer:{
        education: educationReducer,
    },
});

export default store;