import { userSlice } from "./slice/userSlice";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
   reducer : {
    app : userSlice
   },
});