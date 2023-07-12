import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth.js";
import { infoReducer } from "./slices/info.js";
import { creditsReducer } from "./slices/credits.js";
const store = configureStore({
  reducer: {
    auth: authReducer,
    info: infoReducer,
    credits: creditsReducer,
  },
});

export default store;
